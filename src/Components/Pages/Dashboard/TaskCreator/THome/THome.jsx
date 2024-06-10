import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useCoin from "../../../../Hooks/useCoin";
import usePaymentHistory from "../../../../Hooks/usePaymentHistory";
import { FaCoins } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";


const THome = () => {
    const { user } = useAuth()
    const [coin] = useCoin()
    const axiosSecure = useAxiosSecure();
    const [paymentHistory, isLoading] = usePaymentHistory();

    const { data: pendingTasks } = useQuery({
        queryKey: ['pendingTasks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/creatorEmail/${user?.email}`);
            return res.data;
        }
    });

    const totalPendingTasks = pendingTasks?.reduce((accumulator, task) => {
        return accumulator + parseInt(task.task_quantity);
    }, 0);
    const totalPayment = paymentHistory?.reduce((accumulator, task) => {
        return accumulator + parseInt(task.amount);
    }, 0);


    //loading
    if (isLoading) return <p className="progress progress-primary w-12"></p>

    return (
        <div className="p-6">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Task Creator</a></li>
                    <li> Home</li>
                </ul>
            </div>

            <div className="flex justify-between">
                <div className=" max-w-[450px] h-44 border rounded-md p-4 shadow-md w-full">
                    <h2 className="text-xl font-bold flex"><FaCoins className=" text-xl mt-1" /> {coin}.0000</h2>
                    <p>Total Coin</p>
                    <div className="flex gap-4 mt-14">
                        <Link to='/dashboard/taskCreator/puchaseCoin'>
                            <button className="btn bg-sky-300  text-blue-600"><BsCashCoin className=" text-xl" />Puchase Coin</button>
                        </Link>
                        <Link to='/dashboard/taskCreator/pymentHistory'>
                            <button className="btn bg-sky-300 text-blue-600"><MdPayments className=" text-xl" />Payment History</button>
                        </Link>
                    </div>
                </div>

                <div className=" max-w-[300px] h-44 border rounded-md p-4 shadow-md w-full">
                    <h2 className="text-xl font-bold flex">TPending Task: <GrCompliance className=" text-xl mt-1 mr-1" />  {totalPendingTasks}</h2>
                </div>

                <div className=" max-w-[300px] h-44 border rounded-md p-4 shadow-md w-full">
                    <h2 className="text-xl font-bold flex">{totalPayment}</h2>
                </div>
            </div>

        </div>
    );
};

export default THome;