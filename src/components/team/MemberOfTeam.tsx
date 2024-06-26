import { Link } from "@/navigation";
import { MemberType } from "../../global";
import style from "./memberOfTeam.module.scss";
import NetworksOfMember from "./NetworksOfMember";

interface Props {
  item: MemberType;
}

export default function MemberOfTeam({ item }: Props) {
  const { id, name, position, image } = item;

  return (
    <div className={style.card}>
      <div className={style.image_block}>
        <Link href={`/team/${id}`} aria-label="Read more about member of team">
          <section
            style={{
              backgroundImage: `url(/team/${image})`,
              backgroundSize: "cover",
            }}
          ></section>
        </Link>
      </div>
      <div className={style.text}>
        <p className={style.h4}>{name}</p>
        <p className={style.position}>{position}</p>
        <NetworksOfMember item={item} />
      </div>
    </div>
  );
}
