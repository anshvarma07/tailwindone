import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Assume these imports are correct and the images are in the right location
import img1 from "../Assets/200.png";
import img2 from "../Assets/201.jpg";
import img3 from "../Assets/202.jpeg";
import img4 from "../Assets/203.jpg";
import img5 from "../Assets/204.jpg";
import img6 from "../Assets/205.jpg";
import img7 from "../Assets/206.webp";

const ServiceCard = ({ title, image, description, onNavigate }) => (
    <div className="shadow-2xl hover:scale-105 bg-white transition-transform duration-300 rounded-xl text-center p-6">
        <h4 className='font-bold text-2xl md:text-3xl mb-4'>{title}</h4>
        <div className="flex justify-center mb-4">
            <img src={image} className="w-[70%] h-48 object-cover rounded-lg" alt={title} />
        </div>
        <p className='text-gray-600 mb-6 px-4 h-24 overflow-hidden'>
            {description}
        </p>
        <button 
            onClick={() => onNavigate('/services')} 
            className='bg-[#235951] text-white px-6 py-3 rounded-md font-bold hover:bg-[#1d4b45] transition-colors duration-300'
        >
            Know More
        </button>
    </div>
);

const Plans = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    const services = [
        {
            title: "Patent Services",
            image: img1,
            description: "Protect your inventions and innovations with our comprehensive patent services. We guide you through the entire process, from patent search to filing and prosecution."
        },
        {
            title: "Trademark Services",
            image: img2,
            description: "Safeguard your brand identity with our trademark services. We handle trademark searches, registration, and enforcement to protect your valuable business assets."
        },
        {
            title: "Copyright",
            image: img3,
            description: "Secure your creative works with our copyright services. We assist in registering and protecting your original literary, musical, dramatic, and artistic creations."
        },
        {
            title: "Trade Secret",
            image: img4,
            description: "Preserve your competitive edge with our trade secret protection strategies. We help you identify, secure, and enforce your confidential business information."
        },
        {
            title: "Civil Matters",
            image: img5,
            description: "Navigate complex civil litigation with our experienced team. We represent clients in various disputes, including contract, property, and tort cases."
        },
        {
            title: "Criminal Matters",
            image: img6,
            description: "Defend your rights with our skilled criminal defense attorneys. We provide robust representation in all types of criminal cases, from misdemeanors to felonies."
        },
        {
            title: "Family Disputes",
            image: img7,
            description: "Find resolution in family matters with our compassionate approach. We handle divorce, child custody, alimony, and other family law issues with sensitivity and expertise."
        }
    ];

    return (
        <div className='pt-[70px] bg-gradient-to-b from-[#235951] to-[#3F6D66]' id="services">
            <h1 className='text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 mb-2 drop-shadow-lg'>
                Services We Offer
            </h1>
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} onNavigate={handleNavigation} />
                ))}
            </div>
        </div>
    );
};

export default Plans;