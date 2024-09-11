import React from 'react';
import Modal from "./Modal";
import Modal2 from "./Modal2";
import img1 from "../Assets/200.jpg";
import img2 from "../Assets/201.jpg";
import img3 from "../Assets/202.jpg";
import img4 from "../Assets/203.jpg";
import img5 from "../Assets/204.jpg";
import img6 from "../Assets/205.jpeg";
import img7 from "../Assets/206.jpg";

export default function Plans() {
    return (
        <div className='bg-white py-12'>
            <h1 className='text-center text-2xl md:text-4xl font-bold mb-12'>
                Services We Offer
            </h1>
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6 md:p-[5rem] p-8 flex flex-wrap justify-center">
                <div className="shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl text-center p-6">
                    <h4 className='font-bold text-2xl md:text-3xl mb-4'>Patent Services</h4>
                    <div className="flex justify-center mb-4">
                        <img src={img1} className="w-1/2 object-contain" alt="Patent Services" />
                    </div>
                    <p className='text-gray-600 mb-6 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!
                    </p>
                    <button type="button">
                        <Modal Name="Services we Offer" />
                    </button>
                </div>
                <div className="shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl text-center p-6">
                    <h4 className='font-bold text-2xl md:text-3xl mb-4'>Trademark Services</h4>
                    <div className="flex justify-center mb-4">
                        <img src={img2} className="w-1/2 object-contain" alt="Patent Services" />
                    </div>
                    <p className='text-gray-600 mb-6 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!
                    </p>
                    <button type="button">
                        <Modal2 Name="Services we Offer"/>
                    </button>
                </div>
                <div className="shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl text-center p-6">
                    <h4 className='font-bold text-2xl md:text-3xl mb-4'>Copyright</h4>
                    <div className="flex justify-center mb-4">
                        <img src={img3} className="w-1/2 object-contain" alt="Patent Services" />
                    </div>
                    <p className='text-gray-600 mb-6 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!
                    </p>
                    <button type="button" className='bg-[#00DF9A] px-[20px] py-[10px] text-lg text-sm font-bold text-[#235951] rounded-md text-black mt-5'>
                        KNOW MORE
                    </button>
                </div>
                <div className="shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl text-center p-6">
                    <h4 className='font-bold text-2xl md:text-3xl mb-4'>Trade Secret</h4>
                    <div className="flex justify-center mb-4">
                        <img src={img4} className="w-1/2 object-contain" alt="Patent Services" />
                    </div>
                    <p className='text-gray-600 mb-6 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!
                    </p>
                    <button type="button" className='bg-[#00DF9A] px-[20px] py-[10px] text-lg text-sm font-bold text-[#235951] rounded-md text-black mt-5'>
                        KNOW MORE
                    </button>
                </div>
                <div className="shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl text-center p-6">
                    <h4 className='font-bold text-2xl md:text-3xl mb-4'>Civil Matters</h4>
                    <div className="flex justify-center mb-4">
                        <img src={img5} className="w-1/2 object-contain" alt="Patent Services" />
                    </div>
                    <p className='text-gray-600 mb-6 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!
                    </p>
                    <button type="button" className='bg-[#00DF9A] px-[20px] text-sm py-[10px] text-lg  text-[#235951] rounded-md text-black mt-5'>
                        KNOW MORE
                    </button>
                </div>
                <div className="shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl text-center p-6">
                    <h4 className='font-bold text-2xl md:text-3xl mb-4'>Criminal Matters</h4>
                    <div className="flex justify-center mb-4">
                        <img src={img6} className="w-1/2 object-contain" alt="Patent Services" />
                    </div>
                    <p className='text-gray-600 mb-6 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!
                    </p>
                    <button type="button" className='bg-[#00DF9A] px-[20px] py-[10px] text-lg text-sm text-[#235951] rounded-md text-black mt-5'>
                        KNOW MORE
                    </button>
                </div>
                <div className="shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl text-center p-6">
                    <h4 className='font-bold text-2xl md:text-3xl mb-4'>Family Disputes</h4>
                    <div className="flex justify-center mb-4">
                        <img src={img7} className="w-1/2 object-contain" alt="Patent Services" />
                    </div>
                    <p className='text-gray-600 mb-6 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente praesentium dolore accusantium rem impedit illum commodi ab! Aspernatur, odio!
                    </p>
                    <button type="button" className='bg-[#00DF9A] px-[20px] py-[10px] text-lg text-sm  text-[#235951] rounded-md text-black mt-5'>
                        KNOW MORE
                    </button>
                </div>
            </div>
        </div>
    );
}
