import MemberOfTeam from "../../../components/team/MemberOfTeam";
import getMembersList from "../../../functions/getMembersList";


export default function TeamPage() {
  const team = getMembersList();
  return (
    <div>
      {team.map((item) => (
        <MemberOfTeam item={item} key={item.id} />
      ))}
    </div>
  );
}
