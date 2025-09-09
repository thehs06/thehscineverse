import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  ariaLabel: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', ariaLabel: 'Navigate to Home' },
  { name: 'Movies', href: '#movies', ariaLabel: 'Navigate to Movies' },
  { name: 'Characters', href: '#characters', ariaLabel: 'Navigate to Characters' },
  { name: 'Upcoming', href: '#upcoming', ariaLabel: 'Navigate to Upcoming' },
  { name: 'Timeline', href: '#timeline', ariaLabel: 'Navigate to Timeline' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'glass-morphism shadow-lg backdrop-blur-xl' 
            : 'bg-transparent backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center group">
              <Zap 
                className="h-8 w-8 md:h-10 md:w-10 text-primary transition-all duration-300 group-hover:text-glow-primary" 
                aria-hidden="true"
              />
              <span className="ml-2 text-xl md:text-2xl font-bold text-primary text-glow-primary tracking-wider">
                CineVerse
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleItemClick(item.name)}
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                      energy-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
                      ${activeItem === item.name 
                        ? 'text-primary text-glow-primary' 
                        : 'text-foreground hover:text-primary hover:text-glow-primary'
                      }
                    `}
                    aria-label={item.ariaLabel}
                    aria-current={activeItem === item.name ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Mobile menu panel */}
            <div className="md:hidden fixed top-16 left-0 right-0 z-50">
              <div className="glass-card m-4 rounded-xl overflow-hidden shadow-2xl">
                <div className="px-2 pt-2 pb-3 space-y-1" role="menu">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleItemClick(item.name)}
                      className={`
                        block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card
                        ${activeItem === item.name
                          ? 'text-primary text-glow-primary glass-morphism-hover'
                          : 'text-foreground hover:text-primary hover:text-glow-primary hover:glass-morphism-hover'
                        }
                      `}
                      role="menuitem"
                      aria-label={item.ariaLabel}
                      aria-current={activeItem === item.name ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}