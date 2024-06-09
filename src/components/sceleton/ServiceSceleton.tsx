import React from "react";
import style from "./serviceSceleton.module.scss";

export default function ServiceSceleton() {
  return (
    <div className={style.container}>
      <section className={style.section1}></section>
      <section className={style.section2}></section>
      <section className={style.section3}></section>
      <section className={style.section4}></section>
    </div>
  );
}
