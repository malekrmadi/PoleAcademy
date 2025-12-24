import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#expertise', label: t('nav.expertise') },
    { href: '#audience', label: t('nav.audience') },
    { href: '#approach', label: t('nav.approach') },
    { href: '#contact', label: t('nav.contact') },
    { href: '#location', label: t('nav.location') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-glow transition-shadow duration-300">
              <span className="text-navy-dark font-heading font-bold text-xl">P</span>
            </div>
            <span className={`font-heading font-semibold text-xl transition-colors ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}>
              Pole Academy
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-secondary ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`flex items-center gap-2 ${
                isScrolled
                  ? 'text-foreground hover:bg-secondary'
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === 'fr' ? 'AR' : 'FR'}</span>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-foreground hover:bg-secondary'
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
