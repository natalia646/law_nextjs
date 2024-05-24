import { useTranslations } from "next-intl";
import style from './member.module.scss'

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("TeamPage");

  return (
    <div>
      <h2 className={style.title}>{t("our-team")}</h2>
      {children}
    </div>
  );
}
