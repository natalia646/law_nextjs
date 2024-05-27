import Bloks from "@/components/bloks/Bloks";
import DetailsPart from "@/components/forHomePage/DetailsPart";
import MainScreen from "@/components/forHomePage/MainScreen";
import Partners from "@/components/partners/Partners";
import RunningText from "@/components/runningText/RunningText";
import PartServicesForHome from "@/components/services/PartServicesForHome";

export default function HomePage() {
  return (
    <>
      <MainScreen />
      <RunningText />
      <DetailsPart />
      <Bloks />
      <PartServicesForHome />
      <Partners />
    </>
  );
}
