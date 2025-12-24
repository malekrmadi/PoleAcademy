import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t, dir } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-1/4 left-8 w-20 h-20 border-2 border-gold/30 rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/4 right-12 w-32 h-32 border-2 border-gold/20 rounded-full hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-gold rounded-full animate-float hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Tunis, Tunisie
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#expertise')}
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-lg transition-all duration-300 group"
            >
              {t('hero.cta')}
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
