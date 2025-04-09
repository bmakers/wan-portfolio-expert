
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const industries = [
    {
      category: "Finance",
      items: ["Investment Banking", "Insurance", "Financial Public Relations"]
    },
    {
      category: "Real Estate",
      items: ["Property Development", "Foundation", "Building Services"]
    },
    {
      category: "Infrastructure",
      items: ["Port Operations", "Infrastructure Development", "Heat and Power"]
    },
    {
      category: "Technology",
      items: ["Electric Vehicles", "Solar Products", "Lighting"]
    },
    {
      category: "Healthcare",
      items: ["Medical Services", "Healthcare Products", "Plant Protection"]
    },
    {
      category: "Consumer",
      items: ["Department Store", "Food Products", "Photography"]
    },
    {
      category: "Manufacturing",
      items: ["Aluminium Products", "Industrial Equipment"]
    }
  ];

  return (
    <section id="experience" className="section-container bg-lightGray">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Industry Experience</h2>
        
        <div className="mt-12">
          <Tabs defaultValue="Finance" className="w-full">
            <TabsList className="w-full flex overflow-x-auto mb-6 bg-white p-1 space-x-2">
              {industries.map((industry) => (
                <TabsTrigger 
                  key={industry.category}
                  value={industry.category}
                  className="flex-shrink-0 data-[state=active]:bg-navy data-[state=active]:text-white"
                >
                  {industry.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {industries.map((industry) => (
              <TabsContent key={industry.category} value={industry.category} className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-serif font-semibold text-navy mb-4">
                  {industry.category} Sector Experience
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {industry.items.map((item, index) => (
                    <div key={index} className="border border-gray-200 p-4 rounded bg-white hover:border-gold transition-colors">
                      <p className="text-charcoal font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-navy/5 border-l-4 border-navy">
                  <p className="text-charcoal/90">
                    Mr. Wan has been involved in multiple Hong Kong IPOs in the {industry.category.toLowerCase()} sector, 
                    guiding clients through complex regulatory requirements and ensuring successful listings on the Hong Kong Stock Exchange.
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-8 p-6 bg-white shadow-md">
            <h3 className="text-xl font-serif font-semibold text-navy mb-3">Notable Achievement</h3>
            <p className="text-charcoal/90">
              Advised on the listing of the first project company on the main board of the Stock Exchange of Hong Kong with the waiver of the three years' financial standards requirement – a landmark case in Hong Kong's capital markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
