import style from "./newsSceleton.module.scss";

export default function NewsSceleton() {
  return (
    <div className={style.container}>
      {["_", "_", "_", "_", "_", "_"].map((_, i) => (
        <section key={i}></section>
      ))}
    </div>
  );
}
