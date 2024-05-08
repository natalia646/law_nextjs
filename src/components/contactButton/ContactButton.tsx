import { useTranslations } from "next-intl";
import styled from './ContactButton.module.css'

export default function ContactButton() {
  const t = useTranslations();

  return <button className={styled.button}>{t("ContactUs")}</button>;
}
