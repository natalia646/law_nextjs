import getServeresList from "@/functions/getServercesList";
import { Link } from "@/navigation";
import styled from "./services.module.css";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const servicesList = getServeresList();
  const t = useTranslations();

  return (
    <nav>
      {servicesList.map((item) => (
        <Link href={`/services/${item.id}`} key={item.id}>{t(`${item.title}`)}</Link>
      ))}
    </nav>
  );
}
