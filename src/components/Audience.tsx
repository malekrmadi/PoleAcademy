import { Building2, Scale, Landmark, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Audience = () => {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: Building2,
      title: t('audience.companies'),
      description: t('audience.companies.desc'),
    },
    {
      icon: Scale,
      title: t('audience.legal'),
      description: t('audience.legal.desc'),
    },
    {
      icon: Landmark,
      title: t('audience.institutions'),
      description: t('audience.institutions.desc'),
    },
    {
      icon: GraduationCap,
      title: t('audience.students'),
      description: t('audience.students.desc'),
    },
  ];

  return (
    <section id="audience" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {t('audience.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('audience.subtitle')}
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group text-center"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift h-full">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <audience.icon className="w-10 h-10 text-gold" />
                </div>
                
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  {audience.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
