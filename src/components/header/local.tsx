'use client'

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";


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
    <select defaultValue={localActive} onChange={changeSelect} disabled={isPending}>
      <option value="en">EN</option>
      <option value="uk">UA</option>
      <option value="ru">RU</option>
    </select>
  );
}
