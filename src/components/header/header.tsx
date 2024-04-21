import { useTranslations, useMessages } from "next-intl";
import { Link } from "@/navigation";
import LangSwitcher from "./local";

export default function Header() {
  const t = useTranslations("Header");
  const messages = useMessages();
  const keys = Object.keys(messages.Header);

  return (
    <header>
      {keys.map((link, i) => (
        <Link href={`/${link}`} key={i}>{t(`${link}`)}</Link>
      ))}
      <LangSwitcher/>
    </header>
  );
}
