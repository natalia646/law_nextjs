import { useMessages } from "next-intl";
import { MemberType } from "@/global";

export default function getMembersList() {
  const messeges = useMessages();
  if (!Array.isArray(messeges.Team)) {
    return [];
  }
  const teamList: MemberType[] = messeges.Team;
  return teamList;
}