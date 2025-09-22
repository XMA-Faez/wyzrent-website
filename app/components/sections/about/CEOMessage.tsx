"use client";

import { motion } from "motion/react";
import { Quote, MapPin, Home } from "lucide-react";
import Image from "next/image";

export default function CEOMessage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Message From CEO
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A personal commitment to excellence and trust
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* CEO Image and Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8">
                <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-6 bg-gray-100">
                    <Image
                      src="https://demo1.angelostone.ca/wp-content/uploads/2025/03/ceo.jpeg"
                      alt="Louloua Bahri - CEO"
                      width={400}
                      height={533}
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 300px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Louloua Bahri</h3>
                  <p className="text-blue-600 font-medium">Chief Executive Officer</p>
                  
                  {/* Experience badges */}
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                      <MapPin className="w-3 h-3" />
                      Dubai & Athens
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                      <Home className="w-3 h-3" />
                      90+ Properties
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-6 left-6 w-10 h-10 text-blue-200/50" />
                
                <div className="relative z-10 space-y-4 text-gray-700 leading-relaxed pl-8">
                  <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-1 first-letter:float-left first-letter:leading-[0.9] first-letter:font-serif">
                    At WYZ Rent, we treat every apartment as if it were our own, valuing the trust 
                    that our property owners place in us. We foster a family environment where every 
                    property is cherished and cared for with utmost dedication. Our commitment is to 
                    provide the highest level of service, ensuring that our guests have an exceptional 
                    experience in each of our properties.
                  </p>
                  
                  <p>
                    Our reputation precedes us in Greece, where we successfully own and manage 90 
                    apartments with care and expertise. Building on this legacy, we are excited to 
                    bring our experience to the heart of Dubai, focusing exclusively on the best 
                    locations and premium apartments.
                  </p>
                  
                  <p>
                    We take pride in our meticulous attention to detail and our relentless pursuit 
                    of excellence, always striving to exceed expectations and build lasting 
                    relationships with both our property owners and guests.
                  </p>

                  {/* Signature */}
                  <div className="pt-6">
                    <div className="font-signature text-3xl text-blue-600 mb-2">Louloua Bahri</div>
                    <p className="text-sm text-gray-600 italic">
                      "Your property, our passion"
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-8 right-8 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-200 rounded-full blur-2xl opacity-30" />
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white"
              >
                <h4 className="text-xl font-bold mb-2">
                  Unlock your property's full earning potential with our expert short-term rental experience
                </h4>
                <p className="text-blue-100">
                  Join our exclusive portfolio of premium properties in Dubai
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
