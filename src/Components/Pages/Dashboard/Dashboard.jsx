import { FaEnvelope, FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Workers from "./Workers/Workers";
import TaskCreator from "./TaskCreator/TaskCreator";
import Admin from "./Admin/Admin";


const Dashboard = () => {

    const isWorker = true;
    const isTaskCreator = false;
    const isAdmin = false;


    return (
        <div className="flex">
            <div className="w-64 sticky top-1 min-h-screen bg-blue-950 text-white">
                <ul className="menu p-4">

                    {
                        isWorker ? <> <Workers /> </> : '' || isTaskCreator ? <> <TaskCreator /> </> : '' || isAdmin ? <> <Admin /> </> : ''
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;