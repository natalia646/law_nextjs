import { useTranslations, useMessages } from "next-intl";
import LangSwitcher from "./local";
import styled from "./header.module.css";
import TedaliniLogo from "../tedaliniLogo/TedaliniLogo";
import ContactButton from "../contactButton/ContactButton";
import NavigationInHeader from "./navigation";

export default function Header() {
  const t = useTranslations("Header");
  const messages = useMessages();
  const keys = Object.keys(messages.Header);

  return (
    <header className={styled.header}>
      <TedaliniLogo />
      {keys.map((link, i) => (
        <NavigationInHeader link={link} i={i}>
          {t(`${link}`)}
        </NavigationInHeader>
      ))}
      <ContactButton />
      <LangSwitcher />
    </header>
  );
}
