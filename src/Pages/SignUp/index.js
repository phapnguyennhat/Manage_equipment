import SignUp from "~/Components/Signup";
import styles from "./Signup.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Signup() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <div className={cx("signup", "mx-auto h-[1000px] max-w-screen-2xl")}>
      <SignUp />
    </div>
  );
}
