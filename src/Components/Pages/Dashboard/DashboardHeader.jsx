import useAuth from "../../Hooks/useAuth";
import { IoNotifications } from "react-icons/io5";

const DashboardHeader = () => {
    const { user } = useAuth();

    return (
        <div className="flex justify-between py-5 px-8 bg-blue-100">
            <div>
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            </div>
            <div>
                <div className="indicator">
                    <span className="indicator-item ">99+</span>
                    <button ><IoNotifications className="text-3xl" /> </button>
                </div>
                <div className="avatar ml-7">
                    <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;