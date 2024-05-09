"use client";
import { Link } from "@/navigation";
import styled from "./navigation.module.css";

export default function NavigationInHeader({
  link,
  i,
  children,
}: {
  link: string;
  i: number;
  children: string;
}) {
  return (
    <Link href={`/${link}`} key={i} className={styled.link}>
      {children}
    </Link>
  );
}
