import { useState } from "react";
import useAllUsers from "../../../../Hooks/useAllUsers";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useCoin from "../../../../Hooks/useCoin";


const THome = () => {
    const { user } = useAuth()
    const [totalPayment, setTotalPayment] = useState(0);
    const [tasksToReview, setTasksToReview] = useState([]);
    const [selectedSubmission, setSelectedSubmission] = useState(null);

    const [coin] = useCoin()

    const axiosSecure = useAxiosSecure();



    const { data: pendingTasks, isLoading } = useQuery({
        queryKey: ['pendingTasks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/creatorEmail/${user?.email}`);
            return res.data;
        }
    })
    console.log(pendingTasks);
    if (isLoading) return <p className="progress progress-primary w-12"></p>



    const handleApprove = (task) => {
        // Handle approve logic
        // Example:
        // fetch(`/api/approve/${task.id}`, { method: 'POST' })
        //   .then(response => response.json())
        //   .then(data => {
        //     // Update the state as necessary
        //   });
        console.log(`Approved task: ${task.task_title}`);
    };

    const handleReject = (task) => {
        // Handle reject logic
        // Example:
        // fetch(`/api/reject/${task.id}`, { method: 'POST' })
        //   .then(response => response.json())
        //   .then(data => {
        //     // Update the state as necessary
        //   });
        console.log(`Rejected task: ${task.task_title}`);
    };

    return (
        <div className="p-4">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Task Creator</a></li>
                    <li> Home</li>
                </ul>
            </div>

            <div className="flex justify-between mb-4 text-xl font-bold">
                <p className="">Coins: {coin}</p>
                <p>Pending Tasks: {pendingTasks}</p>
                <p>Total Payment: {totalPayment}</p>
            </div>

            <h2 className="text-xl font-semibold mb-4">Tasks To Review</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Worker Name</th>
                        <th className="py-2 px-4 border-b">Worker Email</th>
                        <th className="py-2 px-4 border-b">Task Title</th>
                        <th className="py-2 px-4 border-b">Payable Amount</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {/* {tasksToReview.map((task, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">nameeee</td>
                            <td className="py-2 px-4 border-b">emaillllll</td>
                            <td className="py-2 px-4 border-b">task_title</td>
                            <td className="py-2 px-4 border-b">taskpayable_amount</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                                    onClick={() => { setSelectedSubmission(task); setModalOpen(true); }}
                                >
                                    View Submission
                                </button>
                                <button
                                    className="bg-green-500 text-white py-1 px-2 rounded mr-2"
                                    onClick={() => handleApprove(task)}
                                >
                                    Approve
                                </button>
                                <button
                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                    onClick={() => handleReject(task)}
                                >
                                    Reject
                                </button>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>

        </div>
    );
};

export default THome;