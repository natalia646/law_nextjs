import { useTranslations } from "next-intl";
import styled from "./ContactButton.module.css";
import { Link } from "@/navigation";

export default function ContactButton() {
  const t = useTranslations();

  return (
    <Link href={`/contacts`} className={styled.button}>
      {t("ContactPage.connect")}
    </Link>
  );
}
