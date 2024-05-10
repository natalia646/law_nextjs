// import { useTranslations } from "next-intl";
// import getServicesList from "@/functions/getServicesList";
// import Service from "@/components/services/Service";
// import servicesStyled from "../../app/[locale]/services/services.module.css";
// import serviceStyled from "./service.module.css";
// import styled from "./partServices.module.css";
// import Image from "next/image";
// import { Link } from "@/navigation";

// export default function PartServicesForMain() {
//   const t = useTranslations("Main");
//   const [s1, s2, s3, s4, s5] = getServicesList();

//   return (
//     <article className={styled.services_container}>
//       <section className={`${servicesStyled.links} ${styled.total_block}`}>
//         <div className={styled.text}>
//           <h2>{t("OurServices.title")}</h2>
//           <p>{t("OurServices.text")}</p>
//         </div>
//         {[s1, s2, s3, s4, s5].map((item) => (
//           <Service item={item} key={item.id} />
//         ))}
//         <div className={serviceStyled.block}>
//           <Image
//             src={"/icons/blue-arrow.svg"}
//             alt="arrow"
//             width={60}
//             height={20}
            
//           ></Image>
//           <Link href={'/services'} className={serviceStyled.link}>{t("OurServices.all-services")}</Link>
//         </div>
//         <section className={styled.last_block}></section>
//       </section>
//     </article>
//   );
// }
