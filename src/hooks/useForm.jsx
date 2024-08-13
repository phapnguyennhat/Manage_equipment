import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  createFormAPI,
  deleteFormAPI,
  fetchFormAPI,
  returnEquip,
  updateStatusFormAPI,
} from "~/api/formAPI";

export const useFormData = (page, limit, sortBy, sortOrder, mssv) => {
  return useQuery(
    ["form", page, limit, sortBy, sortOrder, mssv],
    () => fetchFormAPI(page, limit, sortBy, sortOrder, mssv),
    {
      keepPreviousData: true,
      staleTime: 60000,
    },
  );
};

export const useAddForm = () => {
  const queryClient = useQueryClient();
  return useMutation(createFormAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries("form");
      queryClient.invalidateQueries("cart");
      window.location.href = "listregister";
    },
  });
};

export const useDeleteForm = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteFormAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries("form");
    },
    onError: (err) => {
      toast.error(err.response?.data.message);
    },
  });
};

export const useUpdateStatusForm = () => {
  const queryClient = useQueryClient();
  return useMutation(updateStatusFormAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries("form");
      queryClient.invalidateQueries("equip");
    },
    onError: (err) => {
      toast.error(err.response?.data.message);
    },
  });
};

export const useReturnEquip = () => {
  const queryClient = useQueryClient();
  return useMutation(returnEquip, {
    onSuccess: () => {
      queryClient.invalidateQueries("form");
      queryClient.invalidateQueries("equip");
    },
    onError: (err) => {
      toast.error(err.response?.data.message);
    },
  });
};
