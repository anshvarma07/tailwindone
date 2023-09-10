import React from 'react'

export default function Newsletter() {
  return (
    <div className='h-[200px] bg-[#2699fb]'>
        <div className='max-w-[1240px] grid grid-cols-3 mx-auto border border-black'>
            <div className="text-lg col-span-2 border border-blue-100 text-white flex flex-col justify-center">
                <h2 className=''>Want to learn latest IT skills?</h2>
                <p>Sign Up to our Newsletter to stay updated.</p>
            </div>
            <div className="text-lg col-span-1 border border-blue-200">
                <form action="">
                    <input type="text" placeholder='Enter email.' className= 'p-2 rounded-md m-3 w-3/6'/>
                    <button type="button" className='bg-black text-white p-3 rounded-md text-sm'>Notify Me!</button>
                </form>
                <div className="px-3">
                    <p className="text-sm text-white">We care about your data. Read our<br/><span className='text-black'>Privacy Policy</span></p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
