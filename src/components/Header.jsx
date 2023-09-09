import React from 'react'
import { AiOutlineAlignRight } from 'react-icons/ai';

function Header() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className="max-w-[1240] py-2 flex justify-between items-center mx-auto">
            <div className='text-2xl font-bold'>
                Ansh Varma
            </div>
            <AiOutlineAlignRight className='block md:hidden xl:hidden'/>
            <ul className='hidden md:flex text-white gap-12'>
                <li>Home</li>
                <li>Company</li>
                <li>Resource</li>
                <li>About</li>
                <li className='pr-12'>Contact</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Header
