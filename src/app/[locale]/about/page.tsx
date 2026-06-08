import Bloks from "@/components/bloks/Bloks";
import MainScreen from "@/components/forAboutPage/MainScreen";
import PartCertificates from "@/components/parts/certificetes/PartCertificates";
import PartOfTeam from "@/components/parts/team/PartOfTeam";
import { unstable_setRequestLocale } from "next-intl/server";

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainScreen />
      <Bloks />
      <PartOfTeam />
      <PartCertificates/>
    </>
  );
}
