import Image from "next/image";
import { Link } from "@/navigation";
import { MemberType, NetworsType } from "@/global";

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
              margin: "2.5%"
            }}
          ></Image>
        </Link>
      ))}
      {item.whatsapp === '' ? (
        ""
      ) : (
        <Image
          src={`/icons/networks/whatsapp.svg`}
          alt="network"
          width={24}
          height={24}
          style={{
            margin: "auto 2.5%"
          }}
        ></Image>
      )}
    </div>
  );
}
