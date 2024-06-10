import { BsHouseAdd } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { VscTasklist } from "react-icons/vsc";
import { MdPayments } from "react-icons/md";


const TaskCreator = () => {
    return (
        <div className="text-xl">
            <li>
                <NavLink to="/dashboard/taskCreator/home">
                    <FaHome></FaHome>
                    Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/taskCreator/addtask">
                    <BsHouseAdd></BsHouseAdd>
                    Add New Task </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/taskCreator/mytask">
                    <VscTasklist></VscTasklist>
                    My Tasks</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/taskCreator/puchaseCoin">
                    <BsCashCoin></BsCashCoin>
                    Purchase Coin</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/taskCreator/pymentHistory">
                    <MdPayments></MdPayments>
                    Payment History</NavLink>
            </li>
        </div>
    );
};

export default TaskCreator;