import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-teal-950 to-teal-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all flex-shrink-0">
                <img 
                  src="/images/ADHYASHAKTI_LOGO.png" 
                  alt="Aadhyashakti Travels Logo" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-white tracking-tight">Aadhyashakti</h1>
                <p className="text-xs text-emerald-400">Travels & Tours</p>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Trusted by 12,000+ travellers across Gujarat. Premium car rentals, curated tours, and 24/7 support.
            </p>
            <div className="text-sm text-gray-300 space-y-1">
              <p>📞 +91 9000 000 000</p>
              <p>📧 hello@aadhyashakti.com</p>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#fleet" className="text-gray-400 hover:text-emerald-400 transition-colors">Our Fleet</a></li>
              <li><a href="#tours" className="text-gray-400 hover:text-emerald-400 transition-colors">Tour Packages</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-emerald-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Corporate Travel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Wedding Trips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Custom Tours</a></li>
            </ul>
          </div>

          {/* Top Routes */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Top Routes</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Somnath Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Dwarka Pilgrimage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Statue of Unity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Gir Wildlife</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>Made with ❤️ in Gujarat · &copy; {currentYear} Aadhyashakti Travels</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
