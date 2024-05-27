import { useMessages } from "next-intl";
import { CaseType } from "../global";

export default function getCasesList() {
  const messeges = useMessages();
  if (!Array.isArray(messeges.Cases)) {
    return [];
  }
  const casesList: CaseType[] = messeges.Cases;

  return casesList;
}
