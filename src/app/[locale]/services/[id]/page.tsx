import getServerList from "@/functions/getServicesList";

export default function ServicePage({ params }: { params: { id: number } }) {
  const services = getServerList();
  const { id } = params;

  return <h2>{services[id].title}</h2>;
}
