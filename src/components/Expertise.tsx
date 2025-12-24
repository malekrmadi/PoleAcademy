import { Scale, GraduationCap, Handshake, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Expertise = () => {
  const { t, dir } = useLanguage();

  const expertises = [
    {
      icon: Scale,
      title: t('expertise.legal.title'),
      description: t('expertise.legal.desc'),
      color: 'from-blue-500/20 to-blue-600/10',
    },
    {
      icon: GraduationCap,
      title: t('expertise.training.title'),
      description: t('expertise.training.desc'),
      color: 'from-gold/20 to-gold/5',
    },
    {
      icon: Handshake,
      title: t('expertise.support.title'),
      description: t('expertise.support.desc'),
      color: 'from-emerald-500/20 to-emerald-600/10',
    },
    {
      icon: BookOpen,
      title: t('expertise.resources.title'),
      description: t('expertise.resources.desc'),
      color: 'from-purple-500/20 to-purple-600/10',
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {t('expertise.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('expertise.subtitle')}
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {expertises.map((expertise, index) => (
            <div
              key={expertise.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card border border-border/50 overflow-hidden hover-lift"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${expertise.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <expertise.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {expertise.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {expertise.description}
                </p>

                <div className="flex items-center text-gold font-medium group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm">{dir === 'rtl' ? 'اكتشف المزيد' : 'En savoir plus'}</span>
                  <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180 mr-2' : 'ml-2'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
