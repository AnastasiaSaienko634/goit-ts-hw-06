import css from "./ContactForm.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleContactForm = (values, actions) => {
    dispatch(
      addContact({
        id: uuidv4(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm(); //очищає форму після відправки
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short").max(50, "Too Long").required(),
    number: Yup.string().min(3, "Too Short").max(50, "Too Long").required(),
  });
  return (
    <>
      <Formik
        validationSchema={contactSchema}
        initialValues={{ name: "", number: "" }}
        onSubmit={handleContactForm}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.formlabel}>
            <MdDriveFileRenameOutline className={css.icon} /> Name
            <Field
              type="text"
              name="name"
              id="name"
              className={css.formInput}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.schemaName}
            />
          </label>
          <label htmlFor="number" className={css.formlabel}>
            <MdOutlinePhoneInTalk className={css.icon} /> Number
            <Field
              type="text"
              name="number"
              id="number"
              className={css.formInput}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.schemaNumber}
            />
          </label>
          <button type="submit" className={css.formButton}>
            <IoMdPersonAdd className={css.iconContact} />
            Add concat
          </button>
        </Form>
      </Formik>
    </>
  );
}
