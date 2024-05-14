'use client'

import Image from "next/image";
import { useState } from "react";

export default function BurgerMenu() {
  const [closed, setClosed] = useState(true);

  return (
    <Image
      src={closed ? "/icons/burger.svg" : "/icons/close-cross.svg"}
      alt="menu"
      width={45}
      height={45}
      onClick={() => setClosed(!closed)}
    ></Image>
  );
}
