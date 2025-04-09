
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-container bg-lightGray">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Daniel</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                  <path d="M7 3.34V5a3 3 0 0 0 3 3h0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"></path>
                  <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">Education</h3>
              <p className="text-charcoal/80">
                Graduated from the University of Leicester, UK with a first class honours degree in law.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M9 9h6v6H9z"></path>
                  <path d="M15 4v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">Qualifications</h3>
              <p className="text-charcoal/80">
                Admitted as a solicitor of the High Court of Hong Kong and the Supreme Court of England and Wales.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
                  <path d="M17 11l.5-1"></path>
                  <path d="M5 11l-.5-1"></path>
                  <path d="M17 18h-2"></path>
                  <path d="M19 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2"></path>
                  <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  <path d="M12 12v6"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">Experience</h3>
              <p className="text-charcoal/80">
                Extensive experience in Hong Kong IPOs, corporate finance, and regulatory compliance across diverse industries.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-white p-6 shadow-md text-charcoal">
          <p className="mb-4">
            Mr. Daniel Wan specialises in Hong Kong corporate finance, Hong Kong IPOs, pre-IPO investments and restructurings, post-IPO regulatory and compliance matters, and secondary equity fundraisings. His clients include investment banks, investment funds, private and listed companies.
          </p>
          <p>
            Daniel also advises on mergers and acquisitions, takeovers, joint ventures, restructurings and direct investments in Hong Kong and Mainland China. Additionally, he contributes to the financial industry by giving courses and seminars to listed companies, investment bankers and other IPO practitioners from time to time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
