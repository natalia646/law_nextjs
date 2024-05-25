import style from "./partners.module.scss";

export default function Partners() {
  const partners = [
    "/icons/logo/kta.svg",
    "/icons/logo/rm.svg",
    "/icons/logo/fin-serv.svg",
    "/icons/logo/exalty.svg",
  ];

  return (
    <div className={style.container}>
      {partners.map((partner, i) => (
        <section
          style={{
            background: `url(${partner}) no-repeat center`,
            height: "3.5rem",
          }}
          key={partners[i]}
        ></section>
      ))}
    </div>
  );
}
