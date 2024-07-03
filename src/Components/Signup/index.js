import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <form className="root mx-auto h-full w-full max-w-[500px] py-52 text-white">
      <h1 className="mb-32 text-center text-7xl">Đăng Ký</h1>
      <div className="user mx-auto flex w-[70%] border-b-2 pb-5">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ffffff/user.png"
          alt="user"
        />
        <input
          className="ml-10 w-full bg-transparent px-5 text-2xl outline-none"
          placeholder="Tên đăng nhập"
        ></input>
      </div>
      <div className="password mx-auto mt-14 flex w-[70%] border-b-2 pb-5">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ffffff/lock.png"
          alt="lock"
        />
        <input
          type="password"
          className="ml-10 w-full bg-transparent px-5 text-2xl outline-none"
          placeholder="Mật khẩu"
        ></input>
      </div>
      <div className="password mx-auto mt-14 flex w-[70%] border-b-2 pb-5">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ffffff/lock.png"
          alt="lock"
        />
        <input
          type="password"
          className="ml-10 w-full bg-transparent px-5 text-2xl outline-none"
          placeholder="Nhập lại mật khẩu"
        ></input>
      </div>
      <div className="login mx-auto mt-5 w-[70%] py-5">
        <Link to={"inforuser"}>
          <button className="w-full bg-red-400 py-7 font-semibold">
            Đăng Ký
          </button>
        </Link>
      </div>
      <div className="or mx-auto mt-8 w-fit rounded-full bg-red-400 p-5 py-7 font-semibold">
        Hoặc
      </div>
      <Link to="/signin" className="signup mx-auto">
        <p className="mx-auto mt-10 w-[70%] bg-red-400 py-7 text-center font-semibold">
          Đăng Nhập
        </p>
      </Link>
    </form>
  );
}
