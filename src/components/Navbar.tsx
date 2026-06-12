import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Mobile Optimized */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 md:w-10 h-9 md:h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm md:text-base">AT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-gray-900 text-sm md:text-base">Aadhyashakti</h1>
              <p className="text-xs text-teal-600 font-semibold">Travels</p>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#fleet" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Fleet</a>
            <a href="#tours" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Tours</a>
            <a href="#gallery" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Gallery</a>
            <a href="#reviews" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <button className="hidden sm:block px-4 md:px-6 py-2 bg-teal-600 text-white text-xs md:text-sm font-bold rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg">
              Book Now
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md py-4 space-y-2 animate-in fade-in">
            <a href="#fleet" className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 rounded-lg font-medium text-sm">Fleet</a>
            <a href="#tours" className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 rounded-lg font-medium text-sm">Tours</a>
            <a href="#gallery" className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 rounded-lg font-medium text-sm">Gallery</a>
            <a href="#reviews" className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 rounded-lg font-medium text-sm">Reviews</a>
            <a href="#contact" className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 rounded-lg font-medium text-sm">Contact</a>
            <button className="w-full mx-4 px-4 py-2.5 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all text-sm">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
