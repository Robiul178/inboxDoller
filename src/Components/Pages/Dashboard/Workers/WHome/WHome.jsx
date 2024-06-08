import { FaCoins, FaWallet } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import useCoin from "../../../../Hooks/useCoin";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { Link } from "react-router-dom";


const WHome = () => {
    const [coin] = useCoin();
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: submissonTask, isLoading } = useQuery({
        queryKey: ['submissonTask'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/email/${user?.email}`);
            return res.data;
        }
    });

    const approveData = submissonTask?.filter(task => task.status === 'approved')

    if (isLoading) return <p className="progress progress-primary w-12"></p>


    return (
        <section className="p-12">
            <div className="flex justify-between">
                <div className=" max-w-[450px] h-44 border rounded-md p-4 shadow-md">
                    <h2 className="text-xl font-bold flex"><FaCoins className=" text-xl mt-1" /> {coin}.0000</h2>
                    <p>Total Coin</p>
                    <div className="flex gap-4 mt-14">
                        <Link to='/dashboard/worker/withdrawals'>
                            <button className="btn bg-sky-300  text-blue-600"><FaWallet className=" text-xl" /> Withdraw</button>
                        </Link>
                        <Link to='/dashboard/worker/taskList'>
                            <button className="btn bg-sky-300 text-blue-600"><FaCoins className=" text-xl" /> Earn More</button>
                        </Link>
                    </div>
                </div>

                <div className=" max-w-[300px] h-44 border rounded-md p-4 shadow-md">
                    <h2 className="text-xl font-bold flex">Total Submission:-</h2>
                    <h2 className="text-xl font-bold flex"><GrCompliance className=" text-xl mt-1 mr-1" />  {submissonTask?.length}</h2>

                </div>

                <div className=" max-w-[300px] h-44 border rounded-md p-4 shadow-md">
                    <h2 className="text-xl font-bold flex">sum of payable_amoun of the worker where status is approved</h2>

                </div>
            </div>

            <div className="overflow-x-auto mt-12">
                <table className="min-w-full text-xs">
                    <thead className="bg-sky-100">
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
                            approveData?.map((task, index) => <tr key={task._id}
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
        </section>
    );
};

export default WHome;