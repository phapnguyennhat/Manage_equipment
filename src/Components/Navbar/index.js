import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)

export default function Navbar() {
    return (
        <div className={cx('navbar')}>
            <Link to='/'>
                <div>Logo</div>
            </Link>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/Depot'>
                <div>Depot</div>
            </Link>
            <Link to='/Register'>
                <div>Register</div>
            </Link>
            <Link to='/Listregister'>
                <div>Lisregister</div>
            </Link>
        </div>
    )
}