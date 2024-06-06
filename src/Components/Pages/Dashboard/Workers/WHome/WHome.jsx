import { IoNotifications } from "react-icons/io5";
import useCoin from "../../../../Hooks/useCoin";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";


const WHome = () => {
    const [coin] = useCoin();
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: submissonTask, isLoading } = useQuery({
        queryKey: ['submissonTask'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/email/${user?.email}`);
            return res.data;
        }
    })
    if (isLoading) return <p className="progress progress-primary w-12"></p>


    return (
        <section>
            <div className="h-[85px] bg-green-600 px-4">
                <div className="flex justify-end gap-4 p-6">
                    <div>
                        <span className="border-r-2 border-black px-4">$ Total Coin: {coin}</span>
                    </div>
                    <div>
                        <span className="border-r-2 border-black px-4"> Total Submission :{submissonTask?.length}</span>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item ">99+</span>
                        <button ><IoNotifications className="text-3xl" /> </button>
                    </div>
                </div>
            </div>


            <div className="p-4">
                <div className="stats w-full shadow">
                    <div className="stat">
                        <div className="stat-title">Total Earning</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Total Submission</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">15% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Total Submission</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">15% more than last month</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WHome;