import { FaEnvelope, FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Workers from "./Workers/Workers";
import TaskCreator from "./TaskCreator/TaskCreator";
import Admin from "./Admin/Admin";
import { BiSolidDashboard } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { LiaPagerSolid } from "react-icons/lia";


const Dashboard = () => {

    const isWorker = true;
    const isTaskCreator = false;
    const isAdmin = false;


    return (
        <div className="flex">
            <div className="w-72 sticky top-1 min-h-screen bg-green-600 text-white">
                <ul className="menu p-6">
                    <h2 className="text-3xl font-bold">$ InboxDoller</h2>
                    <div className="divider"></div>

                    <h2 className="flex text-xl font-bold gap-1 mb-4 text-black"><ImProfile className="mt-1 text-xl" /> PROFILE</h2>
                    <div className=" bg-white p-4 card">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            <div className="text-black ml-5">
                                <h2>Name :</h2>
                                <h2>Role :</h2>
                            </div>
                        </div>

                    </div>

                    <div className="divider"></div>
                    <h2 className="flex text-xl font-bold gap-1 mb-4 text-black"><BiSolidDashboard className="mt-1" /> DASHBOARD</h2>
                    {
                        isWorker ? <> <Workers /> </> : '' || isTaskCreator ? <> <TaskCreator /> </> : '' || isAdmin ? <> <Admin /> </> : ''
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <h2 className="flex text-xl text-black font-bold gap-1 mb-4 border-b"><LiaPagerSolid className="mt-1" /> PAGES</h2>
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
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;