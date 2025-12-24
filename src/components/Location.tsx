import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Location = () => {
  const { t, dir } = useLanguage();

  const handleGetDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=Pole+Academy+Tunis+Tunisia',
      '_blank'
    );
  };

  return (
    <section id="location" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {t('location.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('location.subtitle')}
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-card rounded-2xl shadow-elevated overflow-hidden border border-border/50">
          {/* Address Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-navy">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm">
                  {t('contact.info.address')}
                </p>
                <p className="text-primary-foreground font-medium">
                  {t('location.address')}
                </p>
              </div>
            </div>
            <Button
              onClick={handleGetDirections}
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold"
            >
              <Navigation className={`w-4 h-4 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
              {t('location.directions')}
            </Button>
          </div>

          {/* Google Maps Embed */}
          <div className="aspect-[21/9] min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.4585467!2d10.0799873!3d36.806389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2s!4v1703180000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pole Academy Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
