
import useTasks from "../../../../Hooks/useTasks";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import Modal from "./Modal";
// import { useState } from "react";


const ManageTask = () => {
    const [tasks, refetch] = useTasks();
    const axiosSecure = useAxiosSecure();
    // const [modalData, setModalData] = useState()

    const handleDelete = (id) => {
        axiosSecure.delete(`/task/myTask/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire('Removed User')
                    refetch()
                }
            })
    };
    // console.log(modalData);
    return (
        <div>
            Tolat : {tasks?.length}
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs">
                    <thead className="">
                        <tr className="text-left">
                            <th className="p-3"></th>
                            <th>Task Title</th>
                            <th>Task Creator Name</th>
                            <th>Task Quantity</th>
                            <th>Coin Needed </th>
                            <th>Completion Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="mb-8">
                        {tasks?.map((task, index) => (
                            <tr key={task._id}
                                className="border-b ">
                                <td className="p-3">
                                    <p>{index + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.task_title}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.creator_name}</p>
                                </td>
                                <td className="p-3">
                                    {task.task_quantity}
                                </td>
                                <td className="p-3">
                                    {task.payable_amount}
                                </td>
                                <td className="p-3">
                                    {task.completion_date}
                                </td>
                                <td className="p-3 ">
                                    <button onClick={() => handleDelete(task._id)} className="border px-4 py-2 hover:bg-red-500"> Remove</button>
                                    {/* <button onClick={setModalData(task)}>
                                        <button className="border px-4 py-2 hover:bg-green-500" onClick={() => document.getElementById('my_modal_3').showModal()}>View Details</button>
                                    </button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTask;