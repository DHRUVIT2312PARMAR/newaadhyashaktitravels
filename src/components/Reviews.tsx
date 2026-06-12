export default function Reviews() {
  const reviews = [
    {
      name: 'Priya Mehta',
      role: 'Ahmedabad · Dwarka · Somnath · Tempo Traveller',
      text: '"Booked a traveller for our Dwarka-Somnath trip. Spotless vehicle and Rakesh bhai is the kindest driver — felt like family."',
      avatar: '👩‍🦰'
    },
    {
      name: 'Arjun Patel',
      role: 'Surat · Corporate pickups · Innova Crysta',
      text: '"Used them three times for client pickups. Always on time, billing is clean, and the Innova was brand new. Highly recommend."',
      avatar: '👨‍💼'
    },
    {
      name: 'Hetal & Nikhil',
      role: 'Vadodara · Statue of Unity trip · Sedan',
      text: '"Our Statue of Unity day-trip was perfectly planned. They even helped us with tickets. Worth every rupee."',
      avatar: '👨‍🤝‍👨'
    }
  ]

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-teal-600 font-bold text-sm uppercase tracking-widest">TRAVELLERS LOVE US</p>
          <h2 className="text-5xl font-bold text-gray-900">
            <span className="text-gray-900">4.9 stars</span> · <span className="text-teal-600">2,400+ reviews</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Trusted by 12,000+ travellers across Gujarat
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-lg">⭐</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-800 text-base leading-relaxed mb-6 font-medium">
                {review.text}
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-3xl">{review.avatar}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
