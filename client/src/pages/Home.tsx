import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Music, Globe, Shield, TrendingUp, Users, DollarSign } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Luxury Elegant
 * - Color Palette: Deep Blue (#004E89) + Gold (#F7B801)
 * - Typography: Cairo Bold for headers, Light for body
 * - Spacing: Generous whitespace, premium feel
 * - Interactions: Smooth, subtle transitions
 * - Multi-language support: Arabic & English
 */

export default function Home() {
  const [, setLocation] = useLocation();
  const { t, language } = useLanguage();
  const [expandedArtist, setExpandedArtist] = useState<string | null>(null);

  const artists = [
    {
      id: "mustapha-zyan",
      name: "Mustapha Zyan",
      spotifyId: "56Jxx3StixijNoxDesvM68",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663620862224/SQmWJRMd9WfabaWmHLDnQQ/artist-spotlight-bg-RjJdEpC4c5XmTmVCtiDWph.webp",
    },
    {
      id: "hakim-qaisar",
      name: "Hakim Qaisar",
      spotifyId: "6TsERWL8yK6imoHjAHzY3S",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663620862224/SQmWJRMd9WfabaWmHLDnQQ/artist-spotlight-bg-RjJdEpC4c5XmTmVCtiDWph.webp",
    },
    {
      id: "kader-el-berkani",
      name: "Kader El Berkani",
      spotifyId: "5cx5D3OWQDyvPbACSFc3l2",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663620862224/SQmWJRMd9WfabaWmHLDnQQ/artist-spotlight-bg-RjJdEpC4c5XmTmVCtiDWph.webp",
    },
  ];

  const services = [
    {
      icon: Globe,
      titleKey: "service.distribution",
      descKey: "service.distribution.desc",
    },
    {
      icon: Shield,
      titleKey: "service.protection",
      descKey: "service.protection.desc",
    },
    {
      icon: Music,
      titleKey: "service.youtube",
      descKey: "service.youtube.desc",
    },
    {
      icon: TrendingUp,
      titleKey: "service.promotion",
      descKey: "service.promotion.desc",
    },
    {
      icon: Users,
      titleKey: "service.management",
      descKey: "service.management.desc",
    },
    {
      icon: DollarSign,
      titleKey: "service.publishing",
      descKey: "service.publishing.desc",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground smooth-transition">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663620862224/SQmWJRMd9WfabaWmHLDnQQ/hero-background-hdWqW7S8tHEHHe9BLDVmpv.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container relative z-10 text-center text-white">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
            <span className="text-sm font-semibold">{t("hero.badge")}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ZAHRAOUI <span className="text-accent">PROD</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 font-bold"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("hero.btn1")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("hero.btn2")}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card smooth-transition">
        <div className="container text-center">
          <h2 className="section-title">
            {t("about.title")} <span className="text-accent">{t("about.titleSpan")}</span>
          </h2>
          <p className="section-subtitle">{t("about.description")}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background smooth-transition">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t("services.titleSpan")} <span className="text-accent">{t("services.title")}</span>
            </h2>
            <p className="section-subtitle">{t("services.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="luxury-card group hover:border-accent smooth-transition">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 smooth-transition">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent smooth-transition" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{t(service.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 bg-card smooth-transition">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t("artists.titleSpan")} <span className="text-accent">{t("artists.title")}</span>
            </h2>
            <p className="section-subtitle">{t("artists.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="group cursor-pointer"
                onClick={() => setLocation(`/artist/${artist.id}`)}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end justify-center pb-6">
                    <Button
                      size="sm"
                      className="bg-accent text-primary hover:bg-accent/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`https://open.spotify.com/artist/${artist.spotifyId}`, "_blank");
                      }}
                    >
                      {t("artists.listen")}
                    </Button>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-accent smooth-transition">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{t("artist.bio")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-background smooth-transition">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t("stats.titleSpan")} <span className="text-accent">{t("stats.title")}</span>
            </h2>
            <p className="section-subtitle">{t("stats.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "100+", labelKey: "stats.releases" },
              { number: "24/7", labelKey: "stats.protection" },
              { number: "150+", labelKey: "stats.platforms" },
              { number: "Global", labelKey: "stats.global" },
            ].map((stat, idx) => (
              <Card key={idx} className="luxury-card text-center smooth-transition">
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-muted-foreground font-medium">{t(stat.labelKey)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white smooth-transition">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t("contact.title")} <span className="text-accent">{t("contact.titleSpan")}</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-white/90">
            {t("contact.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 font-bold"
              onClick={() => window.location.href = "mailto:contact@zahraouiprod.com"}
            >
              {t("contact.email")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold"
              onClick={() => window.open("https://instagram.com/zahraouiprod", "_blank")}
            >
              {t("contact.instagram")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold"
              onClick={() => window.open("https://youtube.com/@zahraouiprod", "_blank")}
            >
              {t("contact.youtube")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold"
              onClick={() => window.open("https://wa.me/212000000000", "_blank")}
            >
              {t("contact.whatsapp")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary/95 text-white text-center border-t border-primary smooth-transition">
        <p className="text-sm">{t("footer.text")}</p>
      </footer>
    </div>
  );
}
