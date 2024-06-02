import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllUsers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: serverUsers, isPending } = useQuery({
        queryKey: ['serverUsers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })
    return [serverUsers, isPending]
};

export default useAllUsers;