import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.expertise': 'Expertises',
    'nav.audience': 'Public',
    'nav.approach': 'Approche',
    'nav.contact': 'Contact',
    'nav.location': 'Localisation',

    // Hero
    'hero.title': 'Excellence en Formation Professionnelle',
    'hero.subtitle': 'Pole Academy accompagne les professionnels, entreprises et institutions à travers des formations ciblées, une veille juridique structurée et des ressources spécialisées.',
    'hero.cta': 'Découvrir nos services',
    'hero.contact': 'Nous contacter',

    // About
    'about.title': 'À propos de Pole Academy',
    'about.description': 'Pole Academy est un centre d\'excellence dédié à la formation professionnelle et à l\'accompagnement des organisations en Tunisie. Notre mission est de fournir des formations de haute qualité, adaptées aux réalités du marché et aux exigences réglementaires.',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Accompagner les professionnels dans leur développement continu à travers une pédagogie innovante et une expertise reconnue.',
    'about.values': 'Nos Valeurs',
    'about.values.rigor': 'Rigueur',
    'about.values.expertise': 'Expertise',
    'about.values.pedagogy': 'Pédagogie',
    'about.values.adaptation': 'Adaptation',

    // Expertise
    'expertise.title': 'Nos Expertises',
    'expertise.subtitle': 'Des solutions complètes pour votre développement professionnel',
    'expertise.legal.title': 'Veille Juridique et Réglementaire',
    'expertise.legal.desc': 'Restez informé des évolutions législatives et réglementaires qui impactent votre activité.',
    'expertise.training.title': 'Formation Professionnelle',
    'expertise.training.desc': 'Programmes de formation sur mesure pour développer les compétences de vos équipes.',
    'expertise.support.title': 'Accompagnement des Organisations',
    'expertise.support.desc': 'Conseil stratégique et accompagnement personnalisé pour atteindre vos objectifs.',
    'expertise.resources.title': 'Ressources Spécialisées',
    'expertise.resources.desc': 'Accès à une bibliothèque de ressources documentaires et d\'outils pratiques.',

    // Audience
    'audience.title': 'Notre Public',
    'audience.subtitle': 'Nous accompagnons une diversité de profils dans leur parcours professionnel',
    'audience.companies': 'Entreprises et Dirigeants',
    'audience.companies.desc': 'Solutions de formation et conseil pour optimiser la performance de votre organisation.',
    'audience.legal': 'Professionnels du Droit et Finance',
    'audience.legal.desc': 'Formations spécialisées et veille réglementaire pour rester à jour.',
    'audience.institutions': 'Institutions et Organisations',
    'audience.institutions.desc': 'Accompagnement sur mesure pour les structures publiques et associatives.',
    'audience.students': 'Étudiants et Jeunes Professionnels',
    'audience.students.desc': 'Programmes de développement pour démarrer votre carrière avec succès.',

    // Approach
    'approach.title': 'Notre Approche',
    'approach.subtitle': 'Une méthodologie éprouvée pour des résultats concrets',
    'approach.analysis': 'Analyse des Besoins',
    'approach.analysis.desc': 'Nous commençons par comprendre vos objectifs et vos défis spécifiques.',
    'approach.design': 'Conception Sur Mesure',
    'approach.design.desc': 'Nos programmes sont adaptés à votre contexte et vos contraintes.',
    'approach.delivery': 'Mise en Œuvre Expert',
    'approach.delivery.desc': 'Des formateurs expérimentés garantissent une transmission efficace.',
    'approach.followup': 'Suivi et Évaluation',
    'approach.followup.desc': 'Un accompagnement continu pour mesurer et optimiser les résultats.',

    // Stats
    'stats.training': 'Formations Dispensées',
    'stats.professionals': 'Professionnels Formés',
    'stats.partners': 'Partenaires',
    'stats.satisfaction': 'Taux de Satisfaction',

    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.q1': 'Comment s\'inscrire à une formation ?',
    'faq.a1': 'Vous pouvez nous contacter via le formulaire ci-dessous ou par téléphone. Nous vous guiderons dans le choix de la formation adaptée à vos besoins.',
    'faq.q2': 'Les formations sont-elles certifiantes ?',
    'faq.a2': 'Oui, nos formations délivrent des attestations reconnues. Certaines formations offrent également des certifications professionnelles.',
    'faq.q3': 'Proposez-vous des formations en entreprise ?',
    'faq.a3': 'Absolument, nous proposons des formations intra-entreprise adaptées à vos besoins spécifiques et à votre planning.',
    'faq.q4': 'Quels sont les modes de paiement acceptés ?',
    'faq.a4': 'Nous acceptons les virements bancaires, chèques et paiements par carte. Des facilités de paiement sont disponibles.',

    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes à votre écoute pour répondre à vos questions',
    'contact.name': 'Nom complet',
    'contact.email': 'Adresse email',
    'contact.phone': 'Téléphone',
    'contact.subject': 'Sujet',
    'contact.message': 'Votre message',
    'contact.send': 'Envoyer le message',
    'contact.success': 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horaires',
    'contact.info.hours.value': 'Lun - Ven: 9h00 - 18h00',

    // Location
    'location.title': 'Notre Localisation',
    'location.subtitle': 'Venez nous rendre visite à Tunis',
    'location.address': 'Pole Academy, Tunis, Tunisie',
    'location.directions': 'Obtenir l\'itinéraire',

    // Footer
    'footer.description': 'Centre d\'excellence en formation professionnelle et accompagnement des organisations.',
    'footer.quicklinks': 'Liens Rapides',
    'footer.services': 'Nos Services',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.expertise': 'خبراتنا',
    'nav.audience': 'جمهورنا',
    'nav.approach': 'منهجيتنا',
    'nav.contact': 'اتصل بنا',
    'nav.location': 'موقعنا',

    // Hero
    'hero.title': 'التميز في التكوين المهني',
    'hero.subtitle': 'بول أكاديمي ترافق المهنيين والشركات والمؤسسات من خلال تكوينات مستهدفة ورصد قانوني منظم وموارد متخصصة.',
    'hero.cta': 'اكتشف خدماتنا',
    'hero.contact': 'تواصل معنا',

    // About
    'about.title': 'عن بول أكاديمي',
    'about.description': 'بول أكاديمي هي مركز تميز مخصص للتكوين المهني ومرافقة المنظمات في تونس. مهمتنا هي تقديم تكوينات عالية الجودة، متكيفة مع واقع السوق والمتطلبات التنظيمية.',
    'about.mission': 'مهمتنا',
    'about.mission.text': 'مرافقة المهنيين في تطورهم المستمر من خلال بيداغوجيا مبتكرة وخبرة معترف بها.',
    'about.values': 'قيمنا',
    'about.values.rigor': 'الصرامة',
    'about.values.expertise': 'الخبرة',
    'about.values.pedagogy': 'البيداغوجيا',
    'about.values.adaptation': 'التكيف',

    // Expertise
    'expertise.title': 'خبراتنا',
    'expertise.subtitle': 'حلول شاملة لتطويرك المهني',
    'expertise.legal.title': 'الرصد القانوني والتنظيمي',
    'expertise.legal.desc': 'ابق على اطلاع بالتطورات التشريعية والتنظيمية التي تؤثر على نشاطك.',
    'expertise.training.title': 'التكوين المهني',
    'expertise.training.desc': 'برامج تكوينية مخصصة لتطوير مهارات فرقك.',
    'expertise.support.title': 'مرافقة المنظمات',
    'expertise.support.desc': 'استشارات استراتيجية ومرافقة شخصية لتحقيق أهدافك.',
    'expertise.resources.title': 'موارد متخصصة',
    'expertise.resources.desc': 'الوصول إلى مكتبة من الموارد الوثائقية والأدوات العملية.',

    // Audience
    'audience.title': 'جمهورنا',
    'audience.subtitle': 'نرافق تنوعاً من الملفات الشخصية في مسارهم المهني',
    'audience.companies': 'الشركات والمديرون',
    'audience.companies.desc': 'حلول تكوينية واستشارية لتحسين أداء منظمتك.',
    'audience.legal': 'مهنيو القانون والمالية',
    'audience.legal.desc': 'تكوينات متخصصة ورصد تنظيمي للبقاء على اطلاع.',
    'audience.institutions': 'المؤسسات والمنظمات',
    'audience.institutions.desc': 'مرافقة مخصصة للهياكل العامة والجمعيات.',
    'audience.students': 'الطلاب والمهنيون الشباب',
    'audience.students.desc': 'برامج تطوير لبدء مسيرتك المهنية بنجاح.',

    // Approach
    'approach.title': 'منهجيتنا',
    'approach.subtitle': 'منهجية مجربة لنتائج ملموسة',
    'approach.analysis': 'تحليل الاحتياجات',
    'approach.analysis.desc': 'نبدأ بفهم أهدافك وتحدياتك الخاصة.',
    'approach.design': 'تصميم مخصص',
    'approach.design.desc': 'برامجنا متكيفة مع سياقك وقيودك.',
    'approach.delivery': 'تنفيذ خبير',
    'approach.delivery.desc': 'مكونون ذوو خبرة يضمنون نقلاً فعالاً للمعارف.',
    'approach.followup': 'المتابعة والتقييم',
    'approach.followup.desc': 'مرافقة مستمرة لقياس وتحسين النتائج.',

    // Stats
    'stats.training': 'تكوينات منجزة',
    'stats.professionals': 'مهني مكوّن',
    'stats.partners': 'شريك',
    'stats.satisfaction': 'نسبة الرضا',

    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'كيف يمكنني التسجيل في تكوين؟',
    'faq.a1': 'يمكنك التواصل معنا عبر النموذج أدناه أو عبر الهاتف. سنوجهك في اختيار التكوين المناسب لاحتياجاتك.',
    'faq.q2': 'هل التكوينات معتمدة؟',
    'faq.a2': 'نعم، تكويناتنا تقدم شهادات معترف بها. بعض التكوينات تقدم أيضاً شهادات مهنية.',
    'faq.q3': 'هل تقدمون تكوينات داخل الشركات؟',
    'faq.a3': 'بالتأكيد، نقدم تكوينات داخل الشركات متكيفة مع احتياجاتكم الخاصة وجدولكم الزمني.',
    'faq.q4': 'ما هي طرق الدفع المقبولة؟',
    'faq.a4': 'نقبل التحويلات البنكية والشيكات والدفع بالبطاقة. تسهيلات الدفع متاحة.',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن في خدمتك للإجابة على استفساراتك',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.subject': 'الموضوع',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    'contact.success': 'تم إرسال الرسالة بنجاح! سنرد عليك في أقرب وقت.',
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.address': 'العنوان',
    'contact.info.phone': 'الهاتف',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.hours': 'ساعات العمل',
    'contact.info.hours.value': 'الإثنين - الجمعة: 9:00 - 18:00',

    // Location
    'location.title': 'موقعنا',
    'location.subtitle': 'تفضل بزيارتنا في تونس',
    'location.address': 'بول أكاديمي، تونس، تونس',
    'location.directions': 'الحصول على الاتجاهات',

    // Footer
    'footer.description': 'مركز تميز في التكوين المهني ومرافقة المنظمات.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.services': 'خدماتنا',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
