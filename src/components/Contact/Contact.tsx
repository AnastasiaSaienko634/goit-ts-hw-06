import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { AiOutlineUserDelete } from "react-icons/ai";

type Contact = {
  name: string;
  number: string;
  handeleDeleteContact: (id: string) => void;
  id: string;
};

export default function Contact({
  name,
  number,
  handeleDeleteContact,
  id,
}: Contact) {
  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.text}>
          <IoPerson className={css.iconPerson} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.iconPhone} />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          handeleDeleteContact(id);
        }}
        className={css.buttonContact}
      >
        Delete <AiOutlineUserDelete />
      </button>
    </>
  );
}
