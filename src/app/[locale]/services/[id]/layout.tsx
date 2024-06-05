import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { ServiceType } from "@/global";

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
    title: "Tedalini - " +  servicesList[id].title,
    description: servicesList[id].title,
  };
}

export default function ServiceLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
