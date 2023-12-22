import { Controller, useForm } from "react-hook-form";
import PageHelmet from "../../../Hook/PageHelmet";
import Heading from "../../../Hook/Heading";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";


const UpdateTask = () => {
    const taskData = useLoaderData();
    const {_id,title, description, priority}=taskData;
    const axiosSecure = useAxiosSecure();
    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (event) => {
        const title = event.title;
        const description = event.description;
        const priority = event.selectOption;
        const deadline = startDate;
        const data = {title, description, priority, deadline };
        axiosSecure.patch(`/update_task/${_id}`, data)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                toast.success('Task Update successfully');

            }
        })
        .catch(err => console.error(err));
    };
    return (
        <div>
            <PageHelmet title='Update Task || Task Manager'></PageHelmet>
            <Heading heading='Update Task' subHeading='Fell Free Update your Task Here'></Heading>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={title}
                            className="input input-bordered text-black"
                            {...register('title', {
                                required: 'Name is required',

                            })}
                        />
                        {errors.name && <span className="text-red-700">{errors.name.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            defaultValue={description}
                            type="text"
                            className="input input-bordered text-black"
                            {...register('description', { required: 'Description is required' })}
                        />
                        {errors.description && <span className="text-red-700">{errors.description.message}</span>}
                    </div>
                    <div className="form-control py-4">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <Controller
                            defaultValue={priority}
                            name="selectOption"
                            control={control}
                            render={({ field }) => (
                                <select {...field} defaultValue='None' className="select select-bordered w-full max-w-xs">
                                    <option value="" disabled>Select an option</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                            )}
                        />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="form-control mt-6">
                        <button className=" bg-[#FFD700] hover:[#FFDB58] text-[rgb(0,31,63)] dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update Task</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default UpdateTask;