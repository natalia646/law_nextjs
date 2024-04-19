import { useTranslations } from "next-intl";

import React from "react";

export default function About() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("About.title")}</h1>
      <h2>{t("Team.description.position")}</h2>
    </div>
  );
}
