import SignUp from "~/Components/Signup"
import styles from './Signup.module.scss'
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

export default function Signup(){
  return(
    <div className={cx('signup',"max-w-screen-2xl mx-auto h-[1000px]")}>
      <SignUp />
    </div>
  )
}