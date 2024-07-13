import React, { useEffect, useState } from "react";
import { profile } from "~/api/authAPI";

export const useMe = () => {
  const [user, setUser] = useState({});

  const Getuserprofile = async () => {
    if (localStorage.getItem("token")) {
      const res = await profile();
      if (res && res.data) {
        setUser(res.data);
      }
    }
  };

  useEffect(() => {
    Getuserprofile();
  }, []);
  return { user };
};
