import { useMessages } from "next-intl";
import { NavigationType } from "@/global";

export default function getNavigation() {
  const messeges = useMessages();
  if (!Array.isArray(messeges.Header)) {
    return [];
  }
  const navigationLinks: NavigationType[] = messeges.Header;

  return navigationLinks;
}
