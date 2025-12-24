import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Audience from '@/components/Audience';
import Approach from '@/components/Approach';
import Stats from '@/components/Stats';
import VideoCarousel from '@/components/VideoCarousel';
import Resources from '@/components/Resources';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  const meta = {
    fr: {
      title: 'Pole Academy | Formation Professionnelle & Veille Juridique en Tunisie',
      description: 'Pole Academy accompagne les professionnels et entreprises en Tunisie avec des formations ciblées, une veille juridique structurée et des ressources spécialisées.',
    },
    ar: {
      title: 'بول أكاديمي | التكوين المهني والرصد القانوني في تونس',
      description: 'بول أكاديمي ترافق المهنيين والشركات في تونس من خلال تكوينات مستهدفة ورصد قانوني منظم وموارد متخصصة.',
    },
  };

  return (
    <>
      <Helmet>
        <title>{meta[language].title}</title>
        <meta name="description" content={meta[language].description} />
        <meta property="og:title" content={meta[language].title} />
        <meta property="og:description" content={meta[language].description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta[language].title} />
        <meta name="twitter:description" content={meta[language].description} />
        <link rel="canonical" href="https://poleacademy.tn" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Audience />
        <Approach />
        <Stats />
        <VideoCarousel />
        <Resources />
        <FAQ />
        <Contact />
        <Location />
        <Footer />
      </main>
    </>
  );
};

export default Index;
