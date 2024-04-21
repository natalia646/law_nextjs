import ServicesMessages from "@/components/servises/servicesMessages";
import { Link } from "@/navigation";
import styled from "./services.module.css";
import { ServicesInterface } from "@/components/servises/servicesMessages";

export default function Services() {
  const services = ServicesMessages();

  return (
    <nav className={styled.links}>
      {services.map((item :any) => (
        <Link href={`/services/${item.id}`} key={item.id}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
