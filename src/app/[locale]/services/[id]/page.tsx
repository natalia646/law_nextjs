import ServicesMessages from "@/components/servises/servicesMessages"

export default function SpecificService({ params }: { params: { id: number } }) {

  const services = ServicesMessages()
  const service = services.find((item : any) => item.id === params.id)

  return (
    <div>

    </div>
  )
}
