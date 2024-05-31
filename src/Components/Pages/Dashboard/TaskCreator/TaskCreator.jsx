import { BsHouseAdd } from "react-icons/bs";
import { FaHome, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const TaskCreator = () => {
    return (
        <div>
            <li>
                <NavLink to="/dashboard/taskCreator/home">
                    <FaHome></FaHome>
                    T-Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/taskCreator/addtask">
                    <BsHouseAdd></BsHouseAdd>
                    Add New Task </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/taskCreator/mytask">
                    <FaTasks></FaTasks>
                    My Tasks</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/taskCreator/puchaseCoin">
                    <FaTasks></FaTasks>
                    Purchase Coin</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/taskCreator/pymentHistory">
                    <FaTasks></FaTasks>
                    Payment History</NavLink>
            </li>
        </div>
    );
};

export default TaskCreator;