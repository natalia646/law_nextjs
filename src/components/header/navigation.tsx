"use client";
import { Link } from "@/navigation";
import styled from "./navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation({
  link,
  i,
  children,
}: {
  link: string;
  i: number;
  children: string;
}) {
  const path = usePathname();
  const acticvePath = path.slice(4);

  return (
      <Link
        href={`/${link}`}
        key={i}
        className={`${styled.link} ${
          acticvePath === link ? styled.active : ""
        }`}
      >
        {children}
      </Link>
  );
}
