import React, { useState } from 'react';
import Quicknav from "./Quicknav"

const Accordion = ({ title, children, isOpen, toggleOpen }) => {
    return (
        <div className="mb-2 overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out">
            <button
                className="w-full text-left p-4 md:p-6 bg-gradient-to-r from-[#1d4b45] to-[#2a6b62] hover:from-[#2a6b62] hover:to-[#1d4b45] transition-all duration-300 flex justify-between items-center"
                onClick={toggleOpen}
            >
                <span className="text-xl md:text-2xl font-semibold text-white">{title}</span>
                <span className={`text-2xl md:text-3xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </button>
        </div>
    );
};

const ServicesPage = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const services = [
        {
            category: "Patents",
            href:"patent",items: [
                { title: "Knock out Patentability Search", description: "A quick and cost-effective preliminary search to assess whether your invention stands a strong chance of being patentable." },
                { title: "Infringement Search / Clearance / Freedom to Operate Search", description: "A thorough investigation ensuring that your product or invention does not infringe upon existing patents, allowing for risk-free commercialization." },
                { title: "Validity Search/Invalidity Search", description: "An in-depth analysis to determine the strength and enforceability of an existing patent, or to identify grounds for challenging its validity." },
                { title: "Infringement or Non-Infringement Search", description: "An expert review of existing patents to detect potential infringement risks and protect your innovations from legal conflicts." },
                { title: "State of the Art Search", description: "A comprehensive examination of the latest technologies and innovations within your field to support research and development decisions." },
                { title: "Technology Landscape Studies", description: "Strategic insights into the evolving trends and competitive patent activities in specific technological sectors, helping you stay ahead in the innovation race." },
                { title: "Patent Watch Search", description: "Ongoing monitoring of new patent applications within your industry, keeping you informed of emerging threats and opportunities." },
                { title: "Patent Prosecution", description: "A full-service approach to managing the patent application process, from drafting to navigating through complex patent office procedures." },
                { title: "Patent Drafting", description: "Crafting highly detailed, legally sound patent applications that accurately capture the essence of your invention and its market potential." },
                { title: "Complete Patent Specification Drafting", description: "Preparing a comprehensive and legally precise document that outlines every aspect of your invention, ensuring robust patent protection." },
                { title: "Provisional Patent Specification Drafting", description: "Developing a provisional application to establish early filing dates and protect your invention as you refine the details." },
                { title: "Patent Filing and Proceedings", description: "Expert handling of patent submissions, including coordination with patent offices and managing all procedural formalities." },
                { title: "Filing Patent Applications in Indian Patent Office", description: "Specialized services for submitting patent applications in the Indian jurisdiction, ensuring compliance with local regulations." },
                { title: "Filing Ordinary Patent Applications in Indian Patent Office", description: "Guiding you through the process of filing standard patent applications in India, with full regulatory support." },
                { title: "Filing Convention Patent Applications in Indian Patent Office", description: "Filing patents in India based on prior foreign applications to extend your IP protection globally." },
                { title: "Filing National Phase Patent Applications in Indian Patent Office", description: "Managing the Indian national phase entry for your international patent applications under the Patent Cooperation Treaty (PCT)." },
                { title: "Filing PCT Applications and Patent Applications in Patent Offices Outside India", description: "Global patent filing services, ensuring your invention is protected in multiple countries through the PCT system." },
                { title: "Renewal of Indian Patents", description: "Efficient management of your patent renewals in India, ensuring continuous protection without any legal lapses." },
                { title: "Filing Statement Relating to Working of Patent", description: "Submitting annual statements to the Indian Patent Office, demonstrating the commercial exploitation of your patents." },
                { title: "Pre-Grant Opposition", description: "Legal support to challenge pending patent applications before they are granted, safeguarding your intellectual property interests." },
                { title: "Post-Grant Opposition", description: "Protect your market position by challenging granted patents that may hinder your business or innovation efforts." },
                { title: "Patent Illustration", description: "Professional, precise visual representations that enhance the clarity and effectiveness of your patent applications." },
                { title: "Patent Proofreading", description: "Meticulous review of patent documents to eliminate errors, ensuring legal accuracy and airtight protection." },
                { title: "Patent Watch", description: "A service designed to keep track of newly filed patents in your area of interest, so you're always informed of the latest developments." },
                { title: "Patent Monitoring", description: "Ongoing, detailed surveillance of patent activities in your industry, helping you maintain a competitive edge." },
                { title: "Patent Valuation", description: "Assessing the financial worth of your patent portfolio, providing you with critical insights into its market potential and licensing opportunities." },
            ]
        },
        {
            category: "Trademark",
            href:"trademark",items: [
                { title: "Trademark Search", description: "A detailed examination of existing trademarks to confirm the uniqueness and protectability of your brand." },
                { title: "Trademark Filing & Registration", description: "Streamlined filing and registration process for new trademarks, securing your brand identity and legal rights." },
                { title: "Trademark Renewal", description: "Expert management of trademark renewal processes to ensure uninterrupted protection of your brand." },
                { title: "Trademark Watch", description: "Ongoing monitoring of new trademark applications to prevent conflicts and protect your brand from infringement." },
                { title: "Industrial Design Filing and Prosecution", description: "Complete support for registering industrial designs, ensuring your product’s aesthetic features are legally protected." },
                { title: "Copyrights Filing and Prosecution", description: "Handling all legal processes for copyright registration, ensuring your creative works are fully protected under the law." },
                { title: "IP Valuation and Market Research", description: "In-depth analysis of the market potential and financial value of your intellectual property assets, guiding strategic decisions." },
            ]
        },
        {
            category: "Copyright",
            href:"copyright",items: [
                { title: "Copyright Registration", description: "Helping you navigate the formal process of copyright registration, ensuring legal protection for your creative works." },
                { title: "Copyright Infringement Defense", description: "Providing expert legal support to defend against copyright violations and safeguard your intellectual property." },
            ]
        },
        {
            category: "Design Registration",
            href:"Design%20Registration",items: [
                { title: "Design Registration Protection Strategies", description: "Developing customized strategies to protect your confidential business information from unauthorized use or disclosure." },
                { title: "Design Registration Litigation", description: "Expert legal representation in cases of Design Registration theft, ensuring your business interests are fully protected." },
            ]
        },
        {
            category: "Civil Matters",
            href:"civil",items: [
                { title: "Civil Litigation", description: "Comprehensive legal representation in civil disputes, ensuring your rights and interests are effectively advocated." },
                { title: "Contract Disputes", description: "Resolving contractual disagreements through expert negotiation or litigation, safeguarding your business relationships." },
            ]
        },
        {
            category: "Criminal Matters",
            href:"criminal",items: [
                { title: "Criminal Defense", description: "Aggressive legal defense for individuals accused of criminal activities, protecting your rights at every stage." },
                { title: "White Collar Crime", description: "Specialized legal services for financial and cor   porate crime cases, ensuring thorough representation and expert defense." },
            ]
        },
        {
            category: "Family Disputes",
            href:"family",items: [
                { title: "Divorce Proceedings", description: "Offering compassionate legal support for divorce cases, ensuring your rights and interests are prioritized." },
                { title: "Child Custody", description: "Representation in child custody disputes, focusing on the best interests of the child while protecting your parental rights." },
            ]
        },
    ];
    const navItems = services.map(service => ({
        href: service.href,
        text: service.category
    }));


    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div className="min-h-screen bg-[#235951] flex flex-col items-center justify-start p-2 md:p-8">
            <div className="w-full max-w-6xl">
                <div className="text-center mb-4 md:mb-8">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white mb-2 md:mb-4">
                        S.S. Advocates
                    </h1>
                    <p className="text-sm md:text-lg font-light text-gray-200 max-w-3xl mx-auto">
                        Empowering innovation and protecting your intellectual property with expert legal services tailored to your unique needs.
                    </p>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-white">Our Comprehensive Services</h2>
                <Quicknav navItems={navItems} />
                <div className="space-y-2 md:space-y-6">
                    {services.map((category, index) => (
                        <div key={index} id={category.href}>
                            <Accordion
                                title={category.category}
                                isOpen={openCategory === category.category}
                                toggleOpen={() => toggleCategory(category.category)}
                                
                            />
                            {openCategory === category.category && (
                                <div className="mt-2 p-4 md:p-6 bg-[#2a6b62] rounded-lg shadow-inner">
                                    <ul className="space-y-2 md:space-y-4">
                                        {category.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="bg-[#1d4b45] rounded-lg p-3 md:p-6 transition-all duration-300 hover:bg-[#163b36] hover:shadow-lg">
                                                <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-[gold]" id="trademark">{item.title}</h3>
                                                <p className="text-sm md:text-base text-gray-200 leading-relaxed">{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;