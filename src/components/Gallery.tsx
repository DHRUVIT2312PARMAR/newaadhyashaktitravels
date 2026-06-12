import { useState } from 'react'
import { X } from 'lucide-react'
import { imageData } from '../utils/imageData'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    { id: 1, category: 'vehicles', title: 'Premium Sedan', image: imageData.sedanImage, emoji: '🚗' },
    { id: 2, category: 'tours', title: 'Somnath Temple', image: imageData.somnathImage, emoji: '🏛️' },
    { id: 3, category: 'customers', title: 'Happy Travelers', image: imageData.gallery3, emoji: '👨‍👩‍👧‍👦' },
    { id: 4, category: 'vehicles', title: 'Luxury SUV', image: imageData.suvImage, emoji: '🚙' },
    { id: 5, category: 'tours', title: 'Dwarka Journey', image: imageData.dwarkaImage, emoji: '🛕' },
    { id: 6, category: 'tours', title: 'Dwarka Temple Tour', image: imageData.dwarkaImage, emoji: '🏞️' },
    { id: 7, category: 'customers', title: 'Family Adventures', image: imageData.gallery7, emoji: '👨‍👩‍👧‍👦' },
    { id: 8, category: 'vehicles', title: 'Group Travel', image: imageData.travellerImage, emoji: '🚌' },
    { id: 9, category: 'tours', title: 'Statue of Unity', image: imageData.statueImage, emoji: '🗿' },
  ]

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Vehicles', value: 'vehicles' },
    { label: 'Tours', value: 'tours' },
    { label: 'Customers', value: 'customers' },
  ]

  const filtered = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="py-8 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 space-y-2 md:space-y-3">
          <p className="text-teal-600 font-bold text-xs md:text-sm uppercase tracking-widest">📸 Our Moments</p>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
            Capture the <span className="text-teal-600">journey</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Browse our collection of vehicle photos, tour highlights, and happy traveller moments.
          </p>
        </div>

        {/* Filter Buttons - Mobile Scrollable */}
        <div className="flex justify-center gap-2 md:gap-3 mb-8 md:mb-12 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all ${
                activeFilter === filter.value
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-teal-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid - Mobile optimized */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(index)}
              className={`group cursor-pointer relative overflow-hidden rounded-lg md:rounded-2xl bg-white border-2 border-gray-200 hover:border-teal-600 transition-all duration-300 ${
                index === 0 || index === 4 ? 'md:col-span-1 md:row-span-2 h-64' : 'h-32 md:h-48'
              }`}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%230d9488' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${item.emoji}%3C/text%3E%3C/svg%3E`
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 md:p-3 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Content */}
            <div className="max-w-4xl w-full">
              <img 
                src={filtered[selectedImage].image}
                alt={filtered[selectedImage].title}
                className="w-full h-auto rounded-lg md:rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%230d9488' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='72' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${filtered[selectedImage].emoji}%3C/text%3E%3C/svg%3E`
                }}
              />
              <div className="mt-4 md:mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{filtered[selectedImage].title}</h3>
                <p className="text-gray-300 capitalize text-sm md:text-base">{filtered[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
