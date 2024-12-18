import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/auth/operations"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()
  const handleSubmit = (values, options) => {
    dispatch(login(values))
    options.resetForm()
  }
  const initialValues = {
    email:'',
    pasword: ''
  }
  if (isLoggedIn) {
    return <Navigate to='/contacts'/>
  }
  return (
    <div>
      <h2>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name='email' placeholder='enter email'/>
          <Field name='password' type='password' placeholder='enter password'/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm