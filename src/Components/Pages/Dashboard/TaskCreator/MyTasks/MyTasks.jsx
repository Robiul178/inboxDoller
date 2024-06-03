import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyTasks = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: myAddedTask, isLoading } = useQuery({
        queryKey: ['myAddedTask'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/task/creatorEmail/${user?.email}`);
            return res.data;
        }
    })
    if (isLoading) return <p className="progress progress-primary w-12"></p>


    return (
        <div>
            <h2>my tasks.......{myAddedTask?.length}</h2>
        </div>
    );
};

export default MyTasks;