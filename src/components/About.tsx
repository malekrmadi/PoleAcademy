import { Target, Heart, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Target, label: t('about.values.rigor') },
    { icon: Lightbulb, label: t('about.values.expertise') },
    { icon: Heart, label: t('about.values.pedagogy') },
    { icon: Users, label: t('about.values.adaptation') },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 gold-underline">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-gold" />
                </span>
                {t('about.mission')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
              {t('about.values')}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.label}
                  className="group bg-card rounded-xl p-6 shadow-soft border border-border/50 hover-lift cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {value.label}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
