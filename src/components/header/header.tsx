import { useTranslations, useMessages } from "next-intl";
import LangSwitcher from "./local";
import styled from "./header.module.css";
import TedaliniLogo from "../tedaliniLogo/TedaliniLogo";
import Navigation from "./navigation";
import { Link } from "@/navigation";


export default function Header() {
  const t = useTranslations();
  const messages = useMessages();
  const keys = Object.keys(messages.Header);

  return (
    <header className={styled.header}>
      <TedaliniLogo />
      <nav className={styled.navigation}>
        {keys.map((link, i) => (
          <Navigation link={link} i={i}>
            {t(`Header.${link}`)}
          </Navigation>
        ))}
      </nav>
      <Link href={`/contacts`} className={styled.button}>{t("ContactUs")}</Link>
      <LangSwitcher />
    </header>
  );
}
