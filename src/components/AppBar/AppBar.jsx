import s from "./AppBar.module.css"
import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header className={s.header}>
      <h3>Routing</h3>
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      <Navigation/>
    </header>
    )
}

export default AppBar