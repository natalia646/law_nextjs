import styled from "./service.module.css";
import { Link } from "@/navigation";
import { ServiceType } from "../../global";

interface Props {
  item: ServiceType;
}

export default function Service({ item }: Props) {

  return (
    <Link href={`/services/${item.id}`} className={styled.link}>
      {item.title}
    </Link>
  );
}
