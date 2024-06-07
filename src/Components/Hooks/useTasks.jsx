import {
    useQuery
} from '@tanstack/react-query'

import useAxiosSecure from "./useAxiosSecure";

const useTasks = () => {
    const axiosSecure = useAxiosSecure()
    const { data: tasks, isPending, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get('/task');
            return res.data
        }
    })
    return [tasks, isPending, refetch]
};

export default useTasks;