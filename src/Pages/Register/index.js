import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import CartCard from "./CartCard";
import Footer from "~/Components/Footer";
import { FaSave } from "react-icons/fa";
import { useEffect } from "react";

const cx = classNames.bind(styles);

export default function Register() {
  return (
    <div className="mx-[30px] lg:mx-[45px]">
      <div className="min-h-screen">
        <h2 className="my-20 text-center text-4xl">Đăng Ký Vật Dụng</h2>
        <div className="flex flex-col gap-x-20 lg:flex-row">
          <div className="mb-6 w-auto lg:w-[60%]">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-3 rounded bg-blue-400 p-4 hover:bg-blue-600">
                <FaSave size={20} /> <span>Lưu</span>
              </button>
            </div>
          </div>
          <div className="w-auto lg:w-[35%]">
            <section className="w-full rounded-md border-2 p-6">
              <div className="flex justify-between border-b-2 border-gray-300 pb-3 text-3xl font-bold">
                <span>Tổng giá trị:</span>
                <span>$18</span>
              </div>
              <div className="my-4 flex justify-between text-3xl">
                <span>Cuon so tay</span>
                <span>x2</span>
              </div>
              <div className="my-4 flex justify-between text-3xl">
                <span>Cuon so tay</span>
                <span>x2</span>
              </div>{" "}
              <div className="my-4 flex justify-between text-3xl">
                <span>Cuon so tay</span>
                <span>x2</span>
              </div>
              <form>
                <select className="outline-none">
                  <option>--HÌNH THỨC NHẬN VẬT DỤNG--</option>
                  <option>Nhận tại văn phòng</option>
                  <option>Vận chuyển đến điểm giao </option>
                </select>
                <div className="my-5 flex lg:justify-center">
                  <button className="mr-4 bg-blue-400 p-4 hover:bg-blue-600">
                    Xác nhận
                  </button>
                  <button className="bg-red-400 p-4 hover:bg-red-600">
                    Xóa tất cả
                  </button>
                </div>
                <p className="text-red-500">
                  *Cá nhân hay tổ chức nào làm mất hay hư hỏng vật dụng có trách
                  nhiệm mua lại hoặc đền giá trị tương đương
                </p>
                <p className="text-red-500">
                  *Trả phí vận chuyển 1$ với mỗi Km cho hình thức vận chuyển đến
                  điểm giao
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
