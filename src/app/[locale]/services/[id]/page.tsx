

export default function Service({ params }: { params: { id: number } }) {
  return (
    <div>
      {params.id}
    </div>
  )
}

