import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about/portfolio', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{
        background: 'linear-gradient(90deg, #0B0F1A, #121826)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Brand/Logo */}
          <Link
            to="/"
            className="flex items-center mr-8"
          >
            <motion.span
              className="text-xl sm:text-2xl font-bold tracking-wide"
              style={{ color: '#ffffff' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AlgoTells
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setActiveDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                    }}
                  >
                    <button
                      className="flex items-center gap-1 transition-colors font-medium"
                      style={{ color: '#ffffff' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#B57EDC';
                        e.currentTarget.style.textShadow = '0 0 8px rgba(181, 126, 220, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.textShadow = 'none';
                      }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.label}
                      </motion.span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          onMouseEnter={() => {
                            setActiveDropdown(item.label);
                          }}
                          onMouseLeave={() => {
                            setActiveDropdown(null);
                          }}
                          className={`absolute top-full left-0 mt-2 glass-effect rounded-xl overflow-visible max-h-[80vh] overflow-y-auto z-50 purple-shadow-lg ${item.label === 'About Us' ? 'w-48 xl:w-56 p-2 flex flex-col gap-2' : 'w-56 xl:w-64'
                            }`}
                          style={{ borderColor: 'var(--border)' }}
                        >
                          {item.dropdown.map((subItem, subIndex) => {
                            // Regular dropdown item
                            if (!(subItem as any).path) return null;
                            return (
                              <Link
                                key={(subItem as any).path}
                                to={(subItem as any).path}
                                onClick={handleLinkClick}
                                className={`block transition-colors ${item.label === 'AI for Industry' ? 'whitespace-nowrap' : ''} ${item.label === 'About Us' ? 'px-4 py-2 rounded-lg' : 'px-4 py-3'
                                  }`}
                                style={{ 
                                  color: location.pathname === (subItem as any).path ? '#B57EDC' : '#ffffff',
                                  backgroundColor: location.pathname === (subItem as any).path ? 'rgba(181, 126, 220, 0.1)' : 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                  if (location.pathname !== (subItem as any).path) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.color = '#B57EDC';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (location.pathname !== (subItem as any).path) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#ffffff';
                                  }
                                }}
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="relative transition-colors font-medium"
                    style={{ color: location.pathname === item.path ? '#B57EDC' : '#ffffff' }}
                    onMouseEnter={(e) => {
                      if (location.pathname !== item.path) {
                        e.currentTarget.style.color = '#B57EDC';
                        e.currentTarget.style.textShadow = '0 0 8px rgba(181, 126, 220, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (location.pathname !== item.path) {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.textShadow = 'none';
                      }
                    }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.label}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-[21px] left-0 right-0 h-0.5"
                        style={{ backgroundColor: '#B57EDC' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden z-50 flex-shrink-0"
            style={{ color: '#ffffff' }}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay to close menu when clicking outside */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 md:hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                onClick={handleLinkClick}
              />
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto', maxHeight: 'calc(100vh - 5rem)' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t mt-2 relative z-50"
                style={{
                  backgroundColor: 'rgba(11, 15, 26, 0.95)',
                  backdropFilter: 'blur(8px)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  maxHeight: 'calc(100vh - 5rem)',
                  overflowY: 'auto'
                }}
              >
                <div className="pb-4 space-y-1 pt-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={menuItemVariants}
                  >
                    {item.dropdown ? (
                      <div>
                        <div className="py-3 px-4 text-sm font-medium" style={{ color: '#ffffff', opacity: 0.6 }}>
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem, subIndex) => {
                          if (!(subItem as any).path) return null;
                          return (
                            <Link
                              key={(subItem as any).path}
                              to={(subItem as any).path}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLinkClick();
                              }}
                              className={`block py-3 px-6 sm:px-8 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base ${item.label === 'AI for Industry' ? 'whitespace-nowrap' : ''}`}
                              style={{ 
                                color: location.pathname === (subItem as any).path ? '#B57EDC' : '#ffffff',
                                backgroundColor: location.pathname === (subItem as any).path ? 'rgba(181, 126, 220, 0.1)' : 'transparent'
                              }}
                              onMouseEnter={(e) => {
                                if (location.pathname !== (subItem as any).path) {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                  e.currentTarget.style.color = '#B57EDC';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (location.pathname !== (subItem as any).path) {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = '#ffffff';
                                }
                              }}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className={`block py-3 px-4 sm:px-6 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base`}
                        style={{ 
                          color: location.pathname === item.path ? '#B57EDC' : '#ffffff',
                          backgroundColor: location.pathname === item.path ? 'rgba(181, 126, 220, 0.1)' : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (location.pathname !== item.path) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.color = '#B57EDC';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (location.pathname !== item.path) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#ffffff';
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
