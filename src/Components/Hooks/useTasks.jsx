import {
    useQuery
} from '@tanstack/react-query'

import useAxiosSecure from "./useAxiosSecure";

const useTasks = () => {
    const axiosSecure = useAxiosSecure()
    const { data: tasks, isPending } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get('/task');
            return res.data
        }
    })
    return [tasks, isPending]
};

export default useTasks;