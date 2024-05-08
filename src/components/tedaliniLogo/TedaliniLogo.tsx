import Image from "next/image";
import { Link } from "@/navigation";
import { Gemunu_Libre } from "next/font/google";
import styled from "./TedaliniLogo.module.css";

const libre_font = Gemunu_Libre({
  weight: "600",
  subsets: ["latin"],
});

export default function TedaliniLogo() {
  return (
    <Link href={`/`} className={`${styled.logo} ${libre_font.className}`}>
      <Image
        src={"/icons/logo/tedalini.svg"}
        alt="tedalini_logo"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={32}
        height={32}
        className={styled.image}
      ></Image>
      TEDALINI
    </Link>
  );
}
