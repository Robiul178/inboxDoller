import { useQuery } from "@tanstack/react-query";
import useAllUsers from "../../../../Hooks/useAllUsers";
import useCoin from "../../../../Hooks/useCoin";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const AHome = () => {

    const [serverUsers] = useAllUsers();
    const [coin] = useCoin();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: payments } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments')
            return res.data
        }
    });
    const { data: withdrawCollection, refetch } = useQuery({
        queryKey: ['withdrawCollection'],
        queryFn: async () => {
            const res = await axiosSecure.get('/withdrawCollection')
            return res.data
        }
    });

    const totalPayment = payments?.reduce((accumulator, task) => {
        return accumulator + parseInt(task.amount);
    }, 0);

    const handlePaymentSuccess = (withdrawData) => {

        const requesWithdrawCoin = withdrawData?.withdraw_coin;
        const WorkerEmail = withdrawData?.worker_email;

        axiosSecure.delete(`/withdrawDelete/${withdrawData._id}`)
            .then(res => {
                if (res.data) {

                    const serverUserCoin = serverUsers?.find(u => u.user?.email === WorkerEmail);
                    const userCoin = serverUserCoin.coin;
                    const newCoin = userCoin - requesWithdrawCoin;

                    axiosPublic.put(`/user/newCoin/${WorkerEmail}`, { newCoin })
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                refetch()
                            }
                        })
                }
            })
    }

    return (
        <div className="p-8">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Admin</a></li>
                    <li>Home</li>
                </ul>
            </div>
            <div className="flex justify-between text-lg font-semibold border p-4 shadow-md">
                <h2>Total Users :{serverUsers?.length}</h2>
                <h2>Total Coin :{coin}</h2>
                <h2>Total Payment : ${totalPayment}</h2>
            </div>

            {/* table */}
            <div className="overflow-x-auto mt-4 shadow-md">
                <table className="min-w-full text-xs">
                    <thead className="">
                        <tr className="text-left">
                            <th className="p-3"></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Acount Number</th>
                            <th>Payment System</th>
                            <th>Withdraw Time</th>
                            <th>Withdraw Coin</th>
                            <th>Action Buttons</th>
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
                                <td className="p-3">
                                    {task.withdraw_coin}
                                </td>
                                <td className="p-3">
                                    <button onClick={() => handlePaymentSuccess(task)} className=" p-2 border hover:bg-blue-500"> Payment Success</button>
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