import { Link } from "@/navigation";
import {MemberType} from '../../global'

interface Props {
    item: MemberType;
  }

export default function MemberOfTeam({item} : Props) {

  return (
    <Link href={`/team/${item.id}`}>{item.name} </Link>
  )
}
