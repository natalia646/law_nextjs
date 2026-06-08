import NewsPageContent from "./NewsPageContent";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const data = await fetch(
    "https://666d735d7a3738f7cacc677f.mockapi.io/api/news",
    { cache: "force-cache" }
  ).then((r) => r.json());
  const count = data[0]?.data?.length ?? 0;
  return Array.from({ length: count }, (_, i) => ({ id: String(i) }));
}

export default function NewsPage({
  params,
}: {
  params: { id: number; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  return <NewsPageContent params={params} />;
}
