import { ServiceOfferType } from "@/global";

export default function TopBlocks({ offer }: { offer: ServiceOfferType[] }) {
  return (
    <div>
      {offer.map((item, i) => (
        <section key={i}>
          <p>{item.bolt}</p>
          <p>{item.desc}</p>
        </section>
      ))}
    </div>
  );
}
