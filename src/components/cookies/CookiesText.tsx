import { useTranslations } from "next-intl";
export default function CookiesClick() {
  const t = useTranslations();

  return <p>{t("CookiesMessage")}</p>;
}
