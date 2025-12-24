import { useState } from 'react';
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

interface Video {
  id: string;
  title: { fr: string; ar: string };
  description: { fr: string; ar: string };
  thumbnail: string;
  duration: string;
  category: { fr: string; ar: string };
}

const videos: Video[] = [
  {
    id: '1',
    title: {
      fr: 'Introduction à la Veille Juridique',
      ar: 'مقدمة في الرصد القانوني',
    },
    description: {
      fr: 'Découvrez les fondamentaux de la veille juridique et son importance pour votre entreprise.',
      ar: 'اكتشف أساسيات الرصد القانوني وأهميته لشركتك.',
    },
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop',
    duration: '12:34',
    category: { fr: 'Veille Juridique', ar: 'الرصد القانوني' },
  },
  {
    id: '2',
    title: {
      fr: 'Formation en Management',
      ar: 'التكوين في الإدارة',
    },
    description: {
      fr: 'Apprenez les meilleures pratiques de management pour diriger vos équipes efficacement.',
      ar: 'تعلم أفضل ممارسات الإدارة لقيادة فرقك بفعالية.',
    },
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    duration: '18:45',
    category: { fr: 'Management', ar: 'الإدارة' },
  },
  {
    id: '3',
    title: {
      fr: 'Conformité Réglementaire',
      ar: 'الامتثال التنظيمي',
    },
    description: {
      fr: 'Guide complet sur les exigences de conformité pour les entreprises tunisiennes.',
      ar: 'دليل شامل حول متطلبات الامتثال للشركات التونسية.',
    },
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop',
    duration: '22:10',
    category: { fr: 'Conformité', ar: 'الامتثال' },
  },
  {
    id: '4',
    title: {
      fr: 'Développement des Compétences',
      ar: 'تطوير المهارات',
    },
    description: {
      fr: 'Stratégies pour développer les compétences de vos collaborateurs.',
      ar: 'استراتيجيات لتطوير مهارات موظفيك.',
    },
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
    duration: '15:20',
    category: { fr: 'Formation', ar: 'التكوين' },
  },
  {
    id: '5',
    title: {
      fr: 'Webinaire: Actualités Juridiques 2024',
      ar: 'ندوة: المستجدات القانونية 2024',
    },
    description: {
      fr: 'Les dernières évolutions législatives et leur impact sur votre activité.',
      ar: 'أحدث التطورات التشريعية وتأثيرها على نشاطك.',
    },
    thumbnail: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=450&fit=crop',
    duration: '45:00',
    category: { fr: 'Webinaire', ar: 'ندوة' },
  },
];

const VideoCarousel = () => {
  const { language, t, dir } = useLanguage();
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            {language === 'fr' ? 'Ressources Vidéo' : 'موارد الفيديو'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {language === 'fr' ? 'Tutoriels & Formations' : 'دروس وتكوينات'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === 'fr' 
              ? 'Accédez à nos vidéos pédagogiques et webinaires pour approfondir vos connaissances'
              : 'الوصول إلى مقاطع الفيديو التعليمية والندوات عبر الإنترنت لتعميق معرفتك'
            }
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            direction: dir,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-navy/60 flex items-center justify-center transition-opacity duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-0'}`}>
                      <Button
                        size="lg"
                        className="bg-gold hover:bg-gold-light text-navy-dark rounded-full w-16 h-16 p-0 shadow-glow"
                      >
                        <Play className="w-7 h-7 ml-1" fill="currentColor" />
                      </Button>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-navy/90 text-primary-foreground text-xs font-medium rounded">
                      {video.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-gold/90 text-navy-dark text-xs font-semibold rounded-full">
                      {video.category[language]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                      {video.title[language]}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {video.description[language]}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-card border-border hover:bg-gold hover:text-navy-dark hover:border-gold" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-card border-border hover:bg-gold hover:text-navy-dark hover:border-gold" />
          </div>
        </Carousel>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-navy-dark"
          >
            {language === 'fr' ? 'Voir toutes les vidéos' : 'عرض جميع الفيديوهات'}
            <ExternalLink className={`w-4 h-4 ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
