import Certificates from "@/components/certificates/Certificates";
import getMembersList from "@/functions/getMembersList";

export default function CertificatesPage() {
  const team = getMembersList();

  return (
    <section>
      {team.map((member) => (
        <Certificates certificates={member.certificates} key={member.id} />
      ))}
    </section>
  );
}
