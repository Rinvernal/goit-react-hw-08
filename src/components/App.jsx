
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage/HomePage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
        </Route>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
      
  )
}

export default App;