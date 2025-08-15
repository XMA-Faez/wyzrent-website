import { MessageSquare, Search, CheckCircle, Camera, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Reach Out to Our Team",
      description: "Contact us with details about your property, and we'll guide you from the very first conversation.",
      icon: MessageSquare
    },
    {
      step: 2,
      title: "We Assess Your Property",
      description: "A thorough, professional evaluation to ensure everything meets our world-class standards.",
      icon: Search
    },
    {
      step: 3,
      title: "Approve & Begin Onboarding",
      description: "Once you approve, we seamlessly handle all onboarding procedures.",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Showcase & Market Your Property",
      description: "We create high-impact listings with premium photography and position your property across top platforms for maximum visibility.",
      icon: Camera
    },
    {
      step: 5,
      title: "Sit Back & Enjoy the Returns",
      description: "Effortless property income, managed to perfection — with transparent monitoring and timely payouts.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process makes property management effortless, from initial contact to consistent returns.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div 
                key={step.step}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-black">
                      Step {step.step} – {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon/Visual */}
                <div className={`flex justify-center ${isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <Icon className="w-16 h-16 lg:w-20 lg:h-20 text-blue-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Journey Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}