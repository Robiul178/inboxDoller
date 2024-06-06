import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAllUsers from "../../../Hooks/useAllUsers";


const Navbar = () => {
    const { user, logOutUser } = useAuth();
    const [serverUsers] = useAllUsers()

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

    // const userEmail = user?.email;
    // const roleForUser = serverUsers?.find(i => i.user?.email === userEmail)
    // const role = roleForUser.user?.userRole.value;

    return (
        <div className="max-w-6xl mx-auto navbar bg-base-100">
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
                            <button className="btn btn-outline border-0 border-b-4 border-blue-600 mr-4">User Profile</button>
                            <Link
                                //  to={`/dashboard/${role}/home`}
                                to='/dashboard'
                            >
                                <button className="btn btn-outline border-0 border-b-4 border-blue-600 mr-4">Dashboard</button>
                            </Link>
                            <button onClick={handleLogOut} className="btn btn-outline border-0 border-b-4 border-blue-600">Log Out</button>
                        </>
                            :
                            <>
                                <Link to='/singin' className="mr-4">
                                    <button className="btn btn-outline  btn-success border border-b-4">Sing In</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;