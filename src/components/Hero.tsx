import { useState } from 'react'
import { MapPin, Calendar, Users, ArrowRight, Check, Phone } from 'lucide-react'
import { imageData } from '../utils/imageData'

export default function Hero() {
  const [bookingData, setBookingData] = useState({
    vehicle: '',
    pickup: '',
    drop: '',
    date: '',
    passengers: ''
  })

  const handleBookingChange = (field: string, value: string) => {
    setBookingData({ ...bookingData, [field]: value })
  }

  const handleBookingSubmit = (e: any) => {
    e.preventDefault()
    alert('Booking request sent! We\'ll contact you shortly.')
  }

  const vehicles = ['Sedan (₹12/km)', 'SUV (₹18/km)', 'Tempo (₹26/km)']
  const popularRoutes = [
    { name: 'Ahmedabad → Somnath', distance: '320 km' },
    { name: 'Ahmedabad → Dwarka', distance: '390 km' },
    { name: 'Surat → Statue of Unity', distance: '185 km' },
    { name: 'Airport Transfer', distance: 'City' }
  ]

  return (
    <section className="relative pt-24 pb-8 md:pb-32 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 overflow-hidden">
      {/* Background Image - Mobile optimized opacity */}
      <img 
        src={imageData.heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-30"
      />
      
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
      
      {/* Decorative Gradient Orbs - Hidden on mobile */}
      <div className="hidden md:block absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl animate-pulse" />
      <div className="hidden md:block absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile-First Layout */}
        <div className="space-y-6 md:space-y-12">
          {/* Content - Mobile First */}
          <div className="space-y-4 md:space-y-8">
            {/* Logo - Centered above headline */}
            <div className="flex justify-center">
              <div className="w-40 h-40 md:w-72 md:h-72 bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl flex items-center justify-center shadow-2xl border border-teal-600">
                <img 
                  src="/images/ADHYASHAKTI_LOGO.png" 
                  alt="Aadhyashakti Travels Logo" 
                  className="w-36 md:w-64 h-36 md:h-64 object-contain"
                />
              </div>
            </div>

            {/* Main Headline - Mobile optimized */}
            <div className="space-y-3 md:space-y-6 text-center md:text-left">
              <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                Your journey,<br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">our expertise.</span>
              </h1>
              <p className="text-base md:text-xl text-gray-100 leading-relaxed max-w-lg font-light mx-auto md:mx-0">
                Premium vehicles, verified drivers. Book in 2 minutes.
              </p>
            </div>

            {/* Quick Stats - Mobile Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
                <p className="text-emerald-400 text-xs font-bold uppercase">🚗 Fleet</p>
                <p className="text-2xl md:text-3xl font-bold text-white mt-1">40+</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
                <p className="text-emerald-400 text-xs font-bold uppercase">😊 Users</p>
                <p className="text-2xl md:text-3xl font-bold text-white mt-1">12K+</p>
              </div>
            </div>

            {/* CTA Buttons - Mobile Stacked */}
            <div className="flex flex-col md:flex-row gap-3 pt-2 md:pt-4">
              <button className="w-full md:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 group text-sm md:text-base">
                <span>Book Now</span>
                <ArrowRight size={16} md={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+919000000000" className="w-full md:w-auto px-6 md:px-8 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Booking Widget - Below content on mobile, side on desktop */}
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-white/50 md:max-w-md lg:max-w-none">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">📍 Book Your Ride</h3>
            
            <form onSubmit={handleBookingSubmit} className="space-y-3 md:space-y-4">
              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs md:text-sm font-bold text-gray-700 mb-1.5">Vehicle Type</label>
                <select
                  value={bookingData.vehicle}
                  onChange={(e) => handleBookingChange('vehicle', e.target.value)}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none text-gray-900 font-medium text-sm"
                  required
                >
                  <option value="">Select vehicle</option>
                  {vehicles.map((v, i) => (
                    <option key={i} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Pickup & Drop - Side by side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-700 mb-1.5">📍 From</label>
                  <input
                    type="text"
                    placeholder="Pickup"
                    value={bookingData.pickup}
                    onChange={(e) => handleBookingChange('pickup', e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none text-gray-900 font-medium text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-700 mb-1.5">📍 To</label>
                  <input
                    type="text"
                    placeholder="Drop"
                    value={bookingData.drop}
                    onChange={(e) => handleBookingChange('drop', e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none text-gray-900 font-medium text-sm"
                    required
                  />
                </div>
              </div>

              {/* Popular Routes - Horizontal scroll on mobile */}
              <div className="bg-gray-50 rounded-lg p-2 md:p-3">
                <p className="text-xs font-bold text-gray-600 mb-2">Popular routes</p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {popularRoutes.map((route, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        const [from, to] = route.name.split(' → ')
                        handleBookingChange('pickup', from)
                        handleBookingChange('drop', to)
                      }}
                      className="flex-shrink-0 px-3 py-2 text-xs bg-white rounded border border-teal-200 hover:bg-teal-50 whitespace-nowrap font-semibold text-gray-700"
                    >
                      {route.name.split(' → ')[0]} → {route.name.split(' → ')[1]?.substring(0, 5)}...
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Passengers - Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-700 mb-1.5">📅 Date</label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => handleBookingChange('date', e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none text-gray-900 font-medium text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-700 mb-1.5">👥 Passengers</label>
                  <select
                    value={bookingData.passengers}
                    onChange={(e) => handleBookingChange('passengers', e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none text-gray-900 font-medium text-sm"
                    required
                  >
                    <option value="">Select</option>
                    <option value="1-2">1-2</option>
                    <option value="3-5">3-5</option>
                    <option value="6-10">6-10</option>
                    <option value="10+">10+</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-sm md:text-base"
              >
                Get Quote → 
              </button>

              <p className="text-xs text-center text-gray-600">
                ✓ Free cancellation 24h before
              </p>
            </form>
          </div>

          {/* Bottom Social Proof - Mobile Grid */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center">
              <div>
                <p className="text-2xl md:text-4xl font-bold text-emerald-300">4.9⭐</p>
                <p className="text-white text-xs md:text-sm mt-1">Reviews</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-cyan-300">3.2M</p>
                <p className="text-white text-xs md:text-sm mt-1">Km Driven</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-emerald-300">15+</p>
                <p className="text-white text-xs md:text-sm mt-1">Years</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-cyan-300">24/7</p>
                <p className="text-white text-xs md:text-sm mt-1">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
