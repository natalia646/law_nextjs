import getServerList from "@/functions/getServicesList";

export default function ServicePage({ params }: { params: { id: number } }) {
  const services = getServerList();
  const { id } = params;

  return <p>{services[id].title}</p>;
}
