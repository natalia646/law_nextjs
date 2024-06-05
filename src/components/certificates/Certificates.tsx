import Image from "next/image";
import style from "./certificates.module.css";

export default function Certificates({
  certificates,
}: {
  certificates: string[];
}) {

  return (
    <>
      {certificates.map((item, i) => (
        <Image
          src={`/certificates/${item}`}
          alt="certificates"
          width={900}
          height={100}
          key={i}
          className={style.image}
        ></Image>
      ))}
    </>
  );
}
