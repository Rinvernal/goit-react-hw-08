import { ErrorMessage, Field, Form, Formik } from "formik"
import { useDispatch} from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
    const newContact = {
      name: values.username,
      number: values.tel
    }
    dispatch(addContact(newContact))
    options.resetForm();
  }
  const valid = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50).required("Required!"),
    tel: Yup.string().min(3, "Too Short!").max(50).required("Required!"),
  })
  const initialValues = {
    username: '',
    tel: ''
  }

  return (
    <div>
      <Formik validationSchema={valid} onSubmit={onSubmit} initialValues={initialValues}>
        <Form>

          <label htmlFor="">
            <span>Name</span>
            <Field name='username' />
            <ErrorMessage name="username" component="span"/>
          </label>

          <label htmlFor="">
            <span>Number</span>
            <Field name='tel'/>
            <ErrorMessage name="tel" component="span"/>
          </label>

          <button type='submit'>Add contact</button>

        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm