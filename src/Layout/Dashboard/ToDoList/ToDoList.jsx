import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useAuth from "../../../Hook/useAuth";
import Heading from "../../../Hook/Heading";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ToDoList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const email = user?.email;
  const { data: allTask = [], isLoading, refetch } = useQuery({
    queryKey: ['allTask'],
    queryFn: async () => {
      const res = await axiosSecure(`/all_task/${email}`)
      return res.data;
    }

  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/task_delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Task has been deleted.",
                icon: "success"
              });
              refetch();
            }
          })
          .catch((error) => console.error(error))
      }
    });
  }
  const handlePlay = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Play This Task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Play it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post(`/modified/`,task)
          .then((res) => {
            if (res.data.insertedId > 0) {
              Swal.fire({
                title: "This Task Status",
                text: "Your Task has been Running!.",
                icon: "success"
                
              });
              refetch();
            }
          })
          .catch((error) => console.error(error))
      }
      
    });
  }
  return (

    <div className="overflow-x-auto">
      <Heading heading='To Do List' subHeading='See All The Task'></Heading>
      <table className="table table-pin-cols my-4">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Priority</td>
            <td>Date</td>

            <td>Action</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading ? <span className="loading ml-[500px] loading-dots loading-lg"></span> : ''
          }
          {
            allTask.map(task => <tr key={task._id}>
              <td>{task?.title}</td>
              <td>{task?.description}</td>
              <td className={`text-center ${task?.priority === 'low' ? 'bg-yellow-400 text-white' : task?.priority === 'moderate' ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'}`}>{
                task?.priority || 'None'
              }</td>
              <td>{task?.deadline}</td>
           
              <td className="flex items-center gap-3">
                
                 <button onClick={() => handlePlay(task)} className="btn btn-ghost btn-xs bg-green-600 text-white hover:text-black">Play</button> 

      
                <Link className="btn btn-ghost btn-xs bg-orange-600 text-white hover:text-black" to={`/dashboard/find_task/${task?._id}`}>Update</Link>
                <button onClick={() => handleDelete(task?._id)} className="btn btn-ghost btn-xs bg-red-500 text-white hover:text-black">Delete</button>
              </td>
              <th></th>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;