import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from 'sweetalert2'
import useCoin from "../../../../Hooks/useCoin";
import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAllUsers from "../../../../Hooks/useAllUsers";


const AddNewTask = () => {
    const [taskQuantity, setTaskQuntity] = useState()
    const [paybleAmmount, setPaybleAmmount] = useState()
    const [coin] = useCoin();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [serverUsers] = useAllUsers();

    //form handle
    const { register, handleSubmit } = useForm();

    const handleQuantity = (event) => { setTaskQuntity(event.target.value) };
    const handlePaybleAmmount = (event) => { setPaybleAmmount(event.target.value) };



    const onSubmit = (data, e) => {
        e.preventDefault();

        const totalCost = taskQuantity * paybleAmmount;
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
                    console.log(res.data);
                    if (res.data.insertedId) {

                        const userEmail = user?.email;
                        const serverUserCoin = serverUsers?.find(u => u.user?.email === userEmail);
                        const userCoin = serverUserCoin.coin;
                        const newCoin = userCoin - totalCost;

                        axiosPublic.put(`/user/newCoin/${user?.email}`, { newCoin })
                            .then(res => {
                                console.log(res.data);
                                if (res.data.modifiedCount > 0) {
                                    Swal.fire('Done! Task added successfully')
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
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Task Creator</a></li>
                    <li> Add new Task</li>
                </ul>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body">
                <div className=" grid grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <input type="text" {...register('task_title')} placeholder="Task title" className="input input-bordered w-full shadow-md" />
                    </div>
                    <div className="form-control">
                        <input type="text" onChange={handleQuantity} placeholder="Task quantity" className="input input-bordered w-full shadow-md" />
                    </div>
                </div>

                <div className=" grid grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <input type="text" onChange={handlePaybleAmmount} placeholder="Payble ammount " className="input input-bordered w-full shadow-md" />
                    </div>
                    <div className="form-control">
                        <input type="date" {...register('completion_date')} placeholder="Task completion date" className="input input-bordered w-full shadow-md" />
                    </div>
                </div>

                <div className=" grid grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <input type="text" {...register('submission_info')} placeholder="Submission Info" className="input input-bordered w-full shadow-md" />
                    </div>
                    <div className="form-control">
                        <input type="text" {...register('photo')} placeholder="Task photo url" className="input input-bordered w-full shadow-md" />
                    </div>
                </div>

                <div className="form-control">
                    <textarea placeholder="Task Details....." {...register('task_details')} className="textarea shadow-md textarea-bordered textarea-lg w-full" ></textarea>
                </div>

                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-outline  btn-info border border-b-4">Add Task</button>
                </div>

            </form>
        </div>
    );
};

export default AddNewTask;