import React from 'react'
import img1 from '../Assets/6.jpeg'

export default function Experts() {
    return (
        <div className="mx-auto md:grid grid-cols-3 gap-4 bg-gradient-to-b from-[#235951] to-[#3F6D66] md:py-24">
            <div className="col-span-2 md:p-20 py-10 pl-5 pr-2 flex flex-col justify-center">
                <h1 className="text-[gold] font-bold  text-2xl md:text-3xl">
                    A leading full service intellectual property law firm.
                </h1>
                <p className="my-1 md:text-base text-[13px]">
                    S.S. Advocates is a trusted law firm providing comprehensive Intellectual Property (IP) solutions, including patent drafting, filing, prosecution, and trademark registration. Our services span knock-out patentability searches, infringement assessments, patent monitoring, trademark renewals, IP valuation, and more. We handle national and international filings, ensuring robust protection for your intellectual assets. In addition to IP, we offer expert legal counsel in civil, criminal, and family matters. With a focus on balancing legal pragmatism and commercial realities, S.S. Advocates delivers reliable, professional legal services tailored to each client’s needs.
                </p>
                <button
                    type="button"
                    className="p-1 my-1 rounded-md bg-black text-white w-40 font-bold hover:bg-black/80"
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                    Get Started
                </button>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <img className="h-[50vh] max-w-full object-contain rounded-[400px]" src={img1} alt="" />
            </div>
        </div>
    )
}
