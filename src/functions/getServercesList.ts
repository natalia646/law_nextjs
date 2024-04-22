import { useMessages } from "next-intl";

export interface ServicesType {
  id: number;
  title: string;
}

export default function getServeresList() {
  const messages = useMessages();
  const services: ServicesType[] = JSON.parse(
    JSON.stringify(messages.Services)
  );
  return services;
}
