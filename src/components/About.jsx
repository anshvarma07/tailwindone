import React, { useState } from 'react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('patents');

  const tabContent = {
    patents: {
      title: "Patent Services",
      description: "Comprehensive patent solutions for your intellectual property needs",
      items: [
        "Knock out Patentability Search",
        "Infringement Search / Clearance / Freedom to Operate Search",
        "Patent Drafting and Filing",
        "Patent Prosecution",
        "Patent Illustration and Proof Reading",
        "Patent Valuation and Monitoring"
      ]
    },
    trademark: {
      title: "Trademark Services",
      description: "Protecting your brand identity",
      items: [
        "Trademark Search",
        "Trademark Filing & Registration",
        "Trademark Renewal",
        "Trademark Watch",
        "Industrial Design filing and prosecution"
      ]
    },
    other: {
      title: "Additional Legal Services",
      description: "Comprehensive legal solutions for various needs",
      items: [
        "Copyright filing and prosecution",
        "Trade Secret Protection",
        "Civil Matters",
        "Criminal Matters",
        "Family Disputes"
      ]
    },
    expertise: {
      title: "Our Expertise",
      description: "Why choose SS Advocates?",
      items: [
        "Experienced team of legal professionals",
        "Specialization in intellectual property law",
        "Comprehensive services covering patents, trademarks, and more",
        "Tailored solutions for each client's unique needs",
        "Strong track record of successful outcomes"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#235951] flex items-center justify-center p-4 md:p-8">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl max-w-7xl w-full p-6 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] text-center mb-6">About SS Advocates</h1>
        <p className="text-gray-200 text-center mb-8 text-lg">
          SS Advocates is a leading law firm specializing in intellectual property law and various other legal services. 
          With our team of experienced professionals, we provide comprehensive legal solutions to protect and promote our clients' interests.
        </p>
        
        <div className="bg-white bg-opacity-5 rounded-xl overflow-hidden">
          <div className="flex flex-wrap bg-[#1d4b45] p-1">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-white py-3 px-4 text-sm md:text-base transition-colors duration-300 flex items-center justify-center space-x-2
                  ${activeTab === tab
                    ? 'bg-white bg-opacity-20 font-semibold'
                    : 'hover:bg-white hover:bg-opacity-10'}`}
              >
                {tabContent[tab].icon}
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </button>
            ))}
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#FFD700] mb-3">{tabContent[activeTab].title}</h2>
            <p className="text-gray-300 mb-4">{tabContent[activeTab].description}</p>
            <ul className="space-y-3">
              {tabContent[activeTab].items.map((item, index) => (
                <li key={index} className="bg-white bg-opacity-10 p-4 rounded-lg text-gray-200 hover:bg-opacity-15 transition-colors duration-300 flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFD700] flex items-center justify-center text-[#235951] font-bold">
                    {index + 1}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;