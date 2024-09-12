import React from 'react'
import img1 from '../Assets/6.jpeg'

export default function Experts() {
  return (
<div className="mx-auto md:grid grid-cols-3 gap-4 bg-gradient-to-b from-[#235951] to-[#3F6D66] md:py-24">
    <div className="col-span-2 md:p-20 py-10 pl-5 pr-2 flex flex-col justify-center">
        <h1 className="text-[gold] font-bold text-2xl md:text-3xl">
            A leading full service intellectual property law firm.
        </h1>
        <p className="my-1 md:text-base text-[13px]">
            A professionally managed law firm, S.S. Advocates is regularly engaged for thoughtful and reliable IP solutions by its clients. The firm balances commercial realities with legal pragmatism.
        </p>
        <button type="button" className="p-[4px] my-1 rounded-md bg-black text-white w-40 font-bold hover:bg-black/80">
            Get Started
        </button>
    </div>
    <div className="col-span-1 flex items-center justify-center">
        <img className="h-[50vh] max-w-full object-contain rounded-[400px]" src={img1} alt=""/>
    </div>
</div>
  )
}
