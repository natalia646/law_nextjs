import Question from "./Question";
import { useMessages } from "next-intl";
import { QAType } from "@/global";
import style from "./questions.module.scss";
import { useTranslations } from "next-intl";

export default function Questions() {
  const messeges = useMessages();
  if (!Array.isArray(messeges.Questions)) {
    return [];
  }
  const qaList: QAType[] = messeges.Questions;

  const t = useTranslations("QuestionsBlock");
  return (
    <section className={style.container}>
      <div>
        <h2>{t("commonQ")}</h2>
        <p className={style.text}>{t("description")}</p>
      </div>
      <section>
        {qaList.map((item, id) => {
          return <Question id={id} item={item} key={id} />;
        })}
      </section>
    </section>
  );
}
