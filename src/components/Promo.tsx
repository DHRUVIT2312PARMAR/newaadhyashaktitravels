import { ArrowRight, Zap, Gift, Clock } from 'lucide-react'

export default function Promo() {
  const offers = [
    {
      icon: Zap,
      title: 'First Booking',
      subtitle: '5% OFF',
      description: 'Use code WELCOME5 on your first booking'
    },
    {
      icon: Gift,
      title: 'Referral Bonus',
      subtitle: '₹500 CREDIT',
      description: 'Share with friends, earn credits on every referral'
    },
    {
      icon: Clock,
      title: 'Last Minute',
      subtitle: '10% OFF',
      description: 'Book same-day rides and get instant discount'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {offers.map((offer, i) => {
            const Icon = offer.icon
            return (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">{offer.title}</p>
                    <p className="text-2xl font-bold text-white">{offer.subtitle}</p>
                    <p className="text-white/70 text-xs mt-1">{offer.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Don't miss out on exclusive offers!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Limited time offers for new and returning customers. Book your next trip now.
          </p>
          <button className="px-10 py-4 bg-white text-teal-600 font-bold rounded-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2 mx-auto text-lg group">
            <span>Book Now & Save</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
