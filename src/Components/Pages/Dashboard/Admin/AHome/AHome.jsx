import { useQuery } from "@tanstack/react-query";
import useAllUsers from "../../../../Hooks/useAllUsers";
import useCoin from "../../../../Hooks/useCoin";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const AHome = () => {

    const [serverUser] = useAllUsers();
    const [coin] = useCoin();
    const axiosSecure = useAxiosSecure()

    const { data: payments } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments')
            return res.data
        }
    });
    const { data: withdrawCollection } = useQuery({
        queryKey: ['withdrawCollection'],
        queryFn: async () => {
            const res = await axiosSecure.get('/withdrawCollection')
            return res.data
        }
    });

    const totalPayment = payments?.reduce((accumulator, task) => {
        return accumulator + parseInt(task.amount);
    }, 0);

    return (
        <div className="p-8">
            <div className="flex justify-between text-lg font-semibold border p-4">
                <h2>Total Users :{serverUser.length}</h2>
                <h2>Total Coin :{coin}</h2>
                <h2>Total Payment : ${totalPayment}</h2>
            </div>

            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs">
                    <thead className="">
                        <tr className="text-left">
                            <th className="p-3"></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Acount Number</th>
                            <th>Payment System</th>
                            <th>Withdraw Time</th>
                        </tr>
                    </thead>


                    <tbody>
                        {withdrawCollection?.map((task, index) => (
                            <tr key={task._id}
                                className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>{index + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.worker_name}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.worker_email}</p>
                                </td>
                                <td className="p-3">
                                    {task.account_number}
                                </td>
                                <td className="p-3">
                                    {task.payment_system}
                                </td>
                                <td className="p-3">
                                    {task.withdraw_time}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default AHome;