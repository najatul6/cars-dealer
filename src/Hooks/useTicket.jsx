import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTicket = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: ticket = [ ],isLoading } = useQuery({
        queryKey: ['ticket'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/tickets`)
            return res.data;
        }
    })
    return [ticket,refetch,isLoading]
};

export default useTicket;

