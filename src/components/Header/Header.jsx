import s from "./Header.module.css"
import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUser)
  return (
    <header className={s.header}>
      <h3>Routing</h3>
      {isLoggedIn && <div>{user.email}</div>}
      <Navigation/>
    </header>
    )
}

export default Header