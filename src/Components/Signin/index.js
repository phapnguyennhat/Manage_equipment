import styles from "./Signin.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "~/api/authAPI";

const cx = classNames.bind(styles);

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginAPI(username, password);
      window.location.reload();
      navigate("/");
    } catch (err) {
      setError(err?.response.data.message);
    }
  };
  return (
    <form
      action="POST"
      onSubmit={handleSubmit}
      className="root relative mx-auto h-full w-full max-w-[500px] py-52 text-white"
    >
      <h1 className="mb-32 text-center text-7xl">Đăng Nhập</h1>
      {error ? (
        <p className="absolute left-[15%] top-[21%] mx-auto my-2 w-[70%] rounded-md bg-red-400 p-3">
          {" "}
          {error[0]}{" "}
        </p>
      ) : null}
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
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="choice mx-auto mt-5 flex w-[70%] justify-between pb-5">
        <div className="remember flex">
          <input className="block" type="checkbox"></input>
          <span className="my-auto block text-xl">Lưu mật khẩu</span>
        </div>
        <Link className="text-xl">Quên mật khẩu?</Link>
      </div>
      <div className="login mx-auto mt-5 w-[70%] py-5">
        <button className="w-full bg-red-400 py-7 font-semibold">
          Đăng Nhập
        </button>
      </div>
      <div className="or mx-auto mt-8 w-fit rounded-full bg-red-400 p-5 py-7 font-semibold">
        Hoặc
      </div>
      <Link to="/signup" className="signup mx-auto">
        <p className="mx-auto mt-10 w-[70%] bg-red-400 py-7 text-center font-semibold">
          Đăng Ký
        </p>
      </Link>
    </form>
  );
}
