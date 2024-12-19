import clsx from "clsx";
import { NavLink } from "react-router-dom"
import s from './AuthNav.module.css'
const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <ul className={s.nav}>
        <NavLink className={buildLinkClass} to='/register'>Register</NavLink>
        <NavLink className={buildLinkClass} to='/login'>Login</NavLink>
      </ul>
    </div>
  )
}

export default AuthNav