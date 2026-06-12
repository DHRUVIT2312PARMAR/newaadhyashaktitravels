import { imageData } from '../utils/imageData'

export default function Tours() {
  const tours = [
    {
      id: 1,
      name: 'Somnath Darshan',
      location: 'Somnath · Bhalkha · Juneri Sangam',
      duration: '2 Days | 1 Night',
      price: '₹6,499',
      badge: 'Most Popular',
      icon: '🏛️',
      color: 'from-orange-400 to-orange-500',
      features: ['AC vehicle', 'Fuel & tolls', '1 night hotel'],
      image: imageData.somnathImage
    },
    {
      id: 2,
      name: 'Dwarka Pilgrimage',
      location: 'Dwarka · Bet Dwarka · Nageshwar',
      duration: '2 Days',
      price: '₹9,999',
      badge: 'Best Seller',
      icon: '🛕',
      color: 'from-blue-500 to-blue-600',
      features: ['AC vehicle', 'Fuel & tolls', 'Ferry tickets', 'Lunch package'],
      image: imageData.dwarkaImage
    },
    {
      id: 3,
      name: 'Statue of Unity Trip',
      location: 'Kevadia · Sardar Sarovar · Valley of Flowers',
      duration: '1 Day',
      price: '₹3,799',
      badge: 'Weekend Special',
      icon: '🗿',
      color: 'from-green-400 to-emerald-500',
      features: ['AC vehicle', 'Entry tickets', 'Lunch package'],
      image: imageData.statueImage
    }
  ]

  return (
    <section id="tours" className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 md:mb-12 gap-4 md:gap-0">
          <div className="space-y-2 md:space-y-3 text-center md:text-left">
            <p className="text-teal-600 font-bold text-xs md:text-sm uppercase tracking-widest">✈️ Curated Trips</p>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
              Popular <span className="text-teal-600">Gujarat</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl">
              All inclusive packages with vehicle, fuel, driver and toll covered.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-gray-400 transition-colors whitespace-nowrap">
            Customize a tour
          </button>
        </div>

        {/* Tours Grid - Mobile optimized */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 group">
              {/* Image Section */}
              <div className={`relative bg-gradient-to-br ${tour.color} h-32 md:h-64 flex items-center justify-center overflow-hidden text-white`}>
                <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">
                    {tour.badge}
                  </span>
                </div>
                {/* Tour Image */}
                <img 
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'block'
                  }}
                />
                {/* Fallback Icon */}
                <div className="hidden absolute inset-0 flex items-center justify-center text-4xl md:text-8xl group-hover:scale-110 transition-transform duration-300">{tour.icon}</div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-6 space-y-3 md:space-y-4">
                {/* Title & Location */}
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900">{tour.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600 flex items-start gap-1 mt-1 md:mt-2">
                    <span className="text-teal-600 flex-shrink-0">📍</span>
                    <span className="line-clamp-2">{tour.location}</span>
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="text-teal-600">⏱️</span>
                  <span>{tour.duration}</span>
                </div>

                {/* Features - Mobile optimized */}
                <div className="space-y-1 md:space-y-2 border-t border-gray-200 pt-2 md:pt-4">
                  {tour.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                      <span className="text-teal-600 text-sm md:text-lg">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-2 md:pt-4 border-t border-gray-200 gap-3">
                  <div>
                    <p className="text-xs text-gray-600 font-medium">From</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">{tour.price}</p>
                  </div>
                  <button className="px-3 md:px-4 py-2 bg-teal-600 text-white font-bold text-xs md:text-sm rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap">
                    Book trip →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customize CTA - Mobile button */}
        <button className="md:hidden w-full mt-6 px-6 py-3 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-gray-400 transition-colors">
          Customize a tour
        </button>
      </div>
    </section>
  )
}
