import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface ContactProps {
  name: string;
  number: string;
  id: string;
  handleDeleteContact: (id: string) => void;
}

export interface ContactState {
  items: Contact[];
}

export interface FilterState {
  name: string;
}

export interface RootState {
  contacts: ContactState;
  filters: FilterState;
}
export default function ContactList({}) {
  const contacts = useSelector((state: RootState) => state.contacts.items);
  const filtersName = useSelector((state: RootState) => state.filters.name);
  const dispatch = useDispatch();

  const visiableContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filtersName.toLowerCase())
  );

  const handeleDeleteContact = (id: string): void => {
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
