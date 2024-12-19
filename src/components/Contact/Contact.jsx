import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
// import s from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Button, Card, CardContent, Typography } from "@mui/material";

const Contact = ({ contact, id }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, p: 2 }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IoMdPerson /> {contact.name}
        </Typography>
        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FaPhone /> {contact.number}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </Card>
  );
};

// const Contact = ({contact, id}) => {
//   const dispatch = useDispatch()
//   return (
//     <div className={s.boxContact}>
//       <Card className={s.wrapper}>
//         <h2 className={s.item}><IoMdPerson className={s.icon}/>{contact.name}</h2>
//         <h2 className={s.item}><FaPhone className={s.icon}/>{contact.number}</h2>
//       </Card>
//       <Button variant="contained" color="secondary" size="medium" className={s.button} onClick={() => dispatch(deleteContact(id))}>Delete</Button>
//     </div>
//   )
// }

export default Contact