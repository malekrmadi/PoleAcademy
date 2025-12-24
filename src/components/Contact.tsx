import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// Configuration API Google Apps Script
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyn-QEVCXHgAw3WUBBiT_y6akVdFBD6d33KoNYfZQUmXUDR8GL3DVZ6yl1-o9zNb-Oe/exec';
const API_KEY = 'CONTACT_FORM_2025';

const Contact = () => {
  const { t, dir, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactSchema = z.object({
    name: z.string().trim().min(1, 'Name is required').max(100),
    email: z.string().trim().email('Invalid email').max(255),
    phone: z.string().trim().max(20),
    subject: z.string().trim().min(1, 'Subject is required').max(200),
    message: z.string().trim().min(1, 'Message is required').max(2000),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation des données avec Zod
      const validatedData = contactSchema.parse(formData);
      
      // Préparation des données à envoyer à l'API Google Apps Script
      // Conversion explicite en string pour éviter les erreurs de format
      const payload = {
        api_key: String(API_KEY),
        nom: String(validatedData.name || ''),
        email: String(validatedData.email || ''),
        adresse: String(validatedData.email || ''), // Le champ "adresse" dans Google Sheets reçoit l'email
        telephone: String(validatedData.phone || ''),
        numero: String(validatedData.phone || ''), // Alias pour compatibilité
        sujet: String(validatedData.subject || ''),
        message: String(validatedData.message || ''),
      };

      // Envoi des données à l'API Google Apps Script
      // Utilisation de mode: 'no-cors' pour éviter les erreurs CORS avec Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Nécessaire pour Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Avec mode: 'no-cors', on ne peut pas lire la réponse
      // On considère que si la requête part sans erreur, c'est un succès
      // Le script Google Apps Script gérera l'enregistrement et l'email
      toast({
        title: dir === 'rtl' ? 'نجاح!' : 'Succès !',
        description: t('contact.success') || (dir === 'rtl' 
          ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.' 
          : 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.'),
      });
      
      // Réinitialisation du formulaire après succès
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      // Gestion des erreurs
      let errorMessage = dir === 'rtl' 
        ? 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.' 
        : 'Veuillez remplir tous les champs requis correctement.';

      if (error instanceof z.ZodError) {
        // Erreur de validation Zod
        errorMessage = dir === 'rtl'
          ? 'يرجى التحقق من صحة جميع الحقول المطلوبة.'
          : 'Veuillez vérifier que tous les champs requis sont correctement remplis.';
      } else if (error instanceof Error && error.message.includes('HTTP')) {
        // Erreur réseau ou serveur
        errorMessage = dir === 'rtl'
          ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.'
          : 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.';
      } else if (error instanceof Error) {
        // Autre erreur
        errorMessage = error.message;
      }

      toast({
        variant: 'destructive',
        title: dir === 'rtl' ? 'خطأ' : 'Erreur',
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      fr: 'Réponse sous 24h',
      ar: 'الرد خلال 24 ساعة',
    },
    {
      fr: 'Conseils personnalisés',
      ar: 'نصائح مخصصة',
    },
    {
      fr: 'Devis gratuit',
      ar: 'عرض أسعار مجاني',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            {language === 'fr' ? 'Parlons de votre projet' : 'لنتحدث عن مشروعك'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=1000&fit=crop"
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary-foreground mb-4">
                {language === 'fr' 
                  ? 'Prêt à transformer votre organisation ?'
                  : 'مستعد لتحويل منظمتك؟'
                }
              </h3>
              <p className="text-primary-foreground/80 mb-6 text-sm lg:text-base">
                {language === 'fr'
                  ? 'Notre équipe d\'experts est à votre disposition pour répondre à toutes vos questions.'
                  : 'فريق خبرائنا في خدمتك للإجابة على جميع استفساراتك.'
                }
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    <span className="text-primary-foreground text-sm font-medium">
                      {feature[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')} *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'fr' ? 'Votre nom' : 'اسمك'}
                    className="bg-secondary/50 border-border h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')} *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={language === 'fr' ? 'email@exemple.com' : 'email@example.com'}
                    className="bg-secondary/50 border-border h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.phone')}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+216 XX XXX XXX"
                    className="bg-secondary/50 border-border h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.subject')} *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={language === 'fr' ? 'Sujet de votre message' : 'موضوع رسالتك'}
                    className="bg-secondary/50 border-border h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')} *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={language === 'fr' ? 'Comment pouvons-nous vous aider ?' : 'كيف يمكننا مساعدتك؟'}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 text-lg shadow-glow transition-all duration-300 hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-navy-dark/30 border-t-navy-dark rounded-full animate-spin" />
                    {dir === 'rtl' ? 'جاري الإرسال...' : 'Envoi en cours...'}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {t('contact.send')}
                    <Send className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                  </span>
                )}
              </Button>

              <p className="text-center text-muted-foreground text-sm">
                {language === 'fr' 
                  ? 'En soumettant ce formulaire, vous acceptez notre politique de confidentialité.'
                  : 'بإرسال هذا النموذج، فإنك توافق على سياسة الخصوصية الخاصة بنا.'
                }
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
