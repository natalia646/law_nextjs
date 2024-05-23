import Bloks from "@/components/bloks/Bloks";
import DetailsPart from "@/components/forHomePage/DetailsPart";
import MainScreen from "@/components/forHomePage/MainScreen";
import RunningText from "@/components/runningText/RunningText";
import PartServicesForMain from "@/components/services/PartServicesForMain";

export default function HomePage() {
  return (
    <>
      <MainScreen />
      <RunningText />
      <DetailsPart/>
      <Bloks/>
      <PartServicesForMain/>
    </>
  );
}
