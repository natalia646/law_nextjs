import getMembersList from "@/functions/getMembersList";

export default function MemberPage({ params }: { params: { id: number } }) {
  const team = getMembersList();
  const { id } = params;
  return <div>{team[id].name}</div>;
}
