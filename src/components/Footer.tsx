import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about/portfolio' },
      { label: 'Services', path: '/services' },
      { label: 'Contact', path: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Security', path: '/security' }
    ]
  };


  return (
    <>
      <style>{`
        footer input::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        footer input:focus::placeholder {
          color: rgba(255, 255, 255, 0.4) !important;
        }
      `}</style>
      <footer
        className="border-t backdrop-blur-md"
        style={{
          background: 'linear-gradient(90deg, #0B0F1A, #121826)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255,255,255,0.08)'
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h4 className="mb-3 font-semibold text-sm sm:text-base" style={{ color: '#ffffff' }}>AlgoTells</h4>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed" style={{ color: '#ffffff', opacity: 0.9 }}>
              Pioneering AI and GPU optimization solutions that transform businesses across industries. Empowering innovation through cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5 sm:space-y-2">
              <a href="mailto:hi@algotells.com" className="flex items-center gap-2 transition-colors font-medium text-xs sm:text-sm break-all" style={{ color: '#ffffff' }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#B57EDC';
                e.currentTarget.style.textShadow = '0 0 8px rgba(181, 126, 220, 0.5)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.textShadow = 'none';
              }}>
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: '#ffffff' }} />
                <span>hi@algotells.com</span>
              </a>
              <a href="tel:+919879245045" className="flex items-center gap-2 transition-colors font-medium text-xs sm:text-sm" style={{ color: '#ffffff' }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#B57EDC';
                e.currentTarget.style.textShadow = '0 0 8px rgba(181, 126, 220, 0.5)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.textShadow = 'none';
              }}>
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: '#ffffff' }} />
                <span>+91 98792 45045</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-2 sm:mb-3 font-semibold text-sm sm:text-base" style={{ color: '#ffffff' }}>Navigation</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="transition-colors font-medium text-xs sm:text-sm" style={{ color: '#ffffff' }} onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#B57EDC';
                    e.currentTarget.style.textShadow = '0 0 8px rgba(181, 126, 220, 0.5)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.textShadow = 'none';
                  }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-2 sm:mb-3 font-semibold text-sm sm:text-base" style={{ color: '#ffffff' }}>Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="transition-colors font-medium text-xs sm:text-sm" style={{ color: '#ffffff' }} onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#B57EDC';
                    e.currentTarget.style.textShadow = '0 0 8px rgba(181, 126, 220, 0.5)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.textShadow = 'none';
                  }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
            <div>
              <h3 className="mb-2 font-semibold text-lg sm:text-xl" style={{ color: 'var(--text-dark)' }}>Stay Updated</h3>
              <p className="text-sm sm:text-base" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Get the latest insights on AI, GPU optimization, and industry trends.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border transition-all text-sm sm:text-base" 
                style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)', color: 'var(--text-dark)' }}
              />
              <motion.button
                className="px-6 py-3 rounded-xl border text-white transition-colors whitespace-nowrap font-semibold text-sm sm:text-base purple-shadow hover:purple-shadow-lg" 
                style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-4 sm:mb-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          {/* Copyright */}
          <div className="text-xs sm:text-sm text-center md:text-left" style={{ color: '#ffffff', opacity: 0.8 }}>
            © {currentYear} <span className="font-bold tracking-wide">AlgoTells</span>. All rights reserved. Built with AI-powered excellence.
          </div>
        </div>

      </div>
    </footer>
    </>
  );
}
