import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
    const { user } = useAuth();
    const axiosPublic= useAxiosPublic();
    const {data: userRole,isLoading} = useQuery({
      queryKey: [user?.email, "userRole"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/users/${user?.email}`);
        return res.data?.role;
      },
      enabled: !!user?.email,
    });
    return [userRole,isLoading];
}

export default useRole