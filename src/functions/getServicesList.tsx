import { useMessages } from "next-intl";
import { ServiceType } from '../global';

export default function getServerList() {
  const messeges = useMessages();
  if (!Array.isArray(messeges.Services)) {
    return [];
  }
  const servicesList: ServiceType[] = messeges.Services;

  return servicesList;
}