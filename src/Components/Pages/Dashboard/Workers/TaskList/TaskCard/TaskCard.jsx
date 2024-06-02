import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
    const navigate = useNavigate();

    const viewDetails = () => {
        navigate(`/dashboard/task-details/${task.id}`);
    };

    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{task.task_title}</h2>
                <p><strong>Creator:</strong> {task.creator_name}</p>
                <p><strong>Completion Date:</strong> {task.completion_date}</p>
                <p><strong>Payable Amount:</strong> ${task.payable_amount}</p>
                <p><strong>Quantity:</strong> {task.task_quantity}</p>

                <div className="card-actions justify-end">
                    <button onClick={viewDetails} className="btn btn-outline border-b-4">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
