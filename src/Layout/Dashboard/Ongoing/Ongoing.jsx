import { useQuery } from "@tanstack/react-query";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Heading from "../../../Hook/Heading";
import PageHelmet from "../../../Hook/PageHelmet";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { toast } from "react-toastify";

const Ongoing = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: ongoingTasks, isLoading, error, refetch } = useQuery({
        queryKey: ["ongoingTasks"],
        queryFn: async () => {
            const res = await axiosSecure(`/ongoing/${user?.email}`);
            return res.data;
        }
    });
    const { data: completeTasks, refetch: compleatRefetch } = useQuery({
        queryKey: ["completeTasks"],
        queryFn: async () => {
            const res = await axiosSecure(`/complete/${user?.email}`);
            return res.data;
        }
    });



    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        console.log(result)
        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        if (result.type === 'completeTasks') {
            const newOrder = Array.from(completeTasks);
            const [movedTask] = newOrder.splice(startIndex, 1);
            newOrder.splice(endIndex, 0, movedTask);

            axiosSecure.post('/updateComplete', newOrder)
                .then(() => {
                    toast.success('Successfully Completed Task')
                })
                .catch(err => console.error(err));
            compleatRefetch();
        }
        if (result.type === 'ongoingTask') {
            const newOngoingTask = Array.from(ongoingTasks);
            const [movedTask] = newOngoingTask.splice(startIndex, 1);
            newOngoingTask.splice(endIndex, 0, movedTask);
            axiosSecure.post('/ongoingTask', newOngoingTask)
                .then(() => {
                    toast.success('Successfully Completed Task')
                })
                .catch(err => console.error(err));
            refetch();

        }

    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex flex-col md:flex-row justify-evenly gap-5 items-center">
                <div>
                    {/* Completed tasks */}
                    <PageHelmet title='Complete|| Task Manager' />
                    <Heading heading='Complete' subHeading='See the Complete Process' />
                    {isLoading && <span className="loading mx-auto my-4 loading-dots loading-lg"></span>}
                    {error && <div>Error fetching data. Please try again.</div>}
                    {completeTasks && (
                        <div className="overflow-x-auto">
                            <Droppable droppableId="completeTasks" type="completeTasks">
                                {(provided) => (
                                    <table className="table" {...provided.droppableProps} ref={provided.innerRef}>
                                        {/* ... */}
                                        {/* Render your draggable items within the Droppable */}
                                        {/* ... */}
                                        {provided.placeholder}
                                    </table>
                                )}
                            </Droppable>
                        </div>
                    )}
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div>
                    {/* Ongoing tasks */}
                    <PageHelmet title='On Going || Task Manager' />
                    <Heading heading='On Going' subHeading='See the Running Process' />
                    {isLoading && <span className="loading mx-auto my-4 loading-dots loading-lg"></span>}
                    {error && <div>Error fetching data. Please try again.</div>}
                    {ongoingTasks && (
                        <div className="overflow-x-auto">
                            <Droppable droppableId="ongoingTasks" type="ongoingTasks">
                                {(provided) => (
                                    <table className="table" {...provided.droppableProps} ref={provided.innerRef}>
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Priority</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ongoingTasks.map((task, index) => (
                                                <Draggable key={task?._id} draggableId={task?._id} index={index}>
                                                    {(provided) => (
                                                        <tr
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="hover"
                                                        >
                                                            <td>{task?.title}</td>
                                                            <td>{task?.description}</td>
                                                            <td>{task?.priority || 'None'}</td>
                                                        </tr>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </tbody>
                                    </table>
                                )}
                            </Droppable>
                        </div>
                    )}
                </div>
            </div>
        </DragDropContext>
    );
};

export default Ongoing;
