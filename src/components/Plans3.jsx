import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import { servicesData } from './servicesData'; // Assume this file exists with your services data

const servicesData = {
  Patents: {
    description: `Patents are essential for protecting inventions and providing exclusive rights to inventors. The patent system encourages innovation by granting inventors a limited period during which they can exploit their inventions without competition. At our firm, we understand the complexities involved in navigating patent laws and processes. Our experienced team works diligently to ensure that your intellectual property is well protected. We offer a comprehensive range of patent services, including thorough searches, meticulous drafting, strategic filing, and diligent prosecution. Our tailored services are designed to meet the unique needs of individual inventors, startups, and large corporations, ensuring that your innovations are safeguarded and that you can focus on what you do best—creating and innovating.`,
    services: [
      {
        name: 'Knock out Patentability Search',
        description2: `This service involves a preliminary search to assess the likelihood of obtaining a patent for your invention. We conduct extensive searches of existing patents and published applications to determine if your idea is novel and non-obvious, providing you with a clear understanding of your patent prospects.`,
      },
      {
        name: 'Infringement Search / Clearance / Freedom to Operate Search',
        description2: `This search aims to identify potential infringement issues related to your product or service. We analyze existing patents to determine whether your innovation could infringe on someone else's rights, allowing you to make informed decisions before proceeding with development.`,
      },
      {
        name: 'Validity Search / Invalidity search',
        description2: `A validity search evaluates the strength of an existing patent by identifying prior art that may affect its enforceability. Conversely, an invalidity search aims to find evidence that can potentially invalidate a patent. This service is crucial for defending against infringement claims or for making informed licensing decisions.`,
      },
      {
        name: 'Infringement or Non-Infringement Search',
        description2: `This service provides a detailed analysis of whether your product infringes on existing patents. We help you understand the scope of relevant patents, ensuring you can navigate the market without legal complications.`,
      },
      {
        name: 'State of the Art Search',
        description2: `A state-of-the-art search involves a comprehensive review of existing technologies and patents in a specific field. This helps clients understand current trends and innovations, guiding their own research and development efforts effectively.`,
      },
      {
        name: 'Technology Landscape Studies',
        description2: `We analyze the competitive landscape of a specific technology area, identifying key players, emerging trends, and potential opportunities. This strategic insight assists clients in positioning their innovations within the market.`,
      },
      {
        name: 'Patent Watch Search',
        description2: `This ongoing service monitors newly published patents in your field, helping you stay informed about competitors' activities and potential infringement risks. Regular updates ensure you can act promptly on relevant developments.`,
      },
      {
        name: 'Patent Prosecution',
        description2: `Our team expertly navigates the patent prosecution process, responding to office actions and communications from patent offices to secure your patent rights. We handle all interactions with examiners, ensuring a smooth and efficient process.`,
      },
      {
        name: 'Patent Drafting',
        description2: `We provide comprehensive drafting services for patent applications, ensuring that all technical details are accurately described and legally defensible. Our team ensures that your application meets all formal requirements and is strategically positioned for approval.`,
      },
      {
        name: 'Complete Patent Specification Drafting',
        description2: `This involves creating a complete specification that includes detailed descriptions, claims, and drawings of your invention. Our team ensures that the specification is robust and covers all necessary aspects to withstand scrutiny.`,
      },
      {
        name: 'Provisional Patent Specification Drafting',
        description2: `We assist clients in preparing provisional applications that establish an early filing date. This service provides temporary protection while you further develop your invention or seek funding, without the need for formal patent claims.`,
      },
      {
        name: 'Patent Filing and Proceedings',
        description2: `We manage the entire patent filing process, ensuring that all applications are submitted correctly and in a timely manner. Our team handles communications with patent offices throughout the proceedings.`,
      },
      {
        name: 'Filing patent applications in Indian Patent Office',
        description2: `We specialize in filing patent applications with the Indian Patent Office, ensuring compliance with local laws and regulations. Our experience streamlines the process and enhances your chances of success.`,
      },
      {
        name: 'Filing ordinary patent applications in Indian Patent Office',
        description2: `This service involves preparing and submitting ordinary patent applications. Our team ensures that your application is detailed, well-structured, and fully compliant with Indian patent laws.`,
      },
      {
        name: 'Filing convention patent applications in Indian Patent Office',
        description2: `We assist clients in filing convention applications based on earlier applications filed in other countries. This ensures that you benefit from the earlier filing date while complying with Indian patent regulations.`,
      },
      {
        name: 'Filing National phase patent applications in Indian Patent Office',
        description2: `For international applicants entering the Indian market, we manage the filing of national phase applications, ensuring all requirements are met for successful patent protection in India.`,
      },
      {
        name: 'Filing PCT applications and patent applications in patent offices outside India',
        description2: `Our firm handles the filing of Patent Cooperation Treaty (PCT) applications, facilitating the pursuit of patent protection in multiple countries simultaneously, simplifying the international patent process for our clients.`,
      },
      {
        name: 'Renewal of Indian Patents',
        description2: `We provide assistance with the timely renewal of patents, ensuring that your rights remain active and protected. Our team monitors renewal deadlines and manages all necessary filings.`,
      },
      {
        name: 'Filing statement relating to working of patent',
        description2: `This service involves preparing and submitting statements regarding the working of a patent in India, as required by law. We ensure that all disclosures are accurate and compliant with statutory requirements.`,
      },
      {
        name: 'Pre-grant opposition',
        description2: `We represent clients in pre-grant opposition proceedings, allowing you to challenge the validity of a patent application before it is granted, protecting your interests in the competitive landscape.`,
      },
      {
        name: 'Post-grant opposition',
        description2: `This service involves challenging an already granted patent through formal opposition proceedings, aimed at invalidating the patent based on various grounds, including prior art and lack of novelty.`,
      },
      {
        name: 'Patent Illustration',
        description2: `Our illustrators create precise and detailed drawings of your invention, which are essential for patent applications. We ensure that illustrations comply with patent office requirements and clearly represent your invention.`,
      },
      {
        name: 'Patent Proof Reading',
        description2: `We provide meticulous proofreading services for patent applications to eliminate errors and ensure clarity. Our goal is to enhance the overall quality of your application before submission.`,
      },
      {
        name: 'Patent Watch',
        description2: `Our patent watch service monitors the patent landscape for potential infringements or emerging technologies relevant to your business, allowing you to stay proactive and informed.`,
      },
      {
        name: 'Patent Monitoring',
        description2: `We continuously track the status of your patents and any related legal developments, providing you with updates and guidance to manage your intellectual property effectively.`,
      },
      {
        name: 'Patent Valuation',
        description2: `We conduct thorough patent valuations, assessing the market value of your patents for licensing, sale, or investment purposes. This service is crucial for making informed business decisions regarding your intellectual property.`,
      },
    ],
  },
  Trademark: {
    description: `Trademarks protect symbols, logos, and brand names that distinguish goods and services. They are vital for building brand identity and trust among consumers. In an increasingly competitive marketplace, effective trademark protection can significantly impact your business success. Our firm offers comprehensive trademark services, including thorough searches to identify potential conflicts, meticulous filings to secure your rights, and robust legal representation to defend your trademarks against infringement. We also assist with renewal and monitoring services to ensure your trademarks maintain their protection over time, allowing you to focus on growing your brand with confidence.`,
    services: [
      {
        name: 'Trademark Search',
        description2: `Our trademark search service involves a comprehensive examination of existing trademarks to identify potential conflicts. This crucial step ensures that your brand name or logo is unique and available for registration, minimizing the risk of infringement claims down the line.`,
      },
      {
        name: 'Trademark Filing & Registration',
        description2: `We handle the entire trademark registration process, from preparing and filing the application to responding to any office actions. Our expertise ensures that your trademark is registered efficiently, providing you with legal protection against unauthorized use.`,
      },
      {
        name: 'Trademark Renewal',
        description2: `Our team assists clients with the timely renewal of trademark registrations, ensuring that your rights remain active. We monitor renewal deadlines and handle all necessary filings to maintain your trademark protection.`,
      },
      {
        name: 'Trademark Watch',
        description2: `This service involves monitoring the trademark landscape for any potential conflicts or infringements. We keep you informed about new filings that could impact your brand, allowing you to take proactive measures to protect your intellectual property.`,
      },
      {
        name: 'Industrial Design Filing and Prosecution',
        description2: `We assist clients in filing and prosecuting applications for industrial designs, which protect the aesthetic aspect of products. Our comprehensive service ensures that your designs are legally protected from unauthorized copying.`,
      },
      {
        name: 'IP Valuation and Market Research',
        description2: `We conduct thorough IP valuations and market research to assess the value of your intellectual property portfolio. This service is essential for strategic decision-making, whether for licensing, investment, or mergers and acquisitions.`,
      },
    ],
  },
  Copyright: {
    description: `Copyright protects original works of authorship, including literature, music, and art. It grants creators exclusive rights to use, distribute, and modify their works, providing a legal framework for protecting creative endeavors. In an era of digital content and globalization, copyright protection is more important than ever. Our firm offers a range of copyright services to help you navigate the complexities of copyright law. We assist with registration to establish your rights, enforcement against unauthorized use, and licensing agreements that maximize the value of your creative outputs. Our experienced team is dedicated to ensuring that your artistic and intellectual contributions are safeguarded, allowing you to focus on your creativity without fear of infringement.`,
    services: [
      {
        name: 'Copyright Registration',
        description2: `We help clients navigate the copyright registration process, ensuring that your original works are protected under the law. Registration establishes a public record of your copyright and strengthens your position in any potential infringement claims.`,
      },
      {
        name: 'Copyright Enforcement',
        description2: `Our firm provides robust legal representation in enforcing copyright rights, addressing unauthorized use of your works. We pursue effective remedies, including cease and desist letters, negotiations, and litigation when necessary.`,
      },
      {
        name: 'Copyright Licensing',
        description2: `We assist clients in drafting and negotiating licensing agreements that allow others to use your copyrighted works while retaining your rights. Our team ensures that agreements are fair and beneficial for both parties.`,
      },
      {
        name: 'Copyright Infringement Claims',
        description2: `If someone infringes on your copyright, we help you take appropriate legal action. Our team conducts thorough investigations and prepares the necessary documentation to pursue your claims effectively.`,
      },
    ],
  },
  "Design Registration": {
    description: `Design registration is the process of legally protecting the unique and aesthetic elements of a product's design, including its shape, configuration, patterns, and ornamentation. By registering a design, you obtain exclusive rights to prevent others from manufacturing, copying, or selling products with a similar design without your permission. This not only protects your creative efforts but also strengthens your brand’s identity and market presence.`,
    services: [
      {
        name: 'Preparation of Design / Line Diagram:',
        description2: `Develop a detailed and accurate line drawing or graphic representation of the design.
Ensure the design includes key features like shape, configuration, patterns, or ornamentation that distinguish it from existing designs.
Prepare multiple views (front, back, side, top) of the design, if necessary, to fully represent its appearance.`,
      },
      {
        name: 'Design Registration:',
        description2: `File an application for design registration with the relevant intellectual property (IP) office.
Include the prepared line diagrams, a description of the design’s unique features, and other required details (e.g., the class of goods the design applies to).
Pay the required registration fees.
Await examination by the IP office to determine if the design meets the criteria for registration, including originality and distinctiveness.
Upon approval, obtain the certificate of registration, granting exclusive rights to the design.`,
      },
      {
        name: 'Prosecution:',
        description2: `Response to Examination Report: In case of objections or queries raised by the IP office, submit a formal response addressing all issues to support the registration.
Amendments and Clarifications: If required, make necessary amendments to the application or provide additional documentation to clarify the scope and originality of the design.`,
      },
    ],
  },
  "Civil Matters": {
    description: `Civil matters involve disputes between individuals or organizations, encompassing a wide range of issues, including contracts, property disputes, and tort claims. Our firm offers comprehensive legal services to represent clients in civil litigation and mediation, ensuring your rights and interests are protected throughout the process. With a focus on providing strategic solutions, we work closely with our clients to understand the specifics of their situations and develop tailored legal strategies. Our experienced team is dedicated to achieving the best possible outcomes for our clients, whether through negotiation, mediation, or litigation. We aim to resolve disputes efficiently while safeguarding your interests and ensuring justice is served.`,
    services: [
      {
        name: 'Contract Disputes',
        description2: `We represent clients in disputes arising from contracts, helping to enforce contractual obligations or seek remedies for breaches. Our team works to achieve a resolution that aligns with your business objectives and protects your rights.`,
      },
      {
        name: 'Property Disputes',
        description2: `Our firm handles property disputes, including boundary issues, landlord-tenant conflicts, and real estate transactions. We provide legal guidance and representation to help clients navigate these complex matters effectively.`,
      },
      {
        name: 'Tort Claims',
        description2: `We assist clients in pursuing tort claims, including personal injury and negligence cases. Our team investigates the circumstances of each case and fights for fair compensation on behalf of our clients.`,
      },
      {
        name: 'Mediation Services',
        description2: `We offer mediation services to facilitate negotiations between parties in dispute. Our experienced mediators help create a constructive environment for dialogue, aiming to reach amicable resolutions without the need for litigation.`,
      },
      {
        name: 'Civil Litigation Representation',
        description2: `When disputes cannot be resolved through negotiation or mediation, we provide strong representation in civil litigation. Our team prepares cases thoroughly, presenting compelling arguments and evidence in court to advocate for your rights.`,
      },
    ],
  },
  "Criminal Matters": {
    description: `Criminal matters pertain to offenses against the state or public, resulting in prosecution by government authorities. Our firm provides robust legal representation for individuals facing criminal charges, focusing on protecting your rights and ensuring a fair trial. With a deep understanding of criminal law and a commitment to advocacy, our experienced attorneys work diligently to build strong defenses tailored to the specifics of each case. Whether you are facing minor charges or serious felonies, we are dedicated to providing you with the highest level of legal support. Our goal is to navigate the complexities of the criminal justice system on your behalf, striving to achieve the best possible outcomes for our clients.`,
    services: [
      {
        name: 'Defense against Criminal Charges',
        description2: `Our firm provides strong legal defense against a wide range of criminal charges, including misdemeanors and felonies. We analyze evidence, challenge prosecution arguments, and work to achieve favorable outcomes for our clients.`,
      },
      {
        name: 'Bail Applications',
        description2: `We assist clients in filing bail applications to secure their release while awaiting trial. Our team presents compelling arguments to the court, advocating for fair bail conditions based on individual circumstances.`,
      },
      {
        name: 'Appeals in Criminal Cases',
        description2: `If you have been convicted of a crime, we offer legal support in pursuing appeals. Our team reviews trial records, identifies grounds for appeal, and represents clients in appellate court proceedings.`,
      },
      {
        name: 'Legal Advice on Criminal Law',
        description2: `We provide clients with comprehensive legal advice on criminal law matters, helping them understand their rights, potential consequences, and available options. Our guidance empowers clients to make informed decisions throughout their cases.`,
      },
    ],
  },
  "Family Disputes": {
    description: `Family disputes often involve sensitive legal matters such as divorce, child custody, and inheritance. Our compassionate legal team is dedicated to helping clients navigate these challenges, providing guidance and representation to achieve the best possible outcomes for families. We understand the emotional complexities involved in family law matters and strive to create a supportive environment for our clients. Our experienced attorneys work closely with clients to develop personalized legal strategies that reflect their goals and protect their interests. Whether through negotiation or litigation, we are committed to advocating for our clients’ rights and ensuring that their family matters are resolved as smoothly as possible.`,
    services: [
      {
        name: 'Divorce Proceedings',
        description2: `We guide clients through the divorce process, ensuring that their rights are protected during negotiations and court proceedings. Our team handles all aspects of divorce, including asset division, spousal support, and more.`,
      },
      {
        name: 'Child Custody Agreements',
        description2: `Our firm assists clients in negotiating and establishing child custody agreements that serve the best interests of the child. We work to create fair arrangements that consider the needs of all parties involved.`,
      },
      {
        name: 'Child Support Arrangements',
        description2: `We provide legal guidance in establishing child support arrangements that are fair and reasonable. Our team helps clients navigate the complexities of child support laws to ensure that the financial needs of the child are met.`,
      },
      {
        name: 'Mediation in Family Matters',
        description2: `We offer mediation services for family disputes, providing a neutral space for open dialogue. Our experienced mediators help families reach amicable solutions without the stress and expense of litigation.`,
      },
      {
        name: 'Adoption Services',
        description2: `We assist clients throughout the adoption process, guiding them through legal requirements and ensuring a smooth transition for families. Our team is dedicated to making the adoption process as positive and seamless as possible.`,
      },
    ],
  },
};


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { serviceName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the serviceName in the URL
    if (servicesData[serviceName]) {
      setSelectedService(serviceName);
    } else {
      setSelectedService(null);
    }
  }, [serviceName]);

  const handleServiceClick = (service) => {
    navigate(`/services/${service}`);
  };

  return (
    <div className="min-h-screen bg-[#3F6D66] text-white p-6">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#FFD700] mb-4 tracking-tight">
            SS Advocates
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200 max-w-3xl mx-auto">
            Empowering innovation and protecting your intellectual property with expert legal services tailored to your unique needs.
          </p>
        </div>

        <nav className="bg-[#2a5751] rounded-2xl mb-12 shadow-lg">
          <ul className="flex flex-wrap justify-around p-2">
            {Object.keys(servicesData).map((service) => (
              <li key={service} className="m-2">
                <Link
                  to={`/services/${service}`}
                  className={`flex items-center space-x-2 text-white hover:bg-[#1d4b45] px-6 py-3 rounded-xl transition duration-300 ${
                    selectedService === service ? 'bg-[#1d4b45]' : ''
                  }`}
                >
                  {servicesData[service].icon}
                  <span>{service}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {selectedService && (
          <div className="mt-8 p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl transition-all duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">{selectedService}</h2>
            <p className="mb-6 text-gray-200 text-lg">{servicesData[selectedService].description}</p>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFD700]">Services Offered:</h3>
            <ul className="space-y-4">
              {servicesData[selectedService].services.map((item, index) => (
                <li key={item.name} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFD700] flex items-center justify-center text-[#3F6D66] font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <strong className="text-[#FFD700]">{item.name}:</strong>{' '}
                    <span className="text-gray-200">{item.description2}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;