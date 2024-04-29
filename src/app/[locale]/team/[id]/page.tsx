
import getMembersList from "@/functions/getMembersList";
import Image from "next/image";
import styled from './member.module.css'

export default function MemberPage({ params }: { params: { id: number } }) {

  const team = getMembersList();
  const { id } = params;
  const {name, position, description, image } = team[id];

  return (
    <div>
      <h2>{name}</h2>
      <p>{position}</p>
      <p>{description}</p>
      <Image src= {`/team/${image}`} alt={name} className={styled.image} width="700" height="700"/>
    </div>
  );
}
