import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import useAllUsers from "../../../Hooks/useAllUsers";

const Navbar = () => {
    const { user, logOutUser } = useAuth();
    const [serverUsers] = useAllUsers();

    const currentUser = user?.email;
    const roleUser = serverUsers?.find(t => t.user.email == currentUser);
    const role = roleUser.user.userRole.value;


    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-gray-500 px-4 py-2" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-gray-500 px-4 py-2" : ""
                }
            >
                About
            </NavLink>
        </li>
    </>

    const handleLogOut = () => {
        logOutUser()
            .then(() => {

            })
    }

    return (
        <div className="max-w-7xl mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div>
                    <Link to='/'>
                        <h2 className="text-xl font-bold">InboxDollars</h2>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user ? <>
                            <div className="flex">
                                <Link
                                    to={`/dashboard/${role}/home`}
                                >
                                    <button className="px-8 py-2 border border-blue-300 mr-4 flex"><BiSolidDashboard className="mt-1" /> Dashboard</button>
                                </Link>
                                <button onClick={handleLogOut} className="px-8 py-2 border border-blue-300 flex"> <FaSignOutAlt className="mt-1" /> Log Out</button>
                            </div>
                        </>
                            :
                            <>
                                <Link to='/singin' className="mr-4">
                                    <button className="px-8 py-2 border border-blue-300">Sing In</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;