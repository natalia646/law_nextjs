import getMembersList from "@/functions/getMembersList";
import Image from "next/image";
import styled from "./member.module.css";
import { Link } from "@/navigation";

export default function MemberPage({ params }: { params: { id: number } }) {
  const team = getMembersList();
  const { id } = params;
  const {
    name,
    position,
    description,
    image,
    certificates,
    whatsapp,
    networks,
  } = team[id];

  return (
    <div>
      <h2>{name}</h2>
      <p>{position}</p>
      <p>{description}</p>
      <Image
        src={`/team/${image}`}
        alt={name}
        className={styled.image}
        width="700"
        height="700"
      />
      <div>
        {networks.map((item) => (
          <Link href={item.link} target="_blank">
            <Image
              src={`/icons/networks/${item.icon}.svg`}
              alt="network"
              width={40}
              height={40}
            ></Image>
          </Link>
        ))}
        {team[id].whatsapp === "" ? (
          ""
        ) : (
          <Image
            src={`/icons/networks/whatsapp.svg`}
            alt="network"
            width={40}
            height={40}
          ></Image>
        )}
      </div>

      <div>
        {certificates.map((item) => (
          <Image
            src={`/certificates/${item}`}
            alt="Certificate"
            width={500}
            height={300}
          />
        ))}
      </div>
    </div>
  );
}
