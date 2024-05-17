import { useTranslations, useMessages } from "next-intl";
import LangSwitcher from "./local";
import styled from "./allHeader.module.scss";
import TedaliniLogo from "../tedaliniLogo/TedaliniLogo";
import Navigation from "./navigation";
import { Link } from "@/navigation";
import BurgerMenu from "./burgerMenu";

export default function Header() {
  const t = useTranslations();
  const messages = useMessages();
  const keys = Object.keys(messages.Header);

  return (
    <header className={styled.header}>
      <TedaliniLogo />

      <div className={styled.navigation}>
        <nav className={styled.links}>
          {keys.map((link, i) => (
            <Navigation link={link} i={i}>
              {t(`Header.${link}`)}
            </Navigation>
          ))}
        </nav>
        <Link href={`/contacts`} className={styled.button}>
          {t("ContactPage")}
        </Link>
      </div>

      <LangSwitcher />

      <BurgerMenu />
    </header>
  );
}
