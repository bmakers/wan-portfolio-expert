
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-lightGray">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-navy mb-4">Get in Touch</h3>
            <p className="text-charcoal/80 mb-6">
              For inquiries about Hong Kong IPOs, corporate finance, or any other legal services, please feel free to reach out using the contact form or the provided contact information.
            </p>
            
            <div className="space-y-4 mt-8">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 bg-navy/10 rounded-full text-navy mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy">Phone</h4>
                    <p className="text-charcoal/70">+852 1234 5678</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 bg-navy/10 rounded-full text-navy mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy">Email</h4>
                    <p className="text-charcoal/70">daniel.wan@example.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 bg-navy/10 rounded-full text-navy mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy">Office</h4>
                    <p className="text-charcoal/70">Central, Hong Kong</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-serif font-semibold text-navy mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-charcoal">First Name</label>
                  <Input id="firstName" placeholder="First Name" className="border-gray-300 focus:border-navy" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-charcoal">Last Name</label>
                  <Input id="lastName" placeholder="Last Name" className="border-gray-300 focus:border-navy" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-charcoal">Email</label>
                <Input id="email" type="email" placeholder="Your Email" className="border-gray-300 focus:border-navy" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-charcoal">Subject</label>
                <Input id="subject" placeholder="Subject" className="border-gray-300 focus:border-navy" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  className="min-h-[120px] border-gray-300 focus:border-navy"
                />
              </div>
              
              <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
