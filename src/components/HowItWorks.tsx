import { MapPin, Calendar, DollarSign, Check } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: MapPin,
      title: 'Enter Your Route',
      description: 'Tell us where you want to go. Pick from popular routes or enter custom locations.'
    },
    {
      number: 2,
      icon: Calendar,
      title: 'Choose Date & Vehicle',
      description: 'Select your preferred date and vehicle type. We show availability in real-time.'
    },
    {
      number: 3,
      icon: DollarSign,
      title: 'Get Quote',
      description: 'See your instant quote with no hidden charges. Transparent pricing always.'
    },
    {
      number: 4,
      icon: Check,
      title: 'Confirm & Enjoy',
      description: 'Book with one click. Get WhatsApp confirmation. Driver details within 1 hour.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-teal-600 font-bold text-sm uppercase tracking-widest">📋 Simple Process</p>
          <h2 className="text-5xl font-bold text-gray-900">
            How it <span className="text-teal-600">works</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Booking is easy. Just 4 simple steps from browsing to driving.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[50%] w-[200%] h-1 bg-gradient-to-r from-teal-600 to-transparent" />
                )}

                {/* Card */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-teal-600 hover:shadow-lg transition-all h-full relative z-10">
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="text-teal-600" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ Preview */}
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border-2 border-teal-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">❓ What if I need to cancel?</h4>
                  <p className="text-gray-600 text-sm">Free cancellation up to 24 hours before booking. Full refund guaranteed.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">❓ Are drivers experienced?</h4>
                  <p className="text-gray-600 text-sm">Yes! All drivers are background-checked with 5+ years avg experience.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">❓ Can I track my vehicle?</h4>
                  <p className="text-gray-600 text-sm">Yes! Real-time GPS tracking on every vehicle. Share live location with family.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h3>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 border-2 border-teal-300 transition-all text-left flex items-center justify-between">
                  <span>📞 Call Us</span>
                  <span className="text-teal-600">+91 9000 000 000</span>
                </button>
                <button className="w-full px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 border-2 border-teal-300 transition-all text-left flex items-center justify-between">
                  <span>💬 WhatsApp</span>
                  <span className="text-teal-600">Chat Now</span>
                </button>
                <button className="w-full px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 border-2 border-teal-300 transition-all text-left flex items-center justify-between">
                  <span>📧 Email</span>
                  <span className="text-teal-600">hello@aadhyashakti.com</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
