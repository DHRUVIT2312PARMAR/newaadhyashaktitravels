import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    pickup: '',
    drop: '',
    date: '',
    details: ''
  })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Booking request sent! We\'ll contact you shortly.')
  }

  return (
    <section id="contact" className="py-8 md:py-20 bg-gradient-to-br from-teal-900 to-teal-800 relative overflow-hidden">
      {/* Decorative Element */}
      <div className="hidden md:block absolute -top-40 -right-40 w-80 h-80 bg-teal-700/20 rounded-full blur-3xl" />
      <div className="hidden md:block absolute -bottom-40 -left-40 w-80 h-80 bg-teal-700/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left - Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2 md:space-y-3">
              <p className="text-emerald-400 font-bold text-xs md:text-sm uppercase tracking-widest">📍 Book A Ride</p>
              <h2 className="text-2xl md:text-5xl font-bold text-white">
                Tell us your trip,<br />
                we'll handle the <span className="text-emerald-400">rest.</span>
              </h2>
              <p className="text-gray-100 text-sm md:text-lg leading-relaxed">
                Fill the form and a real human gets back within 15 minutes with a transparent quote — no auto bots, no hidden fees.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 text-white text-sm md:text-base">
                <span className="text-lg">✓</span>
                <span className="font-medium">Instant WhatsApp confirmation</span>
              </div>
              <div className="flex items-center gap-3 text-white text-sm md:text-base">
                <span className="text-lg">✓</span>
                <span className="font-medium">Free cancellation up to 24h</span>
              </div>
              <div className="flex items-center gap-3 text-white text-sm md:text-base">
                <span className="text-lg">✓</span>
                <span className="font-medium">Pay 20% advance, rest after trip</span>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-2 md:space-y-3">
              <a href="tel:+919000000000" className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors">
                <Phone size={20} className="text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">+91 90000 00000</span>
              </a>
              <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors">
                <MessageCircle size={20} className="text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">Chat instantly</span>
              </a>
              <div className="flex items-center gap-3 text-gray-200">
                <MapPin size={20} className="text-emerald-400 flex-shrink-0" />
                <span className="text-sm md:text-base">CG Road, Ahmedabad 380009</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Book Your Ride</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone / WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-sm"
                />
              </div>

              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-sm"
              >
                <option value="">Choose vehicle</option>
                <option>Sedan (4 seater)</option>
                <option>SUV (6 seater)</option>
                <option>Tempo (12+ seater)</option>
              </select>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup location"
                  value={formData.pickup}
                  onChange={handleChange}
                  className="px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-sm"
                />
                <input
                  type="text"
                  name="drop"
                  placeholder="Drop location"
                  value={formData.drop}
                  onChange={handleChange}
                  className="px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-sm"
                />
              </div>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-sm"
              />

              <textarea
                name="details"
                placeholder="Number of passengers, stops, return date..."
                value={formData.details}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition resize-none text-sm"
              />

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold rounded-lg hover:shadow-xl transition-all text-sm md:text-base"
              >
                Request booking
              </button>

              <p className="text-xs text-center text-gray-600">
                By submitting you agree to be contacted on the phone number provided.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
