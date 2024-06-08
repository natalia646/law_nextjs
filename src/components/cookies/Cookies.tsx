"use client";
import Image from "next/image";
import style from "./cookies.module.scss";
import CookiesText from "./CookiesText";
import { useState } from "react";

export default function Cookies() {
  const [click, setCkick] = useState(true);

  return (
    <div className={click? style.container : style.none}>
      <Image
        src={"/icons/cookies.svg"}
        alt="cookies"
        width={40}
        height={40}
      ></Image>
      <CookiesText />
      <Image
        src={"/icons/close-cross.svg"}
        alt="close"
        width={30}
        height={30}
        onClick={() => setCkick(false)}
        className={style.close}
      ></Image>
    </div>
  );
}
