import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navber-wrapper max-w-screen-2xl text-base mx-auto px-[60px] py-8">
      <nav className="flex justify-between mx-10 items-center">
        <div className="logo basis-1/5 text-5xl font-bold">
          <Link to="/">
            <span className="text-[#9db7f0]">DH</span>
            <span className=" text-[#3ea6f1]">Store</span>
          </Link>
        </div>
        <div className="actions flex justify-center basis-3/5 gap-7 text-2xl">
          <Link to="/">
            <div>Trang chủ</div>
          </Link>
          <Link to="/Depot">
            <div>Kho</div>
          </Link>
          <Link to="/Register">
            <div>Đăng ký vật dụng</div>
          </Link>
          <Link to="/Listregister">
            <div>Danh sách đăng ký</div>
          </Link>
        </div>
        <div className="icons basis-1/5 text-center text-2xl">
            <button className="mr-5 bg-blue-500 py-4 px-10 rounded-xl font-semibold">Đăng nhập</button>
            <button className="bg-blue-500 py-4 px-10 rounded-xl font-semibold">Đăng ký</button>
        </div>
      </nav>
    </div>
  );
}
