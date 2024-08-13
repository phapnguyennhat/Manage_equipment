const { useQuery } = require("react-query");
const { profile } = require("~/api/authAPI");

export const useMe = () => {
  return useQuery("user", profile, {
    // staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
