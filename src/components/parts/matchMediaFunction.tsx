"use client";
import getServicesList from "@/functions/getServicesList";
import Service from "@/components/services/Service";
import { useEffect, useState } from "react";

export default function ServicesScreenWidtn() {
  const [s1, s2, s3, s4, s5] = getServicesList();
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth === null) {
    return null; 
  }

  return (
    <>
      {screenWidth > 580
        ? [s1, s2, s3, s4, s5].map((item) => (
            <Service item={item} key={item.id} />
          ))
        : [s1, s2, s3].map((item) => <Service item={item} key={item.id} />)}
    </>
  );
}
