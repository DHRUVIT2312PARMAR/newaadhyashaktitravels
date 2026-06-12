import { Check, Award, Users, Heart, Zap, Shield } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Trusted by thousands since 2009. Industry leaders in Gujarat travel.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Expert Drivers',
      description: 'Background-checked professionals with 5+ years avg experience. Always courteous.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Vehicle Safety',
      description: 'Regular maintenance, insurance coverage, and GPS tracking on every vehicle.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Zap,
      title: '2-Minute Booking',
      description: 'Simple online booking. No paperwork. Instant WhatsApp confirmation.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Heart,
      title: '24/7 Support',
      description: 'Dedicated support team available on call, WhatsApp, and email anytime.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Check,
      title: 'Transparent Pricing',
      description: 'No hidden charges. Pay only for distance. Free cancellation within 24h.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-teal-600 font-bold text-sm uppercase tracking-widest">✨ Why Choose Us</p>
          <h2 className="text-5xl font-bold text-gray-900">
            We're not just a <span className="text-teal-600">cab service</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We're your trusted travel partner. Every detail is crafted for your safety, comfort, and peace of mind.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <div key={i} className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to book your journey?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 12,000+ happy travelers. Get your instant quote and confirmation in 2 minutes.
          </p>
          <button className="px-10 py-4 bg-white text-teal-600 font-bold rounded-lg hover:shadow-2xl transition-all transform hover:scale-105 text-lg">
            Book Now → 
          </button>
        </div>
      </div>
    </section>
  )
}
