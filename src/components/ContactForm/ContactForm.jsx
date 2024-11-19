import { ErrorMessage, Field, Form, Formik } from "formik"
import { nanoid } from "nanoid";
// import { useState } from "react";
import * as Yup from "yup";

const ContactForm = ({handelAddContact}) => {

  const handleSubmit = (values, options) => {
    handelAddContact({
      id: nanoid(), 
      name: values.username,
      number: values.tel
    });
    options.resetForm();
  };

  const valid = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50).required("Required!"),
    tel: Yup.string().min(3, "Too Short!").max(50).required("Required!"),
  })
  const initialValues = {
    username: '',
    tel: ''
  }

  // const [newValue, setNewValue] = useState('');

  return (
    <div>
      <Formik validationSchema={valid} onSubmit={handleSubmit} initialValues={initialValues}>
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