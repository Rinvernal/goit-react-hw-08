import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcom ${res.user.name}`)
        navigate(`/contacts`)
      }).catch(()=>{
        toast.error('Error :(')
      })
    options.resetForm()
  }
  const initialValues = {
    name: '',
    email: '',
    password: ''
  }
  return (
    <div>
      <h2>Register</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name='name' placeholder='enter name'/>
          <Field name='email' placeholder='enter email'/>
          <Field name='password' type='password' placeholder='enter password'/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm