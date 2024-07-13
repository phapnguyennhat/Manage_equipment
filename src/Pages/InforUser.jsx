import React, { useEffect, useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { signInAPI } from "~/api/authAPI";
import Loader from "~/Components/Loader";
import { useCollectData } from "~/hooks/useCollectData";

const InforUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const form = location.state.item;
  const { item } = location.state || {};
  const [error, setError] = useState("");
  const { form, handleCollectData } = useCollectData({
    ...item,
    role: "student",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInAPI(form);
      setLoading(false);
      navigate("signin");
    } catch (error) {
      setError(
        Array.isArray(error.response.data.message)
          ? error?.response.data.message[0]
          : error.response.data.message,
      );
      setLoading(false);
    }
  };
  return (
    <div className="h-screen w-full">
      <img
        className="cover-full absolute h-screen w-full"
        src="../assets/imgs/Sign/background1.avif"
        alt=""
      />
      <div className="absolute z-50 w-full px-4 py-24">
        <div className="mx-auto h-[600px] max-w-[500px] text-white">
          <div className="mx-auto max-w-[450px] py-16">
            <h1 className="text-center text-5xl font-bold">
              {" "}
              Thông Tin Sinh Viên
            </h1>
            {error && (
              <p className="mx-auto my-2 w-[70%] rounded-md bg-red-400 p-3">
                {error}
              </p>
            )}
            <form
              onSubmit={handleSubmit}
              action="POST"
              className="flex w-full max-w-[500px] flex-col py-4"
            >
              <div className="mx-auto flex w-[70%] items-center gap-x-4 border-b-2 border-white pb-2">
                <MdDriveFileRenameOutline size={30} />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="Họ"
                  name="lastname"
                  value={form.lastname}
                  onChange={(e) => handleCollectData(e)}
                  className="my-2 ml-4 rounded bg-transparent p-3 outline-none"
                  required
                />
              </div>
              <div className="mx-auto mt-5 flex w-[70%] items-center gap-x-4 border-b-2 border-white pb-2">
                <MdDriveFileRenameOutline size={30} />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="Tên"
                  className="my-2 ml-4 rounded bg-transparent p-3 outline-none"
                  name="firstname"
                  value={form.firstname}
                  onChange={(e) => handleCollectData(e)}
                  required
                />
              </div>
              <div className="mx-auto mt-5 flex w-[70%] items-center gap-x-4 border-b-2 border-white pb-2">
                <MdDriveFileRenameOutline size={30} />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="my-2 ml-4 rounded bg-transparent p-3 outline-none"
                  name="email"
                  value={form.email}
                  onChange={(e) => handleCollectData(e)}
                  required
                />
              </div>
              <div className="mx-auto mt-5 flex w-[70%] items-center gap-x-4 border-b-2 border-white pb-2">
                <MdDriveFileRenameOutline size={30} />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="MSSV"
                  className="my-2 ml-4 rounded bg-transparent p-3 outline-none"
                  name="mssv"
                  value={form.mssv}
                  onChange={(e) => handleCollectData(e)}
                  required
                />
              </div>

              <div className="login mx-auto mt-5 w-[70%] py-5">
                <button className="w-full bg-red-400 py-7 font-semibold">
                  Xác Nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default InforUser;
