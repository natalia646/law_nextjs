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
import Head from "next/head";
import { getMessages } from "next-intl/server";
import { MetaDataType } from "@/global";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages();
  if (!Array.isArray(messages.MetaData)) {
    return {};
  }
  const metaData: MetaDataType[] = messages.MetaData;
  const meta = metaData.find((item) => item.page === 'home');

  if (!meta?.title) {
    return {
      title: "Tedalini Consalting LTD",
    };
  }
  return {
    title: meta.title,
    description: meta.description,
    verification: {
      google: process.env.GOOGLE_VERIFICATION,
    },
  };
}

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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PM6M393S');
            `,
          }}
        />
      </Head>
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PM6M393S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
