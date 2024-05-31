import { FaHome, FaSubway, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Workers = () => {
    return (
        <div>
            <li>
                <NavLink to="/dashboard/worker/home">
                    <FaHome></FaHome>
                    Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/worker/taskList">
                    <FaTasks></FaTasks>
                    Task List</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/worker/mysubmission">
                    <FaSubway></FaSubway>
                    My Submission</NavLink>
            </li>
        </div>
    );
};

export default Workers;