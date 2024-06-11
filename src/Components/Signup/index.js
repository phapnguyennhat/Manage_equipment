import { Link } from "react-router-dom"

export default function SignUp(){
  return(
    <div className="root w-[50%] h-full py-52 mx-auto text-white">
      <h1 className="text-center text-7xl mb-32">Đăng Ký</h1>
      <div className="user w-[70%] border-b-2 flex mx-auto pb-5">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ffffff/user.png"
          alt="user"
        />
        <input
          className="ml-10 bg-transparent outline-none text-2xl w-full px-5"
          placeholder="Tên đăng nhập"
        ></input>
      </div>
      <div className="password w-[70%] border-b-2 flex mx-auto pb-5 mt-14">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ffffff/lock.png"
          alt="lock"
        />
        <input
          type="password"
          className="ml-10 bg-transparent outline-none text-2xl w-full px-5"
          placeholder="Mật khẩu"
        ></input>
      </div>
      <div className="password w-[70%] border-b-2 flex mx-auto pb-5 mt-14">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ffffff/lock.png"
          alt="lock"
        />
        <input
          type="password"
          className="ml-10 bg-transparent outline-none text-2xl w-full px-5"
          placeholder="Nhập lại mật khẩu"
        ></input>
      </div>
      <div className="login w-[70%] mx-auto py-5 mt-5">
        <button className="w-full bg-red-400 py-7 font-semibold">
          Đăng Ký
        </button>
      </div>
      <div className="or mx-auto rounded-full bg-red-400 w-fit p-5 py-7 mt-8 font-semibold">
        Hoặc
      </div>
      <Link to="/signin" className="signup mx-auto ">
        <p className="w-[70%] mx-auto bg-red-400 py-7 font-semibold mt-10 text-center">Đăng Nhập</p>
      </Link>
    </div>
  )
};