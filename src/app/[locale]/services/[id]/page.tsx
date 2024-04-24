import getServerList from "@/functions/getServicesList";
import { useTranslations } from "next-intl";

export default function ServicePage({ params }: { params: { id: number } }) {
  const services = getServerList();
  const t = useTranslations()
  const { id } = params;

  return <p>{t(`${services[id].title}`)}</p>;
}