import React from "react";
import getCasesList from "@/functions/getCasesList";

export default function CasePage({ params }: { params: { id: number } }) {
  const cases = getCasesList();
  const { title, client, task, decision, result, summary } = cases[params.id];
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
