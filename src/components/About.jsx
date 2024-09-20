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
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl max-w-4xl w-full p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold  text-[#235951] text-center mb-6">About SS Advocates</h1>
        <p className="text-gray-700 text-center mb-8">
          SS Advocates is a leading law firm specializing in intellectual property law and various other legal services. 
          With our team of experienced professionals, we provide comprehensive legal solutions to protect and promote our clients' interests.
        </p>

        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="flex flex-wrap bg-[#235951] p-1">
            {Object.keys(tabContent).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-white py-2 px-4 text-sm md:text-base transition-colors duration-300
                  ${activeTab === tab 
                    ? 'bg-white bg-opacity-20 font-semibold' 
                    : 'hover:bg-white hover:bg-opacity-10'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#235951] mb-3">{tabContent[activeTab].title}</h2>
            <p className="text-gray-600 mb-4">{tabContent[activeTab].description}</p>
            <ul className="space-y-2">
              {tabContent[activeTab].items.map((item, index) => (
                <li key={index} className="bg-gray-200 p-3 rounded-md text-gray-700 hover:bg-gray-300 transition-colors duration-300">
                  {item}
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