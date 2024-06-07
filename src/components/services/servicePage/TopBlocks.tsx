import { ServiceOfferType } from "@/global";
import style from "./topBlocks.module.scss";

export default function TopBlocks({ offer }: { offer: ServiceOfferType[] }) {
  return (
    <section className={style.container}>
      {offer.map((item, i) => (
        <div className={style.block} key={i}>
          <p className={style.bolt}>{item.bolt}</p>
          {Array.isArray(item.desc) ? (
            item.desc.map((val, i) => <p key={i}>{'-' + val}</p>)
          ) : (
            <p>{item.desc}</p>
          )}
        </div>
      ))}
    </section>
  );
}
