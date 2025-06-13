import React from "react";
import style from "./contacts.module.scss";
import Form from "./FormResevd";
import {Address} from "./Address";

export default function Contacts() {

  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <Address/>
      </div>
      <Form />
    </section>
  );
}
