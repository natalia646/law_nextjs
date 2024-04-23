import { Link } from "@/navigation";
import { useMessages } from "next-intl";
import styled from "./services.module.css";

export default function Services() {
  const messeges = useMessages();

  return (
    <div className={styled.links}>
      {messeges.Services.map((item) => (
        <Link href={`/services/${item.id}`} key={item.id}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
