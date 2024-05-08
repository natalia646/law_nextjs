import { useTranslations, useMessages } from "next-intl";
import { Link } from "@/navigation";
import LangSwitcher from "./local";
import styled from "./header.module.css";
import TedaliniLogo from "../tedaliniLogo/TedaliniLogo";
import ContactButton from "../contactButton/contactButton";

export default function Header() {
  const t = useTranslations("Header");
  const messages = useMessages();
  const keys = Object.keys(messages.Header);

  return (
    <header className={styled.header}>
        <TedaliniLogo />
        {keys.map((link, i) => (
          <Link href={`/${link}`} key={i} className={styled.link}>
            {t(`${link}`)}
          </Link>
        ))}
        <ContactButton />
        <LangSwitcher />
      
    </header>
  );
}
