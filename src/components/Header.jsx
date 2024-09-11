import React, { useState } from 'react'
import { AiOutlineAlignRight ,AiOutlineClose} from 'react-icons/ai';
import img2 from '../Assets/logo.jpeg'
import { Link } from 'react-router-dom';


function Header() {
    const [Toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#235951] p-4'>
        <div className="max-w-[1240px] py-2 flex justify-between items-center mx-auto">
            <div className='text-2xl font-bold text-white w-[40%] md:w-[18%]'>
                <a href="/"><img src={img2} alt="" srcset="" /></a>
            </div>
            {Toggle?<AiOutlineClose onClick={()=>setToggle(!Toggle)} className='block md:hidden xl:hidden text-white text-2xl'/>:<AiOutlineAlignRight onClick={()=>setToggle(!Toggle)} className='block md:hidden xl:hidden text-white text-2xl'/>}
            
            
            <ul className='hidden md:flex text-white gap-12'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li>About</li>
                <li className='pr-12'>Contact</li>
            </ul>

            <ul className={`duration-300 md:hidden fixed bg-black/95 h-screen top-[80px] w-full text-white gap-12 ${Toggle? 'left-[0]':'left-[-100%]'}`}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Services</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Header
