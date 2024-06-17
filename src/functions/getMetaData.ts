import { useMessages } from "next-intl";
import { MetaDataType } from "@/global";

export default function getMetaData() {
  const messeges = useMessages();
  if (!Array.isArray(messeges.MetaData)) {
    return [];
  }
  const metadata: MetaDataType[] = messeges.MetaData;

  return metadata;
}