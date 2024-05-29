import getCasesList from "@/functions/getCasesList";
import Case from "@/components/cases/Case";
import style from "./cases.module.scss";

export default function CasesPage() {
  const cases = getCasesList();

  return (
    <div className={style.container}>
      {cases.map((item) => (
        <Case id={item.id} title = {item.title} key={item.id}/>
      ))}
    </div>
  );
}
