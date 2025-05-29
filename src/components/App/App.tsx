import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { IoIosPhonePortrait } from "react-icons/io";

export default function App() {
  return (
    <>
      <div>
        <h1 className={css.header}>
          <IoIosPhonePortrait className={css.icon} />
          Your Phonebook...
        </h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
