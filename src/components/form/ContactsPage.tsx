import Contacts from "./Contacts";
import Form from "./Form";
import style from "./contacts.module.scss";

export default function ContactsPage() {
  return (
    <div className={style.container_page}>
      <Contacts />
      <Form />
    </div>
  );
}
