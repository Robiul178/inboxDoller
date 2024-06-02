import { FaEnvelope, FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Workers from "./Workers/Workers";
import TaskCreator from "./TaskCreator/TaskCreator";
import Admin from "./Admin/Admin";
import { BiSolidDashboard } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { LiaPagerSolid } from "react-icons/lia";
import useAuth from "../../Hooks/useAuth";
import useAllUsers from "../../Hooks/useAllUsers";

const Dashboard = () => {
    const { user } = useAuth();
    const [serverUsers] = useAllUsers();

    const userEmail = user?.email;
    const users = serverUsers?.find(u => u.user.email === userEmail)
    const userRole = users?.user.userRole.value;

    return (
        <div className="flex">
            <div className="w-72 sticky top-1 min-h-screen bg-green-600 text-white">
                <ul className="menu p-6">
                    <h2 className="text-3xl font-bold">$ InboxDoller</h2>
                    <div className="divider"></div>

                    <h2 className="flex text-xl font-bold gap-1 mb-4 text-black"><ImProfile className="mt-1 text-xl" /> PROFILE</h2>
                    <div className="h-24 bg-white p-4 card">
                        <div className="avatar">
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                            <div className="text-black ml-5">
                                <h2>Name :{user?.displayName}</h2>
                                <h2>Role :{userRole}</h2>
                            </div>
                        </div>

                    </div>

                    <div className="divider"></div>
                    <h2 className="flex text-xl font-bold gap-1 mb-4 text-black"><BiSolidDashboard className="mt-1" /> DASHBOARD</h2>
                    {
                        userRole === 'worker' ? <> <Workers /> </> : '' || userRole === 'taskCreator' ? <> <TaskCreator /> </> : '' || userRole === 'admin' ? <> <Admin /> </> : ''
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
                        <NavLink to="/order">
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