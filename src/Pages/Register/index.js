import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import CartCard from "./CartCard";

const cx = classNames.bind(styles);

export default function Register() {
  return (
    <div className="px-5">
      <h2 className="my-20 text-center text-4xl">Đăng Ký Vật Dụng</h2>
      <div className="grid lg:grid-cols-3">
        <div className="col-span-2">
          <CartCard />
        </div>
        <div className="col-span-1 rounded-md border-2">bill</div>
      </div>
    </div>
  );
}
