import { useMessages } from "next-intl";

export default function Services() {
  const message = useMessages();
  const services = Object.values(message.Services);

  return (
    <ul>
      serv
    </ul>
  );
}
