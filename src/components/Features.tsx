import { Users, BarChart3, Shield, Zap, Clock, TrendingUp } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights into fleet performance, utilization rates, and revenue optimization.'
    },
    {
      icon: Users,
      title: 'Professional Drivers',
      description: 'Vetted, trained professionals with extensive experience in premium fleet management.'
    },
    {
      icon: Shield,
      title: 'Complete Protection',
      description: 'Comprehensive insurance, GPS tracking, and emergency support 24/7.'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Seamless reservation system with real-time availability and instant confirmations.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Dedicated customer support team available round the clock for assistance.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Scalable solutions designed to grow with your business needs.'
    }
  ]

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 max-w-3xl">
          <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Solutions</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900">
            Enterprise-Grade Fleet Management
          </h3>
          <p className="text-lg text-slate-600">
            Designed for businesses that demand excellence. Our comprehensive platform handles every aspect of modern vehicle rental operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="group">
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 text-white group-hover:shadow-xl group-hover:shadow-slate-900/30 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-slate-200 to-transparent mt-6" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
