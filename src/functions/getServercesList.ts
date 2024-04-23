import { useMessages } from "next-intl";

export interface ServicesType {
  id: number;
  title: string;
}

export default async function getServeresList() {
  const messages =  useMessages();
  const services: ServicesType[] = await JSON.parse(
    JSON.stringify(messages.Services)
  );
  return services;
}
