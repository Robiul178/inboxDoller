
import useCoin from "../../../../Hooks/useCoin";
import usePaymentHistory from "../../../../Hooks/usePaymentHistory";


const PaymentHistory = () => {
    const [coin] = useCoin()
    const [paymentHistory, isLoading] = usePaymentHistory()
    if (isLoading) return <p className="progress progress-primary w-12"></p>



    return (
        <div className="p-8">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Task Creator</a></li>
                    <li> My Payment History</li>
                </ul>
            </div>
            <div className="flex justify-between p-6 border text-xs font-semibold">
                <h2>Total Payment History :{paymentHistory?.length}</h2>
                <h3>Available Coins: {coin}</h3>
            </div>
            <div>
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full text-xs">
                        <thead className="">
                            <tr className="text-left">
                                <th className="p-3"></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th> Amount</th>
                                <th>payment_id</th>
                                <th>Status</th>
                            </tr>
                        </thead>


                        <tbody>
                            {paymentHistory.map((task, index) => (
                                <tr key={task._id}
                                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{task.buyer_name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{task.buyer_email}</p>
                                    </td>
                                    <td className="p-3">$
                                        {task.amount}
                                    </td>
                                    <td className="p-3">
                                        {task.payment_id}
                                    </td>
                                    <td className="p-3">
                                        {task.status}                                         </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;