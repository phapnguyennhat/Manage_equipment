import React from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";

const InforUser = () => {
  return (
    <div className="h-screen w-full">
      <img
        className="cover-full absolute h-screen w-full"
        src="../assets/imgs/Sign/background1.avif"
        alt=""
      />
      <div className="absolute z-50 w-full px-4 py-24">
        <div className="mx-auto h-[600px] max-w-[450px] text-white">
          <div className="mx-auto max-w-[400px] py-16">
            <h1 className="text-center text-5xl font-bold">
              {" "}
              Thông Tin Sinh Viên
            </h1>
            <form
              // onSubmit={handleSubmit}
              action=""
              className="flex w-full max-w-[500px] flex-col py-4"
            >
              <div className="mx-auto flex w-[70%] items-center gap-x-4 border-b-2 border-white pb-2">
                <MdDriveFileRenameOutline size={30} />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="Họ"
                  className="my-2 ml-4 rounded bg-transparent p-3 outline-none"
                />
              </div>
              <div className="mx-auto mt-5 flex w-[70%] items-center gap-x-4 border-b-2 border-white pb-2">
                <MdDriveFileRenameOutline size={30} />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="Tên"
                  className="my-2 ml-4 rounded bg-transparent p-3 outline-none"
                />
              </div>
              <div className="mx-auto mt-5 flex w-[70%] items-center gap-x-4 border-b-2 border-white pb-2">
                <MdDriveFileRenameOutline size={30} />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="my-2 ml-4 rounded bg-transparent p-3 outline-none"
                />
              </div>
              <div className="mx-auto mt-5 flex w-[70%] items-center gap-x-4 border-b-2 border-white pb-2">
                <MdDriveFileRenameOutline size={30} />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="MSSV"
                  className="my-2 ml-4 rounded bg-transparent p-3 outline-none"
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
    </div>
  );
};

export default InforUser;
