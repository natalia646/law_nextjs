import { useMessages } from "next-intl";
import { NavigationType } from "@/global";

export default function getNavigation() {
  const messeges = useMessages();
  if (!Array.isArray(messeges.Navigation)) {
    return [];
  }
  const navigationLinks: NavigationType[] = messeges.Navigation;

  return navigationLinks;
}
