import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import WHome from "../WHome/WHome";


const MySubmission = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: submissonTask, isLoading } = useQuery({
        queryKey: ['submissonTask'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/email/${user?.email}`);
            return res.data;
        }
    })
    if (isLoading) return <p className="progress progress-primary w-12"></p>


    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Total Submission : {submissonTask?.length}</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">

                    <thead className="dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3"></th>
                            <th className="p-3">Task Title</th>
                            <th className="p-3 ">Amount</th>
                            <th className="p-3 ">Submission Date</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submissonTask?.map((task, index) => <tr key={task._id}
                                className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>{index + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.task_title}</p>
                                </td>
                                <td className="p-3">$
                                    {task.payable_amount}
                                </td>
                                <td className="p-3">
                                    {task.current_date}
                                </td>
                                <td className="p-3">
                                    {task.status}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <WHome
                submissonTask={submissonTask}
            ></WHome>
        </div>
    );
};

export default MySubmission;