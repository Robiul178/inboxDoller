
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useCoin from "../../../../Hooks/useCoin";
import usePaymentHistory from "../../../../Hooks/usePaymentHistory";


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
            <div className="flex justify-between border p-2">
                <h2 className="text-lg font-semibold p-2">Total Coin:{coin}</h2>
                <h2 className="text-lg font-semibold p-2">Pending Task: {totalPendingTasks}</h2>
                <h2 className="text-lg font-semibold p-2">Total Payment: {totalPayment}</h2>
            </div>


        </div>
    );
};

export default THome;