import { useTranslations } from "next-intl";

export default function getLabel(label: string) {
  const t = useTranslations("ContactPage.form");

  return t(label);
}
