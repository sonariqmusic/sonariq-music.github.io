import { Button } from "@/components/ui/button";
import { Music, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";

/**
 * Header Component - Luxury Elegant Design
 * Features:
 * - Dark/Light mode toggle
 * - Language toggle (Arabic/English)
 * - Responsive navigation
 * - Smooth transitions
 */

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border smooth-transition">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 smooth-transition"
          onClick={() => setLocation("/")}
        >
          <Music className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-primary">ZAHRAOUI PROD</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-foreground hover:text-accent smooth-transition"
          >
            {language === "ar" ? "من نحن" : "About"}
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-foreground hover:text-accent smooth-transition"
          >
            {language === "ar" ? "الخدمات" : "Services"}
          </a>
          <a
            href="#artists"
            className="text-sm font-medium text-foreground hover:text-accent smooth-transition"
          >
            {language === "ar" ? "الفنانون" : "Artists"}
          </a>
          <a
            href="#stats"
            className="text-sm font-medium text-foreground hover:text-accent smooth-transition"
          >
            {language === "ar" ? "الإحصائيات" : "Statistics"}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground hover:text-accent smooth-transition"
          >
            {language === "ar" ? "تواصل" : "Contact"}
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <Button
            size="sm"
            variant="ghost"
            onClick={toggleLanguage}
            className="text-foreground hover:bg-accent/10 hover:text-accent smooth-transition"
            title={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Globe className="w-5 h-5" />
            <span className="ml-1 text-xs font-semibold">{language.toUpperCase()}</span>
          </Button>

          {/* Theme Toggle */}
          <Button
            size="sm"
            variant="ghost"
            onClick={toggleTheme}
            className="text-foreground hover:bg-accent/10 hover:text-accent smooth-transition"
            title={theme === "light" ? "Switch to Dark Mode" : "التبديل إلى الوضع الفاتح"}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
