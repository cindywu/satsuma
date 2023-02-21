import React from 'react'

export default function color() {
  return (
    <div className={"p-4"}>
      <h1 className={'text-3xl font-medium'}>Color</h1>
      <div className={"py-4 text-neutral-600"}>Orange DAO's color system scales for dynamic and acceissble product design.</div>
      <div className={""}>
        <div className={'text-2xl font-medium'}>Primary</div>
        <div className={'grid'}>
          <ColorCard
            color={'bg-white'}
            borderColor={'border-neutral-100'}
          />
          <ColorCard
            color={'bg-neutral-50'}
            borderColor={'border-neutral-200'}
          />
          <ColorCard
            color={'bg-neutral-100'}
            borderColor={'border-neutral-300'}
          />
          <ColorCard
            color={'bg-neutral-200'}
            borderColor={'border-neutral-400'}
          />
        </div>
      </div>
    </div>
  )
}

function ColorCard({color, borderColor}: {color: string, borderColor: string}) {
  return (
    <div className={'py-4 cursor-pointer hover:bg-neutral-100'}>
      <div className={`${color} + ${borderColor} + border-2 h-14 w-14`}></div>
    </div>

  )
}
