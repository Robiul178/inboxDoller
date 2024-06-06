import { FaHome, FaTasks } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const Admin = () => {
    return (
        <div>
            <li>
                <NavLink to="/dashboard/admin/home">
                    <FaHome></FaHome>
                    Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/admin/manageUser">
                    <FaUser></FaUser>
                    Manage Users</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/admin/manageTask">
                    <FaTasks></FaTasks>
                    Manage  Task </NavLink>
            </li>
        </div>
    );
};

export default Admin;