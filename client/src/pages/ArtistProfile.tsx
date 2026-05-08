import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Music, ArrowRight } from "lucide-react";
import { useParams, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Luxury Elegant
 * - Consistent with Home page design
 * - Spotify embed integration
 * - Related artists section
 * - Multi-language support
 */

const artistsData = {
  "mustapha-zyan": {
    name: "Mustapha Zyan",
    spotifyId: "56Jxx3StixijNoxDesvM68",
    bioAr: "فنان موهوب متخصص في الموسيقى العربية الحديثة",
    bioEn: "Talented artist specializing in modern Arabic music",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663620862224/SQmWJRMd9WfabaWmHLDnQQ/artist-spotlight-bg-RjJdEpC4c5XmTmVCtiDWph.webp",
    relatedArtists: ["hakim-qaisar", "kader-el-berkani"],
  },
  "hakim-qaisar": {
    name: "Hakim Qaisar",
    spotifyId: "6TsERWL8yK6imoHjAHzY3S",
    bioAr: "فنان متميز يجمع بين الأصالة والحداثة في موسيقاه",
    bioEn: "Distinguished artist combining authenticity and modernity in his music",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663620862224/SQmWJRMd9WfabaWmHLDnQQ/artist-spotlight-bg-RjJdEpC4c5XmTmVCtiDWph.webp",
    relatedArtists: ["mustapha-zyan", "kader-el-berkani"],
  },
  "kader-el-berkani": {
    name: "Kader El Berkani",
    spotifyId: "5cx5D3OWQDyvPbACSFc3l2",
    bioAr: "منتج موسيقي وفنان متميز في المشهد الموسيقي العربي",
    bioEn: "Music producer and distinguished artist in the Arab music scene",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663620862224/SQmWJRMd9WfabaWmHLDnQQ/artist-spotlight-bg-RjJdEpC4c5XmTmVCtiDWph.webp",
    relatedArtists: ["mustapha-zyan", "hakim-qaisar"],
  },
};

export default function ArtistProfile() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const { t, language } = useLanguage();

  const artist = artistsData[id as keyof typeof artistsData];

  if (!artist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">{t("artist.notFound")}</h1>
          <Button onClick={() => setLocation("/")} className="bg-primary hover:bg-primary/90">
            {t("artist.backHome")}
          </Button>
        </div>
      </div>
    );
  }

  const relatedArtists = artist.relatedArtists
    .map((artistId) => ({
      id: artistId,
      name: artistsData[artistId as keyof typeof artistsData].name,
      image: artistsData[artistId as keyof typeof artistsData].image,
      spotifyId: artistsData[artistId as keyof typeof artistsData].spotifyId,
    }))
    .filter((a) => a.id !== id);

  const artistBio = language === "ar" ? artist.bioAr : artist.bioEn;

  return (
    <div className="min-h-screen bg-background text-foreground smooth-transition">
      {/* Header */}
      <Header />

      {/* Artist Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-primary/80 text-white smooth-transition">
        <div className="container text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
            <span className="text-sm font-semibold">{t("artist.badge")}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {artist.name.split(" ")[0]} <span className="text-accent">{artist.name.split(" ")[1]}</span>
          </h1>
          <p className="text-lg text-white/90 mb-8">{artistBio}</p>
        </div>
      </section>

      {/* Spotify Embed Section */}
      <section className="py-16 bg-card smooth-transition">
        <div className="container max-w-3xl">
          <div className="bg-white dark:bg-card rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://open.spotify.com/embed/artist/${artist.spotifyId}`}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 font-bold"
              onClick={() => setLocation("/")}
            >
              {t("artist.back")}
            </Button>
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 font-bold"
              onClick={() => window.open(`https://open.spotify.com/artist/${artist.spotifyId}`, "_blank")}
            >
              {t("artist.openSpotify")}
            </Button>
          </div>
        </div>
      </section>

      {/* Related Artists Section */}
      {relatedArtists.length > 0 && (
        <section className="py-16 bg-background smooth-transition">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">
                {t("artists.otherArtistsSpan")} <span className="text-accent">{t("artists.otherArtists")}</span>
              </h2>
              <p className="section-subtitle">
                {language === "ar"
                  ? "اكتشف فنانين آخرين من ZAHRAOUI PROD"
                  : "Discover other artists from ZAHRAOUI PROD"}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArtists.map((relatedArtist) => (
                <Card
                  key={relatedArtist.id}
                  className="luxury-card group cursor-pointer hover:border-accent smooth-transition"
                  onClick={() => setLocation(`/artist/${relatedArtist.id}`)}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={relatedArtist.image}
                      alt={relatedArtist.name}
                      className="w-20 h-20 rounded-lg object-cover group-hover:scale-110 smooth-transition"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent smooth-transition">
                        {relatedArtist.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{t("artist.bio")}</p>
                      <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 smooth-transition">
                        {t("artists.listenNow")} <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 bg-primary/95 text-white text-center border-t border-primary smooth-transition">
        <p className="text-sm">{t("footer.text")}</p>
      </footer>
    </div>
  );
}
