import { useMessages } from "next-intl";
import { AbstractIntlMessages } from "next-intl";

export interface ServicesInterface {
  id: number;
  title: string;
}

export default function ServicesMessages() {
  const message = useMessages();
  const services: ( ServicesInterface | AbstractIntlMessages | string )[] =
    Object.values(message.Services);
  return services;
}
