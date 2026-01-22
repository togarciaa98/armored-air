import { Suspense } from "react";
import { Shield, Clock, Lock, Phone, Mail } from "lucide-react";
import { PrivateRequestForm } from "@/components/forms/PrivateRequestForm";
import { CONTACT_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Request",
  description:
    "Submit a confidential request for armored vehicle services. All inquiries handled with absolute discretion.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Hero */}
      <section className="py-16 border-b border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-platinum mb-6">
              Private Request
            </h1>
            <p className="text-lg text-silver leading-relaxed">
              Every inquiry is handled with absolute discretion. Your information
              is protected by strict confidentiality protocols and is never shared
              with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="animate-pulse bg-graphite h-96" />}>
                <PrivateRequestForm />
              </Suspense>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Direct Contact */}
                <div className="bg-graphite border border-slate/50 p-6">
                  <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-6">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-champagne flex-shrink-0" />
                      <div>
                        <p className="text-sm text-silver">Secure Line</p>
                        <p className="text-platinum">{CONTACT_INFO.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-champagne flex-shrink-0" />
                      <div>
                        <p className="text-sm text-silver">Encrypted Email</p>
                        <p className="text-platinum">{CONTACT_INFO.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-champagne flex-shrink-0" />
                      <div>
                        <p className="text-sm text-silver">Response Time</p>
                        <p className="text-platinum">
                          Within {CONTACT_INFO.responseTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-graphite border border-slate/50 p-6">
                  <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-6">
                    Our Commitment
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Shield className="w-5 h-5 text-champagne flex-shrink-0" />
                      <div>
                        <p className="text-sm text-platinum">
                          Certified Protection
                        </p>
                        <p className="text-xs text-silver">
                          VR4-VR7 armoring standards
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Lock className="w-5 h-5 text-champagne flex-shrink-0" />
                      <div>
                        <p className="text-sm text-platinum">
                          Complete Discretion
                        </p>
                        <p className="text-xs text-silver">
                          Your privacy is paramount
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-champagne flex-shrink-0" />
                      <div>
                        <p className="text-sm text-platinum">24/7 Operations</p>
                        <p className="text-xs text-silver">
                          Always at your service
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Urgent */}
                <div className="bg-onyx border border-champagne/30 p-6">
                  <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
                    Urgent Requirements
                  </h3>
                  <p className="text-sm text-silver mb-4">
                    For immediate assistance or time-sensitive requests, contact
                    our 24/7 operations center directly.
                  </p>
                  <p className="text-platinum font-medium">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-onyx border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How quickly can you arrange a vehicle?",
                a: "Standard bookings require 48-72 hours notice. For urgent requirements, contact our operations center directly for same-day availability.",
              },
              {
                q: "Are your vehicles truly armored?",
                a: "All vehicles are certified to international ballistic standards (VR4-VR7) by recognized testing laboratories. Documentation available upon request.",
              },
              {
                q: "Do you operate outside the listed cities?",
                a: "Yes, we can arrange service throughout Mexico with advance notice. Contact us for custom logistics solutions.",
              },
              {
                q: "Can I request a specific driver?",
                a: "For extended engagements, we match drivers to clients based on language, experience, and compatibility. Specific requests can be accommodated.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-l-2 border-slate pl-6">
                <h3 className="text-platinum mb-2">{faq.q}</h3>
                <p className="text-sm text-silver">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
