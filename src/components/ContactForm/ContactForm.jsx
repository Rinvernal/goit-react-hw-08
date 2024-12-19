import { Form, Formik } from "formik"
import { useDispatch} from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import { Box, Button, TextField, Typography } from "@mui/material";

const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = {
      name: values.username,
      number: values.tel,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50).required("Required!"),
    tel: Yup.string().min(3, "Too Short!").max(50).required("Required!"),
  });

  const initialValues = {
    username: '',
    tel: '',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: '16px auto',
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: '#f3e5f5',
      }}
    >
      <Typography variant="h6" sx={{ color: '#6A1B9A', textAlign: 'center' }}>
        Add New Contact
      </Typography>
      <Formik validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleChange, values, errors, touched }) => (
          <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="Name"
                name="username"
                value={values.username}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                variant="outlined"
                size="small"
              />
              <TextField
                fullWidth
                label="Number"
                name="tel"
                value={values.tel}
                onChange={handleChange}
                error={touched.tel && Boolean(errors.tel)}
                helperText={touched.tel && errors.tel}
                variant="outlined"
                size="small"
              />
              <Button variant="contained" color="secondary" type="submit">
                Add Contact
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm