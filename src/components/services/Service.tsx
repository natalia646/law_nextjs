import styled from "./service.module.css";
import { Link } from "@/navigation";
import { ServiceType } from "../../global";
import getCorrectNumber from "@/functions/getCorrectNumberOfServices";

interface Props {
  item: ServiceType;
}


export default function Service({ item }: Props) {
  const { id, title } = item;

  return (
    <section className={styled.block}>
      <p>{getCorrectNumber(item)}</p>
      <Link href={`/services/${id}`} className={styled.link}>
        {title}
      </Link>
    </section>
  );
}
