import React from 'react';

export default function Newsletter() {
  return (
    <div className='bg-[#235951]'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 gap-4 p-6'>
            <div className="text-lg md:pl-8 pl-6 col-span-1 text-white flex flex-col justify-center">
                <h2 className='text-5xl  text-[gold]'>Want to get in touch?</h2>
                <p className='md:text-[1.3rem] md:px-2 text-[0.8rem] text-white'>Request a Callback.</p>
            </div>
            <div className="col-span-1 flex flex-col items-center md:items-center">
                <form action="" className="w-full md:w-4/6 flex flex-col items-center">
                    <input
                        type="tel"
                        placeholder='+91-XXXXXXXXXX'
                        className='p-2 rounded-md m-3 text-center md:text-left w-full max-w-md'
                    />
                    <button
                        type="button"
                        className='bg-black text-white p-3 rounded-md text-sm hover:bg-black/80 w-full max-w-md'
                    >
                        Notify Me!
                    </button>
                </form>
                <div className="text-center items-start">
                    <p className="text-sm text-white">
                        We care about your data. Read our<br />
                        <span className='text-black'>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
