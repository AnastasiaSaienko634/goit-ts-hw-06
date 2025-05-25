import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function ContactList({}) {
  const contacts = useSelector((state) => state.contacts.items);
  const filtersName = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const visiableContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filtersName.toLowerCase())
  );

  const handeleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={css.listContact}>
        {visiableContact.map((el) => (
          <li key={el.id} className={css.boxContact}>
            <Contact
              name={el.name}
              number={el.number}
              id={el.id}
              handeleDeleteContact={handeleDeleteContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
