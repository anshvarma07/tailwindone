import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#2699fb]'>
        <div className='max-w-[1240px] md:grid grid-cols-3 mx-auto'>
            <div className="text-lg md:pl-8 pl-6 pt-6 col-span-2 text-white flex flex-col justify-center">
                <h2 className='md:text-5xl text-[1.6rem]'>Want to learn latest IT skills?</h2>
                <p className='md:text-[1rem] md:px-2 text-[0.8rem] text-black/80'>Sign Up to our Newsletter to stay updated.</p>
            </div>
            <div className="text-lg col-span-1 md:py-12 pl-3 mt-3">
                <form action="">
                    <input type="email" placeholder='email@gmail.com' className= 'p-2 rounded-md m-3 md:w-4/6 w-3/6 text-center md:text-left'/>
                    <button type="button" className='bg-black text-white p-3 rounded-md text-sm hover:bg-black/80'>Notify Me!</button>
                </form>
                <div className="text-left p-3 pt-0">
                    <p className="text-sm text-white">We care about your data. Read our<br/><span className='text-black'>Privacy Policy</span></p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
