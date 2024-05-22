import DetailsPart from "@/components/homePage/DetailsPart";
import MainScreen from "@/components/homePage/MainScreen";
import RunningText from "@/components/runningText/RunningText";

export default function HomePage() {
  return (
    <>
      <MainScreen />
      <RunningText />
      <DetailsPart/>
    </>
  );
}
