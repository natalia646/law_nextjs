"use client";
import { Link } from "@/navigation";
import styled from "./allHeader.module.css";
import { usePathname } from "next/navigation";
import { NavigationType } from "@/global";

export default function Navigation({
  navigation,
}: {
  navigation: NavigationType[];
}) {
  const path = usePathname();
  const acticvePath = path.slice(4);

  return (
    <nav className={styled.navigation}>
      {navigation.map((item, i) => (
        <Link
          href={`/${item.path}`}
          key={i}
          className={`${styled.link} ${
            acticvePath === item.path ? styled.active : ""
          }`}
        >
          {item.link}
        </Link>
      ))}
    </nav>
  );
}
