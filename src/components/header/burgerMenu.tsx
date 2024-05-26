"use client";

import Image from "next/image";
import styled from "./navigation.module.css";

export default function BurgerMenu({
  openMobileMenu,
  setOpenMobile,
}: {
  openMobileMenu: boolean;
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Image
      src={openMobileMenu ? "/icons/close-cross.svg" : "/icons/burger.svg"}
      alt="menu"
      width={35}
      height={35}
      onClick={() => setOpenMobile(!openMobileMenu)}
      className={styled.burger_icon}
    ></Image>
  );
}
