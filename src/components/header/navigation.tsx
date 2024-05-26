"use client";
import { Link } from "@/navigation";
import styled from "./navigation.module.css";
import { usePathname } from "next/navigation";
import { NavigationType } from "@/global";
import { useState } from "react";
import BurgerMenu from "./burgerMenu";

export default function Navigation({
  navigation,
}: {
  navigation: NavigationType[];
}) {
  const path = usePathname();
  const acticvePath = path.slice(4);
  const [openMobileMenu, setOpenMobile] = useState(false);

  return (
    <>
      <nav
        className={`${openMobileMenu ? styled.mobile_menu : styled.navigation}`}
      >
        {navigation.map((item, i) => (
          <Link
            href={`/${item.path}`}
            key={i}
            onClick={() => setOpenMobile(false)}
            className={`${styled.link} ${
              acticvePath === item.path ? styled.active : ""
            }`}
          >
            {item.link}
          </Link>
        ))}
      </nav>
      <BurgerMenu
        openMobileMenu={openMobileMenu}
        setOpenMobile={setOpenMobile}
      />
    </>
  );
}
