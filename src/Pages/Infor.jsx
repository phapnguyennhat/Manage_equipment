import React, { useEffect, useState } from "react";
import { profile } from "~/api/authAPI";

const Infor = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    profile().then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="mx-auto w-full max-w-[650px]">
      <h3 className="my-10 text-center text-3xl font-bold text-red-600">
        Thông Tin Sinh Viên
      </h3>
      <table className="mx-auto w-full max-w-[600px] table-auto overflow-scroll scroll-smooth">
        <tr className="border text-center">
          <th>Thông Tin </th>
          <td>Họ</td>
          <td>{user?.lastname}</td>
        </tr>
        <tr className="border text-center">
          <td></td>
          <td>Tên</td>
          <td>{user?.firstname}</td>
        </tr>
        <tr className="border text-center">
          <td></td>
          <td>MSSV</td>
          <td>{user?.mssv}</td>
        </tr>
        <tr className="border text-center">
          <td></td>
          <td>Chức Vụ</td>
          <td>{user?.role}</td>
        </tr>
        <tr className="border text-center">
          <th>Thông Tin Liên Lạc</th>
          <td>Email</td>
          <td>{user?.email}</td>
        </tr>
        <tr className="border text-center">
          <td></td>
          <td>Số Điện Thoại</td>
          <td>012345678</td>
        </tr>
      </table>
      <div className="flex justify-end">
        {" "}
        <button className="mt-4 rounded-md bg-blue-300 p-4">
          Cập nhật thông tin liên lạc
        </button>
      </div>
    </div>
  );
};

export default Infor;
