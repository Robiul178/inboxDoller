import { IoNotifications } from "react-icons/io5";


const WHome = () => {
    return (
        <section>
            <div className="h-[85px] bg-green-600 px-4">
                <div className="flex justify-end gap-4 p-6">
                    <div>
                        <span className="border-r-2 border-black px-4">$ Total Coin</span>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item ">99+</span>
                        <button ><IoNotifications className="text-3xl" /></button>
                    </div>
                </div>
            </div>


            <div className="p-4">
                <div className="stats w-full  shadow">
                    <div className="stat">
                        <div className="stat-title">Total Earning</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Task Complete</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">15% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>

            <div className="flex p-4">
                <div className="bg-red-800 w-full">
                    SIDEEEEEEEEEEEE111111111111111111111111111111111111111111
                </div>

                <div className="bg-yellow-600">
                    SIDEEEEEEEEEEEE2
                </div>
            </div>
        </section>
    );
};

export default WHome;