import { useTranslations } from "next-intl";

import React from "react";

export default function About() {
  const t = useTranslations();

  return (
    <div>
      <h2>{t("Team.name")}</h2>
    </div>
  );
}
