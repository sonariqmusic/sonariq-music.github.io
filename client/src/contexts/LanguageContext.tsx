import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  ar: {
    // Navigation
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.artists": "الفنانون",
    "nav.stats": "الإحصائيات",
    "nav.contact": "تواصل",
    "nav.home": "الرئيسية",

    // Hero Section
    "hero.badge": "🎵 منصة احترافية للتوزيع الموسيقي",
    "hero.title": "ZAHRAOUI PROD",
    "hero.description":
      "نساعد الفنانين والعلامات الموسيقية على توزيع أعمالهم عالمياً بكل احترافية، حماية حقوقهم الرقمية، وتحقيق حضور قوي عبر جميع منصات البث الموسيقي العالمية.",
    "hero.btn1": "اكتشف الخدمات",
    "hero.btn2": "تواصل معنا",

    // About Section
    "about.title": "من",
    "about.titleSpan": "نحن",
    "about.description":
      "ZAHRAOUI PROD علامة مستقلة متخصصة في التوزيع الموسيقي والحقوق الرقمية. نقدم حلولاً احترافية وموثوقة للفنانين لضمان وصول أعمالهم إلى جمهور عالمي مع الحفاظ الكامل على حقوق الملكية الفكرية والاستفادة القصوى من الأرباح.",

    // Services Section
    "services.title": "الخدمات",
    "services.titleSpan": "المتميزة",
    "services.subtitle": "حلول متكاملة وشاملة للفنانين والمنتجين والعلامات الموسيقية المستقلة والكبرى.",
    "service.distribution": "التوزيع الموسيقي العالمي",
    "service.distribution.desc":
      "نشر الأغاني والألبومات على Spotify و Apple Music و Deezer و TikTok و YouTube Music وأكثر من 150 منصة بث عالمية بسهولة وسرعة.",
    "service.protection": "حماية حقوق النشر",
    "service.protection.desc":
      "إزالة المحتوى المسروق وتقديم بلاغات DMCA ضد أي انتهاك لحقوق الملكية الفكرية والمراقبة المستمرة لأعمالك.",
    "service.youtube": "YouTube Content ID",
    "service.youtube.desc":
      "حماية موسيقاك على يوتيوب واكتشاف أي استخدام غير مصرح به وتحقيق الأرباح تلقائياً من كل استخدام.",
    "service.promotion": "الترويج الموسيقي",
    "service.promotion.desc":
      "استراتيجيات تسويق رقمية احترافية لزيادة المشاهدات والاستماعات وبناء جمهور حقيقي ومخلص.",
    "service.management": "إدارة الفنانين",
    "service.management.desc":
      "تطوير الهوية الفنية وإدارة الإصدارات الموسيقية وتحسين الظهور الرقمي والعلاقات مع المنصات.",
    "service.publishing": "النشر الموسيقي",
    "service.publishing.desc":
      "إدارة العائدات وحقوق النشر وجمع الأرباح من مختلف المنصات العالمية مع تقارير شفافة وفورية.",

    // Artists Section
    "artists.title": "الفنانون",
    "artists.titleSpan": "المتميزون",
    "artists.subtitle": "اكتشف الفنانين والأعمال الموسيقية الرائعة التابعة لـ ZAHRAOUI PROD",
    "artists.listen": "استمع على Spotify",
    "artists.listenNow": "استمع الآن",
    "artists.otherArtists": "فنانون",
    "artists.otherArtistsSpan": "آخرون",

    // Stats Section
    "stats.title": "إحصائيات",
    "stats.titleSpan": "النجاح",
    "stats.subtitle": "نتائج احترافية تعكس قوة منصتنا والثقة التي يضعها فيها الفنانون.",
    "stats.releases": "إصدار موسيقي",
    "stats.protection": "حماية الحقوق",
    "stats.platforms": "منصة بث",
    "stats.global": "توزيع عالمي",

    // Contact Section
    "contact.title": "تواصل",
    "contact.titleSpan": "معنا",
    "contact.description":
      "للاستفسارات التجارية، خدمات التوزيع الموسيقي، أو حماية الحقوق الرقمية يمكنكم التواصل معنا مباشرة. فريقنا جاهز لمساعدتك في تحقيق أحلامك الموسيقية.",
    "contact.email": "📧 البريد الإلكتروني",
    "contact.instagram": "📱 Instagram",
    "contact.youtube": "🎬 YouTube",
    "contact.whatsapp": "💬 WhatsApp",

    // Footer
    "footer.text": "© 2026 ZAHRAOUI PROD — جميع الحقوق محفوظة | منصة موثوقة للتوزيع الموسيقي العالمي",

    // Artist Profile
    "artist.badge": "🎵 صفحة الفنان",
    "artist.back": "← العودة للفنانين",
    "artist.openSpotify": "فتح في Spotify",
    "artist.bio": "فنان متميز من ZAHRAOUI PROD",
    "artist.notFound": "الفنان غير موجود",
    "artist.backHome": "العودة للصفحة الرئيسية",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.services": "Services",
    "nav.artists": "Artists",
    "nav.stats": "Statistics",
    "nav.contact": "Contact",
    "nav.home": "Home",

    // Hero Section
    "hero.badge": "🎵 Professional Music Distribution Platform",
    "hero.title": "ZAHRAOUI PROD",
    "hero.description":
      "We help artists and music labels distribute their work globally with professionalism, protect their digital rights, and achieve a strong presence across all major music streaming platforms worldwide.",
    "hero.btn1": "Discover Services",
    "hero.btn2": "Contact Us",

    // About Section
    "about.title": "About",
    "about.titleSpan": "Us",
    "about.description":
      "ZAHRAOUI PROD is an independent label specializing in music distribution and digital rights. We provide professional and reliable solutions for artists to ensure their work reaches a global audience while maintaining full intellectual property rights and maximizing profits.",

    // Services Section
    "services.title": "Featured",
    "services.titleSpan": "Services",
    "services.subtitle": "Comprehensive solutions for independent and major music artists, producers, and labels.",
    "service.distribution": "Global Music Distribution",
    "service.distribution.desc":
      "Publish songs and albums on Spotify, Apple Music, Deezer, TikTok, YouTube Music and over 150 global streaming platforms with ease and speed.",
    "service.protection": "Copyright Protection",
    "service.protection.desc":
      "Remove stolen content and file DMCA complaints against any intellectual property violations with continuous monitoring of your work.",
    "service.youtube": "YouTube Content ID",
    "service.youtube.desc":
      "Protect your music on YouTube, detect any unauthorized use, and automatically monetize every usage.",
    "service.promotion": "Music Promotion",
    "service.promotion.desc":
      "Professional digital marketing strategies to increase views and streams and build a real and loyal audience.",
    "service.management": "Artist Management",
    "service.management.desc":
      "Develop artistic identity, manage music releases, improve digital presence and relationships with platforms.",
    "service.publishing": "Music Publishing",
    "service.publishing.desc":
      "Manage revenues and publishing rights, collect profits from various global platforms with transparent and instant reports.",

    // Artists Section
    "artists.title": "Featured",
    "artists.titleSpan": "Artists",
    "artists.subtitle": "Discover talented artists and wonderful musical works from ZAHRAOUI PROD",
    "artists.listen": "Listen on Spotify",
    "artists.listenNow": "Listen Now",
    "artists.otherArtists": "Other",
    "artists.otherArtistsSpan": "Artists",

    // Stats Section
    "stats.title": "Success",
    "stats.titleSpan": "Statistics",
    "stats.subtitle": "Professional results reflecting the strength of our platform and the trust artists place in us.",
    "stats.releases": "Music Releases",
    "stats.protection": "24/7 Protection",
    "stats.platforms": "Streaming Platforms",
    "stats.global": "Global Distribution",

    // Contact Section
    "contact.title": "Contact",
    "contact.titleSpan": "Us",
    "contact.description":
      "For business inquiries, music distribution services, or digital rights protection, you can contact us directly. Our team is ready to help you achieve your musical dreams.",
    "contact.email": "📧 Email",
    "contact.instagram": "📱 Instagram",
    "contact.youtube": "🎬 YouTube",
    "contact.whatsapp": "💬 WhatsApp",

    // Footer
    "footer.text": "© 2026 ZAHRAOUI PROD — All rights reserved | Trusted global music distribution platform",

    // Artist Profile
    "artist.badge": "🎵 Artist Page",
    "artist.back": "← Back to Artists",
    "artist.openSpotify": "Open on Spotify",
    "artist.bio": "Featured artist from ZAHRAOUI PROD",
    "artist.notFound": "Artist not found",
    "artist.backHome": "Back to Home",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "ar" ? "en" : "ar";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["ar"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
