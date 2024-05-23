import styled from "./service.module.scss";
import { Link } from "@/navigation";
import { ServiceType } from "../../global";
import getCorrectNumber from "@/functions/getCorrectNumberOfServices";

interface Props {
  item: ServiceType;
}

export default function Service({ item }: Props) {
  const { id, title } = item;

  return (
    <Link href={`/services/${id}`} className={styled.block}>
      <h5>{getCorrectNumber(item)}</h5>
      <h6>{title}</h6>
    </Link>
  );
}
