
import React from "react";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Hong Kong IPOs",
      description: "Guiding companies through every stage of the Hong Kong IPO process, from initial planning to successful listing.",
    },
    {
      title: "Pre-IPO Investments",
      description: "Structuring and executing pre-IPO investments to optimize valuation and prepare companies for public markets.",
    },
    {
      title: "Corporate Restructuring",
      description: "Strategic restructuring to enhance organizational efficiency, optimize tax positions, and prepare for capital market activities.",
    },
    {
      title: "Post-IPO Compliance",
      description: "Ensuring ongoing regulatory compliance and navigating disclosure requirements for listed companies.",
    },
    {
      title: "Secondary Fundraisings",
      description: "Advising on secondary market transactions including placements, rights issues, and other equity fundraising mechanisms.",
    },
    {
      title: "Mergers & Acquisitions",
      description: "Structuring, negotiating, and executing M&A transactions for both buyers and sellers across various industries.",
    },
    {
      title: "Joint Ventures",
      description: "Creating robust joint venture structures and agreements to facilitate successful business collaborations.",
    },
    {
      title: "Direct Investments",
      description: "Advising on direct investment opportunities in Hong Kong and Mainland China, with a focus on legal compliance and risk management.",
    },
  ];

  return (
    <section id="expertise" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Areas of Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 hover:border-gold transition-colors bg-white shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">
                {area.title}
              </h3>
              <p className="text-charcoal/80">{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-navy text-white p-8 relative">
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold opacity-70 -mt-2 -mr-2"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold opacity-70 -mb-2 -ml-2"></div>
          
          <h3 className="text-2xl font-serif font-bold mb-4">Industry Recognition</h3>
          <p className="mb-4">
            Mr. Wan has advised on the listing of the first project company on the main board of the Stock Exchange of Hong Kong with the waiver of the three years' financial standards requirement, a significant achievement in Hong Kong's capital markets.
          </p>
          <p>
            His expertise spans numerous industries including department store, property development, port, infrastructure, insurance, medical, financial public relations, solar products, foundation, lighting, electric vehicles, aluminium products, photography, food, healthcare products, plant protection, building services, and heat and power.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
