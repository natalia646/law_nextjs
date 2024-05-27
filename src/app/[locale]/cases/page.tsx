import getCasesList from "@/functions/getCasesList";
import Case from "@/components/cases/Case";

export default function CasesPage() {
  const cases = getCasesList();

  return (
    <div>
      {cases.map((item) => (
        <Case id={item.id} />
      ))}
    </div>
  );
}
