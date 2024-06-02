
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Routes = () => {
    return (
        <div >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Routes;