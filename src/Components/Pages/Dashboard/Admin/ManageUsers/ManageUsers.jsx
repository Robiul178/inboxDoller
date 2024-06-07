import { FaTrash } from "react-icons/fa";
import useAllUsers from "../../../../Hooks/useAllUsers";
import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from 'sweetalert2'
import useAuth from "../../../../Hooks/useAuth";

const ManageUsers = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [serverUsers, refetch] = useAllUsers();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()

    const worker = serverUsers?.filter(w => w.user?.userRole?.value === 'worker');


    const handleDelete = (id) => {
        axiosPublic.delete(`/deleteUser/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire('Deleted')
                }
            })
    }
    const handleUserRole = (task) => {

        console.log(task, selectedOption);

        // axiosPublic.put(`/user/newRoin/${worker?.worker_email}`, { selectedOption })
        //     .then(res => {
        //         console.log(res.data);
        //         // if (res.data.modifiedCount > 0) {
        //         //     Swal.fire('Done! Task added successfully')
        //         // }
        //     })
    }

    return (
        <div>
            <div className="overflow-x-auto mt-8">
                <table className="min-w-full text-xs">
                    <thead className="">
                        <tr className="text-left">
                            <th className="p-3"></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Coin</th>
                            <th>Role </th>
                            <th>Photo URL</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="mb-8">
                        {worker?.map((task, index) => (
                            <tr key={task._id}
                                className="border-b ">
                                <td className="p-3">
                                    <p>{index + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.user.name}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.user.email}</p>
                                </td>
                                <td className="p-3">
                                    {task.coin}
                                </td>
                                <td className="p-3">
                                    {task.user.userRole.value}
                                </td>
                                <td className="p-3">
                                    {task.user.picture.split('.', 2)}
                                </td>
                                <td className="p-3 ">
                                    <button onClick={() => handleDelete(task._id)}> <FaTrash className="text-[15px] mr-2" /></button>
                                    <button onClick={() => handleUserRole(task)} className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" className="btn m-1 btn-outline border-r-none ">Update Role</div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <h2 onClick={() => setSelectedOption('admin')}>Admin</h2>
                                            </li>
                                            <li>
                                                <h2 onClick={() => setSelectedOption('taskCreator')}>Task Creator</h2>
                                            </li>
                                            <li>
                                                <h2 onClick={() => setSelectedOption('worker')}>Worker</h2>
                                            </li>

                                        </ul>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default ManageUsers;