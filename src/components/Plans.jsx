import React from 'react'

export default function Plans() {
  return (
    <div className='bg-white'>
        <h1 className='text-center mt-12 md:text-4xl text-2xl font-bold'>Try Our Cost Effective Plans.</h1>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6 md:p-[5rem] p-8 pt-4">
            <div className="shadow-2xl hover:scale-[1.05] duration-300 rounded-xl text-center">
                <h4 className='font-bold my-12 text-2xl md:pt-0 pt-12'>Graphic Designing</h4>
                <h4 className='font-bold my-12 text-4xl'>$99.99</h4>
                <p className='px-[5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!</p>
                <button type="button" className='bg-[#00df9a] p-[10px] rounded-lg w-[70%] duration-500 my-8 hover:bg-black hover:text-white'>Start Trial</button>
            </div>
            <div className="shadow-2xl hover:scale-[1.05] duration-300 rounded-xl text-center">
                <h4 className='font-bold my-12 text-2xl md:pt-0 pt-12'>Video Editing</h4>
                <h4 className='font-bold my-12 text-4xl'>$109.99</h4>
                <p className='px-[5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!</p>
                <button type="button" className='bg-[#00df9a] p-[10px] rounded-lg w-[70%] duration-500 my-8 hover:bg-black hover:text-white'>Start Trial</button>
            </div>
            <div className="shadow-2xl hover:scale-[1.05] duration-300 rounded-xl text-center">
                <h4 className='font-bold my-12 text-2xl md:pt-0 pt-12'>Web Development</h4>
                <h4 className='font-bold my-12 text-4xl'>$129.99</h4>
                <p className='px-[5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!</p>
                <button type="button" className='bg-[#00df9a] p-[10px] rounded-lg w-[70%] duration-500 my-8 hover:bg-black hover:text-white'>Start Trial</button>
            </div>
        </div>

      
    </div>
  )
}
