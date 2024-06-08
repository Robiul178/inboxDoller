import { useParams } from "react-router-dom";
import useTasks from "../../../../../Hooks/useTasks";
import { useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import Swal from 'sweetalert2';
import useAuth from "../../../../../Hooks/useAuth";

const TaskDetails = () => {
    const { user } = useAuth()
    const [tasks] = useTasks();
    const { id } = useParams()
    const [submissionDetails, setSubmissionDetails] = useState('');
    const axiosSecure = useAxiosSecure();

    const detailTask = tasks?.find(task => task._id === id);


    const handleSubmit = (e) => {
        e.preventDefault();

        const submission = {
            task_id: detailTask.id,
            task_title: detailTask.task_title,
            task_detail: detailTask.task_detail,
            task_quantity: detailTask.task_quantity,
            task_img_url: detailTask.task_image_url,
            payable_amount: detailTask.payable_amount,
            creator_name: detailTask.creator_name,
            creator_email: detailTask.creator_email,
            worker_email: user?.email,
            worker_name: user?.displayName,
            submission_details: submissionDetails,
            current_date: new Date().toISOString().split('T')[0],
            status: 'pending',
        };
        setSubmissionDetails('');

        axiosSecure.post('/mysubmission', submission)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire("Submission Request Sent sucessfully");
                }
            })


    }

    if (!detailTask) {
        return <div className="text-center text-red-500">Task not found</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-lg mt-8">
            <h2 className="text-3xl font-bold mb-4">{detailTask?.task_title}</h2>
            <p className="mb-2"><strong>Creator:</strong> {detailTask?.creator_name}</p>
            <p className="mb-2"><strong>Completion Date:</strong> {detailTask?.completion_date}</p>
            <p className="mb-2"><strong>Payable Amount:</strong> ${detailTask?.payable_amount}</p>
            <p className="mb-2"><strong>Quantity:</strong> {detailTask?.task_quantity}</p>
            <p className="mb-4"><strong>Description:</strong> {detailTask?.description}</p>

            <form
                onSubmit={handleSubmit}
                className="mb-4">
                <div className="mb-4">
                    <label htmlFor="submissionDetails" className="block text-gray-700 font-bold mb-2">
                        Submission Details
                    </label>
                    <textarea
                        id="submissionDetails"
                        value={submissionDetails}
                        onChange={(e) => setSubmissionDetails(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TaskDetails;