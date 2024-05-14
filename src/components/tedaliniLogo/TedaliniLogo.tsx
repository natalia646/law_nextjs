import Image from "next/image";
import { Link } from "@/navigation";

export default function TedaliniLogo() {
  return (
    <Link href={`/`}>
      <Image
        src={"/icons/logo/tedalini.svg"}
        alt="tedalini_logo"
        width={182}
        height={79}
      ></Image>
    </Link>
  );
}
