import { Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/auth/operations"
import { Link, Navigate, NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { Box, Button, TextField, Typography } from "@mui/material"

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h2" textAlign="center" mb={3}>
        Login
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleChange, values }) => (
          <Form>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter email"
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter password"
              />
            </Box>
            <Button fullWidth variant="contained" color="secondary" type="submit" sx={{ mb: 2 }}>
              Submit
            </Button>
            <Typography textAlign="center">
              Якщо ви ще не маєте акаунту,{" "}
              <Link component={NavLink} to="/register">
                зареєструйтесь
              </Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm