import Image from "next/image";
import { Link } from "@/navigation";

export default function TedaliniLogo() {
  return (
    <Link href={`/`}>
      <Image
        src={"/icons/logo/tedalini.svg"}
        alt="tedalini_logo"
        width={135}
        height={32}
      ></Image>
    </Link>
  );
}
