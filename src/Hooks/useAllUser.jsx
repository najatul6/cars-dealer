import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUser = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: users = [ ],isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }
    })
    return [users,refetch,isLoading]
};

export default useAllUser;

