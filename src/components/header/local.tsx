"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
// import styled from "./local.module.css";
import styled from "./allHeader.module.css";

export default function LangSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      router.replace(`/${e.target.value}` + pathname.slice(3));
    });
  };

  return (
    <select
      id="language"
      defaultValue={localActive}
      onChange={changeSelect}
      disabled={isPending}
      className={styled.select}
    >
      <option value="en">EN</option>
      <option value="uk">UA</option>
      <option value="ru">RU</option>
    </select>
  );
}
