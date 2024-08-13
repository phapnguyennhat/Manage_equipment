import {
  InfiniteQueryObserver,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import {
  createEquip,
  deleteEquipByid,
  fetchEquipAPI,
  getEquipByIdAPI,
  updateEquipAPI,
} from "~/api/equipAPI";

export const useEquipData = (page, state, cate, timefrom, timeto) => {
  return useQuery(
    ["equip", page, state, cate, timefrom, timeto],
    () => fetchEquipAPI(page, state, cate, timefrom, timeto),
    { keepPreviousData: true, staleTime: 60000 },
  );
};

export const useEquipId = (equipId) => {
  return useQuery(["equip", equipId], () => getEquipByIdAPI(equipId), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
  });
};

export const useAddEquip = () => {
  const queryClient = useQueryClient();
  return useMutation(createEquip, {
    onSuccess: () => {
      queryClient.invalidateQueries("equip");
    },
  });
};

export const useUpdateEquip = () => {
  const queryClient = useQueryClient();
  return useMutation(updateEquipAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries("equip");
    },
  });
};

export const useDeleteEquip = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteEquipByid, {
    onSuccess: () => {
      queryClient.invalidateQueries("equip");
    },
  });
};
