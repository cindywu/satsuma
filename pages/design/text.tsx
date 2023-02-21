import React from 'react'

export default function Text() {
  return (
    <div className={"p-4"}>
    <div className={"text-3xl font-medium"}>Text</div>
    <div className={"py-4 text-neutral-600"}>Orange DAO's text sizes for displaying text.</div>
    <TextCard textSize={"text-5xl"}/>
    <TextCard textSize={"text-4xl"}/>
    <TextCard textSize={"text-3xl"}/>
    <TextCard textSize={"text-2xl"}/>
    <TextCard textSize={"text-xl"}/>
    <TextCard textSize={"text-md"}/>
    <TextCard textSize={"text-sm"}/>
    <TextCard textSize={"text-xs"}/>
    </div>
  )
}

function TextCard({textSize}: {textSize: any}) {
  return (
    <div className={`${textSize} + py-4`}>
      Make something people want.
    </div>
  )
}
