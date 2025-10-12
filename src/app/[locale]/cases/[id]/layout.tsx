import Questions from "@/components/questions/Questions";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Questions />
    </>
  );
}
