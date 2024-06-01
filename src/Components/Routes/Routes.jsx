
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Routes = () => {
    return (
        <div >
            <Navbar />
            <div className="py-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Routes;