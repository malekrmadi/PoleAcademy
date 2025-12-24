import { Search, Palette, Rocket, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Approach = () => {
  const { t, dir } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: Search,
      title: t('approach.analysis'),
      description: t('approach.analysis.desc'),
    },
    {
      number: '02',
      icon: Palette,
      title: t('approach.design'),
      description: t('approach.design.desc'),
    },
    {
      number: '03',
      icon: Rocket,
      title: t('approach.delivery'),
      description: t('approach.delivery.desc'),
    },
    {
      number: '04',
      icon: BarChart3,
      title: t('approach.followup'),
      description: t('approach.followup.desc'),
    },
  ];

  return (
    <section id="approach" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            {t('approach.title')}
          </h2>
          <p className="text-lg text-primary-foreground/70">
            {t('approach.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-12 ${dir === 'rtl' ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'} w-full h-0.5 bg-gradient-to-r from-gold/50 to-transparent`} />
              )}

              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover-lift">
                {/* Number Badge */}
                <div className="absolute -top-4 left-8 bg-gold text-navy-dark font-bold text-sm px-4 py-1 rounded-full">
                  {step.number}
                </div>

                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-gold" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-primary-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
