import useAllUsers from "../../../../Hooks/useAllUsers";


const ManageUsers = () => {

    const [serverUsers] = useAllUsers();

    const worker = serverUsers?.filter(w => console.log(w))


    return (
        <div>
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
                        {serverUsers?.map((task, index) => (
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

export default ManageUsers;