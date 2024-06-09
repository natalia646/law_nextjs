import style from "./newsSceleton.module.scss";

export default function NewsSceleton() {
  return (
    <div className={style.container}>
      <section className={style.section1}></section>
      <section className={style.section2}></section>
      <section className={style.section3}></section>
    </div>
  );
}
