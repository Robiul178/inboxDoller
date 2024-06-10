import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: serverUsers, isPending, refetch } = useQuery({
        queryKey: ['serverUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    return [serverUsers, isPending, refetch]
};

export default useAllUsers;