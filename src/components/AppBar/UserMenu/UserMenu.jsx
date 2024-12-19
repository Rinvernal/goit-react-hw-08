import { useSelector } from "react-redux"
import { selectUser } from "../../../redux/auth/selectors"

const UserMenu = () => {
  const user = useSelector(selectUser)
  return (
    <div>
      <h2>Welcome {user.name}</h2>
    </div>
  )
}

export default UserMenu