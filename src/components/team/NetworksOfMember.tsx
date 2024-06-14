import Image from "next/image";
import { Link } from "@/navigation";
import { MemberType, NetworsType } from "@/global";
import CopyClick from "../showWhatsapp/CopyClick";

interface Props {
  item: MemberType;
}

export default function NetworksOfMember({ item }: Props) {

  const networks: NetworsType[] = item.networks;

  return (
    <div>
      {networks.map((item) => (
        <Link href={item.link} target="_blank">
          <Image
            src={`/icons/networks/${item.icon}.svg`}
            alt="network"
            width={24}
            height={24}
            style={{
              margin: " 0.5rem 0.3rem"
            }}
          ></Image>
        </Link>
      ))}
      {item.whatsapp === '' ? (
        ""
      ) : (
        <CopyClick whatsappNumber = {item.whatsapp}/>
      )}
    </div>
  );
}