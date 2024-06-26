import { getMessages } from "next-intl/server";
import { MetaDataType } from "@/global";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const messages = await getMessages();
    if (!Array.isArray(messages.MetaData)) {
      return {};
    }
    const metaData: MetaDataType[] = messages.MetaData;
    const meta = metaData.find((item) => item.page === 'about');
  
    if (!meta?.title) {
      return {
        title: "Tedalini Consulting LTD",
      };
    }
    return {
      title: meta.title,
      description: meta.description,
    };
  }

  export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        {children}
      </>
    );
  }