import getServeresList from "@/functions/getServercesList";
import { useTranslations } from "next-intl";

export default function SpecificServicePage({
  params,
}: {
  params: { id: number };
}) {
  const services = getServeresList();
  const t = useTranslations();
  return <p>{t(`${services[params.id].title}`)}</p>;
}
