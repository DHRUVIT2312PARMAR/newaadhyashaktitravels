import { Shield, Fuel, Users, Music, MapPin } from 'lucide-react'
import { imageData } from '../utils/imageData'

export default function Vehicles() {
  const vehicles = [
    {
      id: 1,
      name: 'Sedan',
      models: 'Etios / Dzire',
      category: 'City & Airport',
      price: '₹12',
      unit: '/km',
      specs: '4+1 • AC • Diesel',
      features: ['🛰️ GPS', '👤 Driver', '❄️ AC', '🎵 Music'],
      badge: 'Most Booked',
      icon: '🚗',
      color: 'from-emerald-300 to-emerald-200',
      mileage: '~15 km/l',
      bestFor: 'Couples, solo travelers',
      luggageCapacity: '200 liters',
      image: imageData.sedanImage
    },
    {
      id: 2,
      name: 'SUV',
      models: 'Innova Crysta',
      category: 'Family Tours',
      price: '₹18',
      unit: '/km',
      specs: '6+1 • AC • Diesel',
      features: ['🛰️ GPS', '👤 Driver', '❄️ AC', '🎵 Music'],
      badge: 'Best Seller',
      icon: '🚙',
      color: 'from-teal-300 to-emerald-300',
      mileage: '~11 km/l',
      bestFor: 'Families, small groups',
      luggageCapacity: '350 liters',
      image: imageData.suvImage
    },
    {
      id: 3,
      name: 'Tempo Traveller',
      models: '17 Seater',
      category: 'Groups & Pilgrimage',
      price: '₹26',
      unit: '/km',
      specs: '17+1 • AC • Diesel',
      features: ['🛰️ GPS', '👤 Driver', '❄️ AC', '📱 Charging'],
      badge: 'Weekend Special',
      icon: '🚐',
      color: 'from-cyan-300 to-teal-300',
      mileage: '~8 km/l',
      bestFor: 'Large groups, tours',
      luggageCapacity: '600 liters',
      image: imageData.travellerImage
    }
  ]

  return (
    <section id="fleet" className="py-8 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-6 md:mb-16 space-y-2 md:space-y-3">
          <p className="text-teal-600 font-bold text-xs md:text-sm uppercase tracking-widest">🚗 Our Fleet</p>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
            A vehicle for <span className="text-teal-600">every trip</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
            Verified drivers. GPS tracking. Air conditioning on all vehicles.
          </p>
        </div>

        {/* Grid - Single column on mobile */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg md:hover:shadow-2xl hover:border-teal-300 transition-all">
              {/* Image Section */}
              <div className={`relative bg-gradient-to-br ${vehicle.color} h-32 md:h-56 flex items-center justify-center overflow-hidden`}>
                {/* Badge */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full shadow-lg">
                    {vehicle.badge}
                  </span>
                </div>
                {/* Vehicle Image */}
                <img 
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'block'
                  }}
                />
                {/* Fallback Icon */}
                <div className="hidden absolute inset-0 flex items-center justify-center text-5xl md:text-9xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{vehicle.icon}</div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-6 space-y-3 md:space-y-4">
                {/* Title */}
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600 mt-0.5">{vehicle.models}</p>
                  <p className="text-teal-600 text-xs md:text-sm font-bold mt-1">{vehicle.category}</p>
                </div>

                {/* Key Info - Mobile Grid */}
                <div className="grid grid-cols-2 gap-2 md:gap-3 py-2 md:py-4 border-y border-gray-200">
                  <div className="bg-gray-50 rounded-lg p-2 md:p-3 text-center">
                    <p className="text-xs text-gray-600 font-medium">Best For</p>
                    <p className="text-xs md:text-sm font-bold text-gray-900 mt-0.5">{vehicle.bestFor}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 md:p-3 text-center">
                    <p className="text-xs text-gray-600 font-medium">Luggage</p>
                    <p className="text-xs md:text-sm font-bold text-gray-900 mt-0.5">{vehicle.luggageCapacity}</p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-600 uppercase">Specs</p>
                  <div className="flex gap-2 text-xs">
                    <div className="flex items-center gap-1 text-gray-700">
                      <span className="text-lg">👥</span>
                      <span>{vehicle.specs.split('•')[0].trim()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-700">
                      <span className="text-lg">⛽</span>
                      <span className="hidden md:inline">{vehicle.mileage}</span>
                    </div>
                  </div>
                </div>

                {/* Features - Horizontal scroll on mobile */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-600 uppercase">Features</p>
                  <div className="flex gap-2 flex-wrap">
                    {vehicle.features.map((feature, i) => (
                      <span key={i} className="px-2 md:px-3 py-1 md:py-1.5 bg-emerald-50 text-teal-700 text-xs font-bold rounded-lg border border-emerald-200">
                        {feature.substring(0, 6)}...
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price Section */}
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-3 md:p-4 border border-teal-200">
                  <p className="text-xs text-gray-600 font-medium">Starting from</p>
                  <p className="text-2xl md:text-3xl font-bold text-teal-600 mt-1">
                    {vehicle.price}
                    <span className="text-xs md:text-sm text-gray-600">{vehicle.unit}</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">✓ Driver included</p>
                </div>

                {/* Buttons - Stacked on mobile */}
                <div className="flex gap-2 md:gap-3 pt-1 md:pt-2">
                  <button className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-white border-2 border-gray-300 text-gray-900 font-bold text-xs md:text-sm rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all">
                    Details
                  </button>
                  <button className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-xs md:text-sm rounded-lg hover:shadow-lg transition-all">
                    Book →
                  </button>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-center gap-2 pt-1 text-xs font-bold">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-emerald-600">AVAILABLE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us - Mobile Optimized */}
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl md:rounded-2xl p-4 md:p-8 border border-teal-200">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-8 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="text-center">
              <div className="inline-block p-2 md:p-3 bg-white rounded-full shadow-md mb-2 md:mb-3">
                <Shield size={20} md={28} className="text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-xs md:text-base mb-1 md:mb-2">Verified</h4>
              <p className="text-xs text-gray-600">Background-checked drivers</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-2 md:p-3 bg-white rounded-full shadow-md mb-2 md:mb-3">
                <MapPin size={20} md={28} className="text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-xs md:text-base mb-1 md:mb-2">Tracked</h4>
              <p className="text-xs text-gray-600">Real-time GPS on all</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-2 md:p-3 bg-white rounded-full shadow-md mb-2 md:mb-3">
                <Fuel size={20} md={28} className="text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-xs md:text-base mb-1 md:mb-2">Transparent</h4>
              <p className="text-xs text-gray-600">No hidden charges</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-2 md:p-3 bg-white rounded-full shadow-md mb-2 md:mb-3">
                <Users size={20} md={28} className="text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-xs md:text-base mb-1 md:mb-2">Support</h4>
              <p className="text-xs text-gray-600">24/7 on WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
