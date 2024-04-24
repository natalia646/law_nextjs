import Service from "@/components/services/Service";
import styled from "./services.module.css";
import getServicesList from "@/functions/getServicesList";

export default function ServicesPage() {
  const services = getServicesList()

  return (
    <div className={styled.links}>

      {services.map((item) => (
        <Service item={item}/>
      ))}
    </div>
  );
}
