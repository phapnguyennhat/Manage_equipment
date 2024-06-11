import SignIn from "~/Components/Signin";
import styles from './SignIn.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Signin() {
  return (
    <div className={cx('signin',"max-w-screen-2xl mx-auto h-[1000px]")}>
      <SignIn />
    </div>
  );
}
