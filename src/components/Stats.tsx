import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState, useRef } from 'react';

const Stats = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 150, suffix: '+', label: t('stats.training') },
    { value: 2500, suffix: '+', label: t('stats.professionals') },
    { value: 50, suffix: '+', label: t('stats.partners') },
    { value: 98, suffix: '%', label: t('stats.satisfaction') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gold mb-2">
                {isVisible ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  suffix: string;
}

const CountUp = ({ end, suffix }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

export default Stats;
