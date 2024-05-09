import Image from "next/image";
import { Link } from "@/navigation";
import { Gemunu_Libre } from "next/font/google";
import styled from "./TedaliniLogo.module.css";


const libre_font = Gemunu_Libre({
  weight: "600",
  subsets: ["latin"],
});

export default function TedaliniLogo () {
  return (
    <Link href={`/`} className={`${styled.logo} ${libre_font.className}`}>
      <Image
        src={"/icons/logo/tedalini.svg"}
        alt="tedalini_logo"
        width={32}
        height={32}
        className={styled.image}
      ></Image>
      TEDALINI
    </Link>
  );
}
