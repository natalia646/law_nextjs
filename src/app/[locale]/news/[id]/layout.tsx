// import type { Metadata } from "next";
// import { getMessages } from "next-intl/server";
// import { NewsType } from "@/global";


// export async function generateMetadata({
//   params,
// }: {
//   params: { id: number };
// }): Promise<Metadata> {
//   const messages = await getMessages();
//   const { id } = params;
//   if (!Array.isArray(messages.Cases)) {
//     return {};
//   }
//   const casesList: NewsType[] = messages.Cases;

//   return {
//     title: "Tedalini - " + casesList[id].title,
//     description: casesList[id].title,
//   };
// }

export default function ServiceLayout({
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
