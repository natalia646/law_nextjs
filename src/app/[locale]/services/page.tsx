import Service from "@/components/services/Service";
import styled from "./services.module.css";
import getServicesList from "@/functions/getServicesList";
import { unstable_setRequestLocale } from "next-intl/server";

export default function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const services = getServicesList()

  return (
    <div className={styled.links}>
      {services.map((item) => (
        <Service item={item} key={item.id}/>
      ))}
    </div>
  );
}