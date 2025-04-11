import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "IPO Advisory",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
          <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
          <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
          <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
        </svg>
      ),
      description: "Comprehensive guidance through the entire IPO process, from initial planning to successful listing on the Hong Kong Stock Exchange.",
      items: ["Pre-IPO Restructuring", "Prospectus Preparation", "Regulatory Compliance", "Listing Application"]
    },
    {
      title: "Corporate Finance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      description: "Strategic financial and legal advice for corporate transactions, fundraising activities, and capital structuring.",
      items: ["Secondary Offerings", "Private Placements", "Rights Issues", "Debt Financing"]
    },
    {
      title: "M&A Advisory",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      description: "Expert guidance on mergers and acquisitions, from deal structuring to transaction completion, with a focus on maximizing value.",
      items: ["Due Diligence", "Transaction Structuring", "Negotiation Support", "Regulatory Approval"]
    },
    {
      title: "Regulatory & Compliance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19.13v-6.95a2.18 2.18 0 0 0-2.18-2.18h0A2.18 2.18 0 0 0 4.64 12.18v0a2.18 2.18 0 0 0 2.18 2.18H7"></path>
          <path d="M7 14.13h1"></path>
          <path d="M14 19.13v-6.77a2.36 2.36 0 0 0-2.36-2.36h0a2.36 2.36 0 0 0-2.36 2.36v.27"></path>
          <path d="M12 10v5.13"></path>
          <path d="M19 19.13v-4.59a2.77 2.77 0 0 0-2.77-2.77h0a2.77 2.77 0 0 0-2.77 2.77v4.69"></path>
          <path d="M17 11.77V10"></path>
          <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path>
        </svg>
      ),
      description: "Ensuring ongoing compliance with Hong Kong's regulatory requirements for listed companies and financial institutions.",
      items: ["Disclosure Requirements", "Corporate Governance", "Regulatory Filings", "Compliance Audits"]
    }
  ];

  return (
    <section id="services" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Professional Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-md border-t-4 border-t-navy hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="text-navy">
                    {service.icon}
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="text-gold mt-1 font-bold">•</div>
                      <span className="text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <Button variant="outline" className="text-navy border-navy w-full">
                    Book a Call
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-navy/5 p-6 border-l-4 border-gold">
          <h3 className="text-xl font-serif font-semibold text-navy mb-3">Educational Services</h3>
          <p className="text-charcoal/90">
            Mr. Wan also provides educational services, offering courses and seminars to listed companies, investment bankers, and other IPO practitioners. These sessions cover regulatory updates, best practices in corporate finance, and insights into Hong Kong's capital markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
