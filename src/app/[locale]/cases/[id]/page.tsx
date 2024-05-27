import React from 'react'

export default function CasePage({ params }: { params: { id: number } }) {
  return (
    <div>
      {params.id}
    </div>
  )
}
