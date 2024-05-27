import { Link } from "@/navigation";
import React from "react";
import { CaseType } from "@/global";

export default function Case({ id, cases }: { id: number, cases: CaseType[] }) {
    const {title} = cases[id]
    
  return (
    <Link href={`/cases/${id}`}>
      <p>{title}</p>
    </Link>
  );
}
