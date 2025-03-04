import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useShopItems = () => {
  const axiosPublic = useAxiosPublic();
  const { data: shopItems=[], isLoading,refetch } = useQuery({
    queryKey: ["shopItems"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      return res.data;
    },
  });
  return [shopItems, isLoading,refetch];
};

export default useShopItems;