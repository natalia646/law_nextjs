import ServicePageContent from "./ServicePageContent";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const data = await fetch(
    "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/serv",
    { cache: "force-cache" }
  ).then((r) => r.json());
  const count = data[0]?.data?.length ?? 0;
  return Array.from({ length: count }, (_, i) => ({ id: String(i) }));
}

export default function ServicePage({
  params,
}: {
  params: { id: number; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  return <ServicePageContent params={params} />;
}
