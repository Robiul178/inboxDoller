import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useCoin from "../../../../Hooks/useCoin";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";


const MyTasks = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [coin] = useCoin()


    const { data: myAddedTask, isLoading, refetch } = useQuery({
        queryKey: ['myAddedTask'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/task/creatorEmail/${user?.email}`);
            return res.data;
        }
    })
    if (isLoading) return <p className="progress progress-primary w-12"></p>

    const handleUpdate = (id) => {
        console.log(id);
    }
    const handleDelete = (id) => {

        axiosSecure.delete(`/task/myTask/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire('Deleted')
                }
            })
    }

    return (
        <div className="p-8">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Task Creator</a></li>
                    <li> My task</li>
                </ul>
            </div>
            <div className="flex justify-between p-6 shadow-md">
                <h2>Total Added Task :{myAddedTask?.length}</h2>
                <h3>Available Coins: {coin}</h3>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">

                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3"></th>
                                <th>Task Title</th>
                                <th>Task Quantity</th>
                                <th>Payable Amount</th>
                                <th>Completion date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>


                        <tbody>
                            {myAddedTask
                                .sort((a, b) => b.completion_date - a.completion_date)
                                .map((task, index) => (
                                    <tr key={task._id}
                                        className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                        <td className="p-3">
                                            <p>{index + 1}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{task.task_title}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{task.task_quantity}</p>
                                        </td>
                                        <td className="p-3">$
                                            {task.payable_amount}
                                        </td>
                                        <td className="p-3">
                                            {task.completion_date}
                                        </td>
                                        <td className="p-3 ">
                                            <button onClick={() => handleUpdate(task._id)}> <FiEdit className="text-lg" /></button>
                                            <button onClick={() => handleDelete(task._id)}> <FaTrash className="text-lg mr-2" /></button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default MyTasks;