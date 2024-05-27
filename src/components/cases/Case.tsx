import { Link } from "@/navigation";
import React from "react";


export default function Case({ id }: { id: number }) {
  return (
    <Link href={`/cases/${id}`}>
      <p>{id}</p>
    </Link>
  );
}
