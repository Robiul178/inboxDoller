import useAuth from "../../Hooks/useAuth";
import { IoNotifications } from "react-icons/io5";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from '@tanstack/react-query'

const DashboardHeader = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: notifications, refetch } = useQuery({
        queryKey: ['notifications'],
        queryFn: async () => {
            const res = await axiosPublic(`/notification/${user?.email}`)
            return res.data;
        }

    })

    const bydescending = notifications?.sort((a, b) => {
        new Date(a.Time) - new Date(b.Time)
        refetch()
    });

    return (
        <div className="flex justify-between py-5 px-8 bg-blue-100">
            <div>
                <h2 className="text-xl font-semibold">Name: {user?.displayName}</h2>
            </div>
            <div>
                <div className="indicator">
                    <span className="indicator-item ">{notifications?.length}</span>
                    <button onClick={() => document.getElementById('my_modal_2').showModal()}><IoNotifications className="text-3xl" /> </button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            {
                                bydescending?.map((n) => <>
                                    <div className="border-b-2">
                                        <h2 className=" font-semibold">{n.message}</h2>
                                    </div>
                                </>)
                            }
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
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