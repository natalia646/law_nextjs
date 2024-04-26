import getServerList from "@/functions/getServicesList";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { ServiceType } from "@/global";

// export const metadata: Metadata = {
//   title: '...',
//   description: '...',
// }

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const messages = await getMessages();
  const { id } = params;
  if (!Array.isArray(messages.Services)) {
    return {};
  }
  const servicesList: ServiceType[] = messages.Services;

  return {
    title: servicesList[id].title,
  };
}

export default function ServicePage({ params }: { params: { id: number } }) {
  const services = getServerList();
  const { id } = params;

  return <p>{services[id].title}</p>;
}
