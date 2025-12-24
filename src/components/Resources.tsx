import { FileText, Download, BookOpen, Newspaper, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface Resource {
  icon: typeof FileText;
  title: { fr: string; ar: string };
  description: { fr: string; ar: string };
  count: number;
  color: string;
}

const resources: Resource[] = [
  {
    icon: FileText,
    title: { fr: 'Guides Pratiques', ar: 'أدلة عملية' },
    description: { 
      fr: 'Documents téléchargeables pour accompagner votre développement professionnel',
      ar: 'وثائق قابلة للتحميل لمرافقة تطورك المهني'
    },
    count: 25,
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Newspaper,
    title: { fr: 'Articles & Actualités', ar: 'مقالات وأخبار' },
    description: { 
      fr: 'Restez informé des dernières évolutions dans votre domaine',
      ar: 'ابق على اطلاع بأحدث التطورات في مجالك'
    },
    count: 50,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: BookOpen,
    title: { fr: 'E-Books Spécialisés', ar: 'كتب إلكترونية متخصصة' },
    description: { 
      fr: 'Publications approfondies sur des sujets clés',
      ar: 'منشورات معمقة حول مواضيع رئيسية'
    },
    count: 12,
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Download,
    title: { fr: 'Templates & Modèles', ar: 'قوالب ونماذج' },
    description: { 
      fr: 'Outils prêts à l\'emploi pour votre activité quotidienne',
      ar: 'أدوات جاهزة للاستخدام في نشاطك اليومي'
    },
    count: 30,
    color: 'from-orange-500 to-orange-600',
  },
];

const Resources = () => {
  const { language, dir } = useLanguage();

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              {language === 'fr' ? 'Centre de Ressources' : 'مركز الموارد'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              {language === 'fr' 
                ? 'Des Ressources pour Votre Réussite'
                : 'موارد لنجاحك'
              }
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Accédez à notre bibliothèque complète de ressources documentaires, guides pratiques et outils pour soutenir votre développement professionnel continu.'
                : 'الوصول إلى مكتبتنا الكاملة من الموارد الوثائقية والأدلة العملية والأدوات لدعم تطورك المهني المستمر.'
              }
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold mb-1">100+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? 'Ressources' : 'موارد'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold mb-1">15</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? 'Catégories' : 'فئات'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold mb-1">5k+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? 'Téléchargements' : 'تحميلات'}
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold shadow-glow"
            >
              {language === 'fr' ? 'Explorer les ressources' : 'استكشاف الموارد'}
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-gold transition-colors">
                  {resource.title[language]}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {resource.description[language]}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {resource.count} {language === 'fr' ? 'documents' : 'وثائق'}
                  </span>
                  <ArrowRight className={`w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
