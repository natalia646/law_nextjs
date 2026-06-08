import Bloks from "@/components/bloks/Bloks";
import DetailsPart from "@/components/forHomePage/DetailsPart";
import MainScreen from "@/components/forHomePage/MainScreen";
import Partners from "@/components/partners/Partners";
import Questions from "@/components/questions/Questions";
import RunText from "@/components/runningText/RunText";
import PartServicesForHome from "@/components/parts/services/PartServicesForHome";
import { unstable_setRequestLocale } from "next-intl/server";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainScreen />
      <RunText />
      <DetailsPart />
      <Bloks />
      <PartServicesForHome />
      <Partners />
      <Questions />
    </>
  );
}
