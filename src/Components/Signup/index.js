import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCollectData } from "~/hooks/useCollectData";

export default function SignUp() {
  const [error, setError] = useState("");
  // const [form, setform] = useState({
  //   username: "",
  //   password: "",
  //   checkpassword: "",
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   role: "student",
  //   mssv: "",
  // });

  const navigate = useNavigate();

  const { form, handleCollectData } = useCollectData();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setError("");
    if (
      form.username.length > 0 &&
      form.password.length > 0 &&
      form.checkpassword.length > 0
    ) {
      if (form.password !== form.checkpassword) {
        setError("Mật khẩu xác nhận không khớp");
      } else {
        navigate("inforuser", { state: { item: form } });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="root mx-auto h-full w-full max-w-[500px] py-52 text-white"
    >
      <h1 className="mb-32 text-center text-7xl">Đăng Ký</h1>
      {error && (
        <p className="mx-auto mb-2 w-[70%] rounded bg-red-500 p-2 text-center">
          {error}
        </p>
      )}
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
          name="username"
          onChange={(e) => handleCollectData(e)}
          value={form.username}
          required
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
          name="password"
          onChange={(e) => handleCollectData(e)}
          value={form.password}
          required
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
          name="checkpassword"
          onChange={(e) => handleCollectData(e)}
          value={form.checkpassword}
          required
        ></input>
      </div>
      <div className="login mx-auto mt-5 w-[70%] py-5">
        {/* <Link to={"inforuser"}> */}
        <button
          // onClick={() => handleSubmit()}
          className="w-full bg-red-400 py-7 font-semibold"
        >
          Đăng Ký
        </button>
        {/* </Link> */}
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
