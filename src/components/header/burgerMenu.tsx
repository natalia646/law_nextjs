'use client'

import Image from "next/image";
import { useState } from "react";
import styled from './allHeader.module.css'

export default function BurgerMenu() {
  const [closed, setClosed] = useState(true);
  

  return (
    <Image
      src={closed ? "/icons/burger.svg" : "/icons/close-cross.svg"}
      alt="menu"
      width={35}
      height={35}
      onClick={() => setClosed(!closed)}
      className={styled.burger_icon}
    ></Image>
  );
}
