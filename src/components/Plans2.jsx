import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6 overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out">
            <button
                className="w-full text-left p-6 bg-gradient-to-r from-[#1d4b45] to-[#2a6b62] hover:from-[#2a6b62] hover:to-[#1d4b45] transition-all duration-300 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-2xl font-semibold text-white">{title}</span>
                <span className={`text-3xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}
            >
                <div className="p-6 bg-[#2a6b62] text-white overflow-y-auto max-h-[400px]">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ServicesPage = () => {
    const services = [
        {
            category: "Patents",
            items: [
                { title: "Knock out Patentability Search", description: "Preliminary search to determine if an invention is patentable." },
                { title: "Infringement Search / Clearance / Freedom to Operate Search", description: "Ensures your product doesn't infringe on existing patents." },
                { title: "Validity Search/Invalidity search", description: "Determines if an existing patent is valid or can be challenged." },
                { title: "Infringement or Non-Infringement Search", description: "Investigates potential patent infringements." },
                { title: "State of the Art Search", description: "Comprehensive search of existing technology in a field." },
                { title: "Technology Landscape studies", description: "Analysis of technological trends and patent activities in a specific area." },
                { title: "Patent Watch Search", description: "Monitoring new patent applications in your field of interest." },
                { title: "Patent Prosecution", description: "Managing the patent application process with patent offices." },
                { title: "Patent Drafting", description: "Writing detailed patent applications." },
                { title: "Complete patent specification drafting", description: "Drafting full, detailed patent specifications." },
                { title: "Provisional patent specification drafting", description: "Drafting initial, temporary patent applications." },
                { title: "Patent Filing and Proceedings", description: "Handling the formal submission and follow-up of patent applications." },
                { title: "Filing patent applications in Indian Patent Office", description: "Submitting patent applications to the Indian Patent Office." },
                { title: "Filing ordinary patent applications in Indian Patent Office", description: "Submitting standard patent applications in India." },
                { title: "Filing convention patent applications in Indian Patent Office", description: "Filing patents in India based on prior foreign applications." },
                { title: "Filing National phase patent applications in Indian Patent Office", description: "Entering the national phase in India for international applications." },
                { title: "Filing PCT applications and patent applications in patent offices outside India", description: "Handling international patent applications." },
                { title: "Renewal of Indian Patents", description: "Managing the renewal process for patents in India." },
                { title: "Filing statement relating to working of patent", description: "Submitting reports on the commercial use of patents." },
                { title: "Pre grant opposition", description: "Challenging patent applications before they are granted." },
                { title: "Post grant opposition", description: "Challenging patents after they have been granted." },
                { title: "Patent Illustration", description: "Creating visual representations for patent applications." },
                { title: "Patent Proof Reading", description: "Reviewing and refining patent documents for accuracy." },
                { title: "Patent watch", description: "Monitoring new patent filings in specific technology areas." },
                { title: "Patent monitoring", description: "Ongoing surveillance of patent activities in your field." },
                { title: "Patent Valuation", description: "Assessing the financial value of patents." },
            ]
        },
        {
            category: "Trademark",
            items: [
                { title: "Trademark Search", description: "Investigating existing trademarks to ensure uniqueness." },
                { title: "Trademark Filing & Registration", description: "Handling the process of registering new trademarks." },
                { title: "Trademark Renewal", description: "Managing the renewal of existing trademarks." },
                { title: "Trademark Watch", description: "Monitoring new trademark applications for potential conflicts." },
                { title: "Industrial Design filing and prosecution", description: "Managing the registration process for industrial designs." },
                { title: "Copyrights filing and prosecution", description: "Handling copyright registration and related legal processes." },
                { title: "IP Valuation and Market Research", description: "Assessing the value of intellectual property and related market analysis." },
            ]
        },
        {
            category: "Copyright",
            items: [
                { title: "Copyright Registration", description: "Assisting with the formal registration of copyrights." },
                { title: "Copyright Infringement Defense", description: "Legal support in cases of copyright violation." },
            ]
        },
        {
            category: "Trade Secret",
            items: [
                { title: "Trade Secret Protection Strategies", description: "Developing plans to safeguard valuable business information." },
                { title: "Trade Secret Litigation", description: "Legal representation in trade secret disputes." },
            ]
        },
        {
            category: "Civil Matters",
            items: [
                { title: "Civil Litigation", description: "Representing clients in non-criminal legal disputes." },
                { title: "Contract Disputes", description: "Handling disagreements related to contractual obligations." },
            ]
        },
        {
            category: "Criminal Matters",
            items: [
                { title: "Criminal Defense", description: "Legal representation for those accused of crimes." },
                { title: "White Collar Crime", description: "Handling cases involving financial and business-related crimes." },
            ]
        },
        {
            category: "Family Disputes",
            items: [
                { title: "Divorce Proceedings", description: "Legal assistance in marital dissolutions." },
                { title: "Child Custody", description: "Representation in child custody and visitation disputes." },
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#235951] to-[#6A9C89]  text-white pb-8">
            <div className=" p-8 px-5 text-center">
                <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
                    <span className="bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 text-[gold]">
                        S.S. Advocates  
                    </span>
                </h1>
                {/* <p className="text-lg font-light text-gray-100 lg:text-xl md:mt-4">
                We focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
            </p> */}
            </div>
            <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Our Services</h1>
            <div className="max-w-4xl mx-auto space-y-6 px-10">
                {services.map((category, index) => (
                    <Accordion key={index} title={category.category}>
                        <ul className="space-y-4">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="bg-[#1d4b45] rounded-lg p-4 transition-all duration-300 hover:bg-[#163b36] hover:shadow-lg">
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;