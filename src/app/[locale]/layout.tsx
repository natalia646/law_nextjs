import Header from "@/components/header/header";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../app/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Cookies from "@/components/cookies/Cookies";
import ButtonTop from "@/components/buttonTop/ButtonTop";
import Contacts from "@/components/form/Contacts";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tedalini Consalting LTD",
  description: "Support: from business idea to full implementation",
  verification: {
    google: process.env.GOOGLE_VERIFICATION
  }
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} className={inter.className}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H3XE7VK0Z3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H3XE7VK0Z3');
        `}
      </Script>
      <body>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <Header />
        <main>
          <NextIntlClientProvider messages={messages}>
            <Cookies />
            {children}
            <ButtonTop />
            <Contacts />
          </NextIntlClientProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
