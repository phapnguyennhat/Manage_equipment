const { useQuery, useMutation, useQueryClient } = require("react-query");
const {
  addItemAPI,
  updateCartAll,
  deleteCartAll,
  deleteItemAPI,
  updateItemAPI,
  getCartAPI,
} = require("~/api/cartAPI");

export const useCartData = () => {
  return useQuery("cart", getCartAPI, {
    staleTime: 60000,
    keepPreviousData: true,
  });
};

export const useAddItemCart = () => {
  const queryClient = useQueryClient();
  return useMutation(addItemAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};

export const useUpdateCartAll = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCartAll, {
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};

export const useDeleteCartAll = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCartAll, {
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteItemAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};

export const useUpdateItem = () => {
  const queryClient = useQueryClient();
  return useMutation(updateItemAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};
