import React from 'react'
import Image from 'next/image'
import orange from '../public/orange.jpg'

export default function Home() {
  return (
    <div className={"w-screen h-screen grid place-content-center"}>
      <Image
        alt="Orange Image"
        src={orange}
        width={500}
        height={400}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  )
}
