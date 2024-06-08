import { Outlet, useNavigate } from "react-router-dom";
import Workers from "./Workers/Workers";
import TaskCreator from "./TaskCreator/TaskCreator";
import Admin from "./Admin/Admin";
import useAuth from "../../Hooks/useAuth";
import useAllUsers from "../../Hooks/useAllUsers";
import DashboardHeader from "./DashboardHeader";
import { FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
    const { user, logOutUser } = useAuth();
    const [serverUsers] = useAllUsers();
    const navigate = useNavigate();

    const userEmail = user?.email;
    const users = serverUsers?.find(u => u.user.email === userEmail)
    const userRole = users?.user.userRole.value;

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                navigate('/')
            })

    }
    return (
        <div className="flex">
            <div className="w-72 sticky top-1 min-h-screen bg-blue-100 text-black">
                <ul className="menu p-6">
                    <h2 className="text-3xl font-semibold">$ InboxDoller</h2>
                    <div className="divider"></div>
                    {
                        userRole === 'worker' ? <> <Workers /> </> : '' || userRole === 'taskCreator' ? <> <TaskCreator /> </> : '' || userRole === 'admin' ? <> <Admin /> </> : ''
                    }
                    <div className="divider"></div>

                    <button onClick={handleLogOut} className="btn "> <FaSignOutAlt /> Log Out</button>

                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <DashboardHeader />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;