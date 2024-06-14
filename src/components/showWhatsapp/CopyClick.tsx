"use client";

import Image from "next/image";
import { useState } from "react";

export default function CopyClick({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const [isCoped, setIsCoped] = useState(false);

  return (
    <>
      <Image
        src={`/icons/networks/whatsapp.svg`}
        alt="network"
        width={27}
        height={27}
        style={{
          margin: "0.5rem 0.3rem",
          cursor: "pointer",
        }}
        onClick={() => setIsCoped(!isCoped)}
      ></Image>

      <p
        style={
          isCoped ? { display: "block", margin: "1% 1%" } : { display: "none" }
        }
      >
        {whatsappNumber}
      </p>
    </>
  );
}
