import { Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations"
import { Link, NavLink, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { Box, Button, TextField, Typography } from "@mui/material"

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res.user.name}`);
        navigate(`/contacts`);
      })
      .catch(() => {
        toast.error("Error :(");
      });
    options.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h2" textAlign="center" mb={3}>
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleChange, values }) => (
          <Form>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter name"
              />
            </Box>
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
              Якщо ви вже маєте акаунт{" "}
              <Link component={NavLink} to="/login">
                увійдіть
              </Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Box>
  );
};


// const RegistrationForm = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const handleSubmit = (values, options) => {
//     dispatch(register(values))
//       .unwrap()
//       .then(res => {
//         toast.success(`Welcom ${res.user.name}`)
//         navigate(`/contacts`)
//       }).catch(()=>{
//         toast.error('Error :(')
//       })
//     options.resetForm()
//   }
//   const initialValues = {
//     name: '',
//     email: '',
//     password: ''
//   }
//   return (
//     <div>
//       <h2>Register</h2>
//       <Formik onSubmit={handleSubmit} initialValues={initialValues}>
//         <Form>
//           <Field name='name' placeholder='enter name'/>
//           <Field name='email' placeholder='enter email'/>
//           <Field name='password' type='password' placeholder='enter password'/>
//           <button type="submit">Submit</button>
//           <p>Якщо ви вже маєте акаунт <NavLink to='/login'>увійдіть</NavLink></p>
//         </Form>
//       </Formik>
//     </div>
//   )
// }

export default RegistrationForm