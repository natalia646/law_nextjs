import { useTranslations } from "next-intl";
import LangSwitcher from "./local";
import styled from "./header.module.css";
import Navigation from "./navigation";
import { Link } from "@/navigation";
import getNavigation from "@/functions/getNavigation";
import Image from "next/image";

export default function Header() {
  const t = useTranslations();
  const navigation = getNavigation();

  return (
    <header className={styled.header}>
      <Navigation navigation={navigation} />
      <Link href={`/contacts`} className={styled.button}>
        {t("ContactPage.connect")}
      </Link>
      <LangSwitcher />
    </header>
  );
}
