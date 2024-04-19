import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "uk", "ru"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/${locale}.json`)).default,
      ...(await import(`../messages/${locale}/cases.json`)).default,
      ...(await import(`../messages/${locale}/services.json`)).default,
      ...(await import(`../messages/${locale}/team.json`)).default,
    },
  };
});
