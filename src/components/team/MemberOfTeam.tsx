import { Link } from "@/navigation";
import { MemberType } from "../../global";
import Image from "next/image";
import style from "./memberOfTeam.module.css";

interface Props {
  item: MemberType;
}

export default function MemberOfTeam({ item }: Props) {
  const { id, name, position, description, image, certificates, networks } =
    item;

  return (
    <div className={style.image_block}>
      <Link href={`/team/${id}`}>
        <Image
          src={`/team/${image}`}
          alt={name}
          className={style.image}
          width="700"
          height="700"
        />
      </Link>
    </div>
  );
}
