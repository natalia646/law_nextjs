import { useTranslations } from "next-intl";

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("TeamPage");

  return (
    <div>
      <h2>{t("our-team")}</h2>
      {children}
    </div>
  );
}
