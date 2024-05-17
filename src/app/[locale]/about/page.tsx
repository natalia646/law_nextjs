import { useTranslations } from "next-intl";
import TeamPage from "../team/page";
import { Link } from "@/navigation";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <TeamPage/>
      <Link href={`/team`}>{t("all-team")}</Link>
      {/* <Link href={`/certificates`}>certificates</Link> */}
    </div>
  );
}
