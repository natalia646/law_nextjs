"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "./allHeader.module.scss";

export default function BurgerMenu() {
  const [closed, setClosed] = useState(true);

  return (
    <div>
      <Image
        src={closed ? "/icons/burger.svg" : "/icons/close-cross.svg"}
        alt="menu"
        width={45}
        height={45}
        onClick={() => setClosed(!closed)}
        className={styled.burger_icon}
      ></Image>
      {!closed }
    </div>
  );
}
