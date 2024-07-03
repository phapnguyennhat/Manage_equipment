import SignIn from "~/Components/Signin";
import styles from "./SignIn.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Signin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className={cx("signin", "mx-auto h-[1000px] max-w-screen-2xl")}>
      <SignIn />
    </div>
  );
}
