import React from 'react'
import img1 from '../Assets/6.png'

export default function Experts() {
  return (
    <div className='max-w-[1240px] max-auto  md:grid grid-cols-3 mx-auto'>
        <div className="col-span-2 md:p-10 px-10 py-2 flex flex-col justify-center">
            <h1 className='text-[#00df9a] text-bold md:text-xl'>LEARN FROM EXPERTS</h1>
            <p className='my-1 md:text-base sm:text-sm'>Aorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veritatis sint quos numquam, aut ab modi quo incidunt necessitatibus sequi fuga totam laborum quasi asperiores sed quas porro unde doloribus. Veniam, molestiae quas. Illum numquam tenetur reprehenderit.</p>
            <button type="button" className='p-[4px] my-1 rounded-md bg-black text-white w-40'>Get Started</button>
        </div>
        <div className="col-span-1"><img className='p-12' src={img1} alt=""/></div>

    </div>
  )
}
