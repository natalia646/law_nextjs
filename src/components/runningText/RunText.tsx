import getServicesList from "@/functions/getServicesList";
import style from "./runningText.module.scss";
import Image from "next/image";

export default function RunText() {
  const services = getServicesList();

  return (
    <div className={style.container}>
      <div className={style.scroll}>
        {services.map((service) => (
          <div className={style.right}>
            <p key={service.id}>{service.title}</p>
            <Image
              src={"/icons/point.svg"}
              alt="point"
              width={8}
              height={8}
            ></Image>
          </div> 
        ))}
      </div>

      <div className={style.scroll}>
        {services.map((service) => (
          <div className={style.right}>
            <p key={service.id}>{service.title}</p>
            <Image
              src={"/icons/point.svg"}
              alt="point"
              width={8}
              height={8}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}