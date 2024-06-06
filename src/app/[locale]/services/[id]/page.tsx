import getServerList from "@/functions/getServicesList";
import style from "./servicePage.module.scss";
import getCorrectNumber from "@/functions/getCorrectNumberOfServices";
import TopBlocks from "@/components/services/servicePage/TopBlocks";

export default function ServicePage({ params }: { params: { id: number } }) {
  const services = getServerList();
  const { id } = params;
  const { title, offer } = services[id];

  return (
    <section className={style.container}>
      <div className={style.title_wrapper}>
        <h2>{title}</h2>
        <div className={style.color}>
          <p>{getCorrectNumber({ id })}</p>
        </div>
      </div>
      <TopBlocks offer = {offer} />
    </section>
  );
}
