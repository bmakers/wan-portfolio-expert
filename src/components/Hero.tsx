
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-r from-navy/95 to-navy">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Daniel Wan
            <span className="block mt-2 text-gold">Corporate Finance Specialist</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-lg">
            Expertise in Hong Kong IPOs, corporate finance, and regulatory compliance with extensive experience across diverse industries.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-gold hover:bg-gold/90 text-navy font-medium">
              View Expertise
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-36 h-36 border-t-2 border-l-2 border-gold opacity-70"></div>
            <div className="bg-lightGray p-1">
              <div className="bg-gradient-to-br from-lightGray to-white p-8 shadow-lg">
                <div className="flex items-center gap-6 mb-6">
                  <Avatar className="h-24 w-24 border-2 border-gold">
                    <AvatarImage src="https://plus.unsplash.com/premium_photo-1682126600943-996196a59cf1?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Daniel Wan" />
                    <AvatarFallback className="bg-navy text-white text-lg">DW</AvatarFallback>
                  </Avatar>
                  <h3 className="font-serif text-navy text-xl font-semibold">Professional Highlights</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gold">•</div>
                    <span className="text-charcoal">Solicitor of the High Court of Hong Kong</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gold">•</div>
                    <span className="text-charcoal">Admitted to the Supreme Court of England and Wales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gold">•</div>
                    <span className="text-charcoal">First class honours, University of Leicester</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gold">•</div>
                    <span className="text-charcoal">Expert in Hong Kong IPOs and corporate finance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 border-b-2 border-r-2 border-gold opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
