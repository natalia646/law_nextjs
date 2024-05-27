import Bloks from "@/components/bloks/Bloks";
import DetailsPart from "@/components/forHomePage/DetailsPart";
import MainScreen from "@/components/forHomePage/MainScreen";
import Partners from "@/components/partners/Partners";
import RunText from "@/components/runningText/RunText";

import PartServicesForHome from "@/components/services/PartServicesForHome";

export default function HomePage() {
  return (
    <>
      <MainScreen />
      <RunText />
      <DetailsPart />
      <Bloks />
      <PartServicesForHome />
      <Partners />
    </>
  );
}
