import clsx from "clsx";
import s from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Button } from "@mui/material";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Navigation = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <div>
      <ul className={s.nav}>
      <NavLink className={buildLinkClass} to="/">Home</NavLink>
      <NavLink className={buildLinkClass} to="/contacts">Contacts</NavLink>
      {isLoggedIn && <Button variant="contained" color="secondary" onClick={()=>dispatch(logout())}>Logout</Button>}
      </ul>
    </div>
  )
}

export default Navigation