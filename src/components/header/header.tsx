import { useTranslations } from "next-intl";
import LangSwitcher from "./local";
import styled from "./header.module.css";
import TedaliniLogo from "../tedaliniLogo/TedaliniLogo";
import Navigation from "./navigation";
import { Link } from "@/navigation";
import getNavigation from "@/functions/getNavigation";

export default function Header() {
  const t = useTranslations();
  const navigation = getNavigation();

  return (
    <header className={styled.header}>
      <TedaliniLogo />
      <Navigation navigation = {navigation}/>
      <Link href={`/contacts`} className={styled.button}>
        {t("ContactPage")}
      </Link>
      <LangSwitcher />
    </header>
  );
}
