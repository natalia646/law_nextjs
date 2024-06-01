import Certificates from "@/components/certificates/Certificates";
import getMembersList from "@/functions/getMembersList";
import style from "./certificates.module.css";

export default function CertificatesPage() {
  const team = getMembersList();

  return (
    <section className={style.container}>
      {team.map((member) => (
        <Certificates certificates={member.certificates} key={member.id} />
      ))}
    </section>
  );
}
