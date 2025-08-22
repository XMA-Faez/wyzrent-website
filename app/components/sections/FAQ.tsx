'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are Holiday Homes?",
      answer: "Holiday Homes are professionally managed short-term rental properties that offer travelers a home-like experience. These properties are fully furnished, licensed by DTCM (Dubai Tourism), and provide an alternative to traditional hotels with more space, privacy, and amenities."
    },
    {
      question: "How much does DTCM charge?",
      answer: "DTCM charges AED 1,550 annually for each Holiday Home permit. This includes the permit fee (AED 1,070), innovation fee (AED 10), and knowledge fee (AED 10). Additionally, there's a one-time security deposit of AED 1,000 and tourism dirham fees collected from guests."
    },
    {
      question: "What documents do I need to get a permit?",
      answer: "Required documents include: Title Deed (proving ownership), Emirates ID and passport copy, valid UAE visa, Ejari registration, DEWA bill, floor plan from developer, No Objection Certificate from the building management/owner's association, and proof of home insurance."
    },
    {
      question: "Can I stay in my property?",
      answer: "Yes, as the property owner, you retain the right to use your property. Simply notify us in advance of your intended stay dates, and we'll block those dates from guest bookings. You can enjoy your property whenever you wish while still earning rental income during other periods."
    },
    {
      question: "If a guest damages my property, who pays for it?",
      answer: "WYZRENT implements multiple layers of protection for your property. We collect security deposits from all guests, thoroughly vet bookings, and maintain comprehensive insurance coverage. In the rare event of damage, repairs are covered through the guest's deposit or our insurance, ensuring you never bear the cost."
    },
    {
      question: "What are the top 5 benefits of renting as a holiday rental?",
      answer: "1. Higher Revenue: Holiday rentals typically generate 30-40% more income than traditional long-term rentals. 2. Flexibility: Use your property whenever you want. 3. Professional Management: We handle everything from guest screening to maintenance. 4. Property Appreciation: Regular maintenance and upgrades keep your property in premium condition. 5. Tax Benefits: Potential tax advantages on rental income and property expenses."
    },
    {
      question: "What is DTCM?",
      answer: "DTCM (Department of Tourism and Commerce Marketing) is Dubai's official tourism authority. They regulate and license all holiday home operations in Dubai, ensuring quality standards, guest safety, and legal compliance. All legitimate short-term rental properties must be registered with DTCM."
    },
    {
      question: "Does WYZRENT manage unfurnished properties?",
      answer: "Yes! We offer complete furnishing solutions through our interior design partners. We can transform your unfurnished property into a luxury holiday home with high-end furniture, amenities, and styling that maximizes rental appeal and revenue potential. Furnishing costs can often be recouped within the first year through increased rental income."
    },
    {
      question: "When and how much will I get paid?",
      answer: "Property owners receive monthly payments directly to their bank account by the 10th of each month for the previous month's earnings. We provide detailed statements showing all bookings, revenue, expenses, and your net income. Our transparent reporting ensures you always know exactly how your property is performing."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Everything you need to know about Holiday Home management in Dubai
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-semibold text-black pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <div className="bg-blue-50 p-2 rounded-full">
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  </div>
                ) : (
                  <div className="bg-gray-50 p-2 rounded-full">
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5">
                      <motion.p 
                        className="text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Still have questions? We're here to help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              variant="primary"
              size="lg"
              rightIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            >
              Contact Our Team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
