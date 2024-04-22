import getServeresList from "@/functions/getServercesList";

export default function SpecificServicePage({
  params,
}: {
  params: { id: number };
}) {
  const services = getServeresList();
  return <div>{services[params.id].title}</div>;
}
