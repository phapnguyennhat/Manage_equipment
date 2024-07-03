import { Link, useNavigate } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";
import { CiViewList } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa6";
import { logOut, profile } from "~/api/authAPI";

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayNav, setDisplayNav] = useState(false);
  const [nav2, setNav2] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem("token")) {
      profile().then((res) => setUser(res.data));
    }
  }, []);

  return (
    <div className="navber-wrapper mx-auto max-w-screen-2xl bg-gradient-to-l from-cyan-500 px-5 py-8 text-base md:px-[45px] lg:px-[50px]">
      <nav className="mx-3 flex items-center justify-between lg:mx-10">
        <div className="logo text-5xl font-bold md:basis-1/5">
          <Link to="/">
            <span className="text-[#9db7f0]">DH</span>
            <span className="text-[#3ea6f1]">Store</span>
          </Link>
        </div>
        <div className="actions hidden justify-center gap-7 text-2xl md:basis-3/5 lg:flex">
          <Link to="/" className="hover:underline hover:underline-offset-4">
            <div>Trang chủ</div>
          </Link>
          <Link
            to="/Depot?page=1"
            className="hover:underline hover:underline-offset-4"
          >
            <div>Kho</div>
          </Link>
          <Link
            to="/Register"
            className="hover:underline hover:underline-offset-4"
          >
            <div>Đăng ký vật dụng</div>
          </Link>
          <Link
            to="/Listregister"
            className="hover:underline hover:underline-offset-4"
          >
            <div>Danh sách đăng ký</div>
          </Link>
        </div>
        <div
          className={`icons justify-end text-center text-xl md:basis-1/5 lg:text-2xl ${localStorage.getItem("token") ? "hidden" : "flex"}`}
        >
          <Link to="/Signin">
            <button className="mr-5 rounded-xl bg-blue-500 px-3 py-4 font-semibold">
              Đăng nhập
            </button>
          </Link>
          <Link to="/Signup">
            <button className="rounded-xl bg-blue-500 px-3 py-4 font-semibold">
              Đăng ký
            </button>
          </Link>
        </div>
        <div
          onClick={() => setDisplayMenu(!displayMenu)}
          className={`relative hidden basis-1/5 items-center justify-center gap-2 text-2xl ${localStorage.getItem("token") ? "lg:flex" : "hidden"} cursor-pointer`}
        >
          <img
            className="w-10 rounded-full"
            src="https://th.bing.com/th/id/OIP.Wq6Kq_DS5JVcBUCIVD5JyQAAAA?w=217&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="not fould"
          ></img>
          <span>{user.lastname + " " + user.firstname}</span>
          <menu
            className={`absolute top-[100%] z-30 h-auto w-[200px] bg-white ${displayMenu ? "block" : "hidden"} overflow-hidden rounded-md`}
          >
            <ul>
              <li className="p-4 hover:bg-slate-100">
                <Link to={"info"}>Thông Tin Sinh Viên</Link>
              </li>
              <li className="p-4 hover:bg-slate-100">Báo Cáo</li>
              <li className="p-4 hover:bg-slate-100">Thông Báo</li>
            </ul>
            <div
              onClick={() => {
                logOut();
                navigate("signin");
              }}
              className="flex gap-x-3 border-t-2 border-gray-200 p-4 hover:bg-slate-100"
            >
              <IoIosLogOut color="red" size={20} />
              Đăng Xuất
            </div>
          </menu>
        </div>
        <div
          className={`relative lg:hidden ${localStorage.getItem("token") ? "block" : "hidden"} `}
        >
          <button onClick={() => setDisplayNav(!displayNav)}>
            {" "}
            <FiAlignJustify size={20} />
          </button>
          <nav
            className={`absolute right-0 top-[100%] h-auto w-[260px] cursor-pointer bg-white text-2xl ${displayNav ? "block" : "hidden"} overflow-hidden rounded-md`}
          >
            <div
              onClick={() => setNav2(!nav2)}
              className="flex items-center justify-between p-4 hover:bg-slate-100"
            >
              <div className="flex items-center gap-x-2">
                <img
                  className="w-10 rounded-full"
                  src="https://th.bing.com/th/id/OIP.Wq6Kq_DS5JVcBUCIVD5JyQAAAA?w=217&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="not fould"
                ></img>
                <span>{user.lastname + " " + user.firstname}</span>
              </div>
              <FaCaretRight size={20} />
            </div>
            <ul className={`${nav2 ? "hidden" : "block"} `}>
              <li>
                <Link
                  className="flex items-center gap-x-2 p-4 hover:bg-slate-100"
                  to={"/"}
                  onClick={() => setDisplayNav(false)}
                >
                  <IoHomeSharp size={20} />
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/Depot?page=1"
                  className="flex items-center gap-x-2 p-4 hover:bg-slate-100"
                  onClick={() => setDisplayNav(false)}
                >
                  <FiBox size={20} />
                  Kho
                </Link>
              </li>
              <li>
                <Link
                  to={"register"}
                  className="flex items-center gap-x-2 p-4 hover:bg-slate-100"
                  onClick={() => setDisplayNav(false)}
                >
                  <FiEdit3 size={20} />
                  Đăng Kí Vật Dụng
                </Link>
              </li>
              <li>
                <Link
                  to={"Listregister"}
                  className="flex items-center gap-x-2 p-4 hover:bg-slate-100"
                  onClick={() => setDisplayNav(false)}
                >
                  <CiViewList size={20} />
                  Danh Sách Đăng Ký
                </Link>
              </li>
            </ul>
            <ul
              className={`${nav2 ? "block" : "hidden"} `}
              onClick={() => setDisplayNav(false)}
            >
              <li className="p-4 hover:bg-slate-100">
                <Link to={"info"}>Thông Tin Sinh Viên</Link>
              </li>
              <li className="p-4 hover:bg-slate-100">Báo Cáo</li>
              <li className="p-4 hover:bg-slate-100">Thông Báo</li>
            </ul>
            <div
              onClick={() => {
                logOut();
                navigate("signin");
              }}
              className="flex gap-x-3 border-t-2 border-gray-200 p-4 hover:bg-slate-100"
            >
              <IoIosLogOut color="red" size={20} />
              Đăng Xuất
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
}
