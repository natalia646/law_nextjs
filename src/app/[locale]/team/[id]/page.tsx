// 'use client'

import getMembersList from "@/functions/getMembersList";
import Image from "next/image";
import styled from "./member.module.css";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function MemberPage({ params }: { params: { id: number } }) {
  const team = getMembersList();
  const { id } = params;
  const t = useTranslations("MemberPage");
  const { name, position, description, image, certificates, networks } =
    team[id];

  return (
    <div>
      <p>{t("name")}</p>
      <p>{name}</p>

      <p>{t("position")}</p>
      <p>{position}</p>

      <p>{t("description")}</p>
      <p>{description}</p>

      <p>{t("networks")}</p>
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

      <Image
        src={`/team/${image}`}
        alt={name}
        className={styled.image}
        width="700"
        height="700"
      />
      {/* <div>
        {certificates.map((item) => (
          <Image
            src={`/certificates/${item}`}
            alt="Certificate"
            width={500}
            height={300}
          />
        ))}
      </div> */}
    </div>
  );
}
