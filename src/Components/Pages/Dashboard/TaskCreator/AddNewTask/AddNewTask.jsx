import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from 'sweetalert2'
import useCoin from "../../../../Hooks/useCoin";
import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


const AddNewTask = () => {
    const [taskQuantity, setTaskQuntity] = useState()
    const [paybleAmmount, setPaybleAmmount] = useState()
    const [coin] = useCoin();
    const [cost, setCost] = useState()
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    //form handle
    const { register, handleSubmit, reset } = useForm();

    const handleQuantity = (event) => { setTaskQuntity(event.target.value) };
    const handlePaybleAmmount = (event) => { setPaybleAmmount(event.target.value) };



    const onSubmit = (data, e) => {
        e.preventDefault();
        const totalCost = taskQuantity * paybleAmmount;
        setCost(totalCost)

        if (totalCost < coin) {
            const postData = {
                task_title: data.task_title,
                task_details: data.task_details,
                task_quantity: taskQuantity,
                payable_amount: paybleAmmount,
                completion_date: data.completion_date,
                submission_info: data.submission_info,
                task_image_url: data.photo,
                creator_name: user?.displayName,
                creator_email: user?.email,
                currentTime: new Date().toISOString()
            }
            axiosSecure.post('/tasks', postData)
                .then(res => {
                    if (res.data.insertedId) {
                        axiosPublic.put(`/users/updateCoin/${user?.email}`, { totalCost, cost })
                            .then(res => {
                                if (res.data.modifiedCount > 0) {
                                    Swal.fire("TAsk Addes Successfully")
                                }
                            })
                    }
                })

        } else {
            //
        }

    };




    return (
        <div>
            <h2>{coin}</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body">
                <div className=" grid grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Title</span>
                        </label>
                        <input type="text" {...register('task_title')} placeholder="Task title" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Quantity</span>
                        </label>
                        <input type="text" onChange={handleQuantity} placeholder="task quantity" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className=" grid grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Payable Amount (Per Task)</span>
                        </label>
                        <input type="text" onChange={handlePaybleAmmount} placeholder="payble ammount " className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Completion Date
                            </span>
                        </label>
                        <input type="date" {...register('completion_date')} placeholder="completion_date" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className=" grid grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Submission Info (Per Task)</span>
                        </label>
                        <input type="text" {...register('submission_info')} placeholder="Submission Info" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Completion Date
                            </span>
                        </label>
                        <input type="text" {...register('photo')} placeholder="task photo url" className="input input-bordered w-full" />
                    </div>
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Details</span>
                    </label>
                    <textarea placeholder="Task Details....." {...register('task_details')} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>



                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-outline  btn-success border border-b-4">Add Task</button>
                </div>

            </form>
        </div>
    );
};

export default AddNewTask;