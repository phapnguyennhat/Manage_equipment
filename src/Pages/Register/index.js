import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import CartCard from "./CartCard";
import Footer from "~/Components/Footer";
import { useEffect } from "react";

const cx = classNames.bind(styles);

export default function Register() {
  return (
    <div className="mx-[30px] lg:mx-[60px]">
      <div className="min-h-screen">
        <h2 className="my-20 text-center text-4xl">Đăng Ký Vật Dụng</h2>
        <div className="flex flex-col gap-x-20 lg:flex-row">
          <div className="mb-6 w-auto lg:w-[60%]">
            <CartCard />
          </div>
          <div className="w-auto rounded-md border-2 lg:w-[35%]">
            <table>
              <thead>
                <th>Vật dụng</th>
                <th>Hạn trả</th>
              </thead>
              <tbody>
                <tr>
                  <td>Cuon so tay</td>
                  <td>14/06/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
