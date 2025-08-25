"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import "react-international-phone/style.css";
import "@/app/contact-us/contact.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [phone, setPhone] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const formData = {
        ...data,
        phone: phone,
        submittedAt: new Date().toISOString()
      };
      
      console.log("Form submitted:", formData);
      
      setSubmitStatus('success');
      reset();
      setPhone(undefined);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Book a Consultation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your property management needs. 
              Our experts will help you maximize your rental income.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    })}
                    type="email"
                    className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <PhoneInput
                    defaultCountry="ae"
                    value={phone}
                    onChange={setPhone}
                    inputClassName="w-full h-full !h-[37px] !border-l-0"
                    countrySelectorStyleProps={{
                      className: "border border-gray-300 rounded-l-lg bg-white hover:bg-gray-50"
                    }}
                    dialCodePreviewStyleProps={{
                      className: "text-gray-600 px-2"
                    }}
                    placeholder="Enter phone number"
                  />
                  {!phone && (
                    <p className="mt-1 text-sm text-red-600">Phone number is required</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={5}
                    className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your property and your goals..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !phone}
                  className="w-full flex items-center justify-center gap-2 py-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Thank you! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700"
                  >
                    <AlertCircle className="w-5 h-5" />
                    Something went wrong. Please try again or call us directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What to Expect
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Free Consultation",
                      description: "No-obligation discussion about your property's potential"
                    },
                    {
                      title: "Market Analysis",
                      description: "Detailed revenue projections for your specific property"
                    },
                    {
                      title: "Custom Strategy",
                      description: "Tailored management plan to maximize your returns"
                    },
                    {
                      title: "Quick Response",
                      description: "We'll contact you within 24 hours of your inquiry"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{benefit.title}</div>
                        <div className="text-gray-600 text-sm">{benefit.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-white/50">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">90+</div>
                      <div className="text-sm text-gray-600">Properties Managed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24hr</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
