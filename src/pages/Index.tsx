import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OverviewSection } from "@/components/OverviewSection";
import { EstoniaSection } from "@/components/EstoniaSection";
import { FinanceSection } from "@/components/FinanceSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { Rocket, Download, Moon, Sun, Sparkles, Plane, Globe } from "lucide-react";
import { generateStudyGuidePDF } from "@/lib/generatePDF";
import { useTheme } from "@/hooks/useTheme";
import { useLang } from "@/lib/i18n";
import { Link } from "react-router-dom";
import tallinnImg from "@/assets/tallinn-city.jpg";

type Tab = "overview" | "evaluation" | "finance" | "roadmap";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const { isDark, toggle: toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();

  const tabs = [
    { id: "overview" as Tab, label: t("Overview", "সারসংক্ষেপ"), icon: "🚀" },
    { id: "evaluation" as Tab, label: "Estonia", icon: "🇪🇪" },
    { id: "finance" as Tab, label: t("Finance", "অর্থ"), icon: "💰" },
    { id: "roadmap" as Tab, label: t("Roadmap", "রোডম্যাপ"), icon: "🗺️" },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <nav className="bg-card/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center font-bold text-xl gap-2">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="gradient-text">{t("Estonia Study Guide", "Estonia Study Guide")}</span>
            </div>
            <div className="hidden md:flex space-x-1 items-center">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`transition-all duration-200 ${activeTab === tab.id ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md" : ""}`}
                >
                  <span className="mr-1">{tab.icon}</span> {tab.label}
                </Button>
              ))}
              <Link to="/scholarship-strategy">
                <Button variant="ghost" className="text-primary">
                  <Sparkles className="w-4 h-4 mr-1" /> {t("Waiver Guide", "ওয়েভার গাইড")}
                </Button>
              </Link>
              <Link to="/visa-logistics">
                <Button variant="ghost" className="text-primary">
                  <Plane className="w-4 h-4 mr-1" /> {t("Visa", "ভিসা")}
                </Button>
              </Link>

              {/* PDF dropdown */}
              <div className="relative group">
                <Button variant="outline" size="sm" className="ml-1">
                  <Download className="w-4 h-4 mr-1" /> PDF ▾
                </Button>
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[180px]">
                  <button
                    onClick={() => generateStudyGuidePDF("en")}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted/50 rounded-t-lg text-card-foreground"
                  >
                    🇬🇧 Download in English
                  </button>
                  <button
                    onClick={() => generateStudyGuidePDF("bn")}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted/50 rounded-b-lg text-card-foreground"
                  >
                    🇧🇩 বাংলায় ডাউনলোড করুন
                  </button>
                </div>
              </div>

              {/* Language toggle */}
              <Button
                onClick={() => setLang(lang === "en" ? "bn" : "en")}
                variant="ghost"
                size="sm"
                className="ml-1"
              >
                <Globe className="w-4 h-4 mr-1" />
                {lang === "en" ? "বাং" : "EN"}
              </Button>

              <Button onClick={toggleTheme} variant="ghost" size="icon" className="ml-1">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile tabs */}
      <div className="md:hidden bg-card/80 backdrop-blur-xl border-b border-border/50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              className={`whitespace-nowrap flex-shrink-0 ${activeTab === tab.id ? "bg-gradient-to-r from-primary to-accent text-primary-foreground" : ""}`}
            >
              {tab.icon} {tab.label}
            </Button>
          ))}
          <Link to="/scholarship-strategy">
            <Button variant="outline" size="sm" className="whitespace-nowrap flex-shrink-0">
              <Sparkles className="w-4 h-4 mr-1" /> {t("Waiver", "ওয়েভার")}
            </Button>
          </Link>
          <Link to="/visa-logistics">
            <Button variant="outline" size="sm" className="whitespace-nowrap flex-shrink-0">
              <Plane className="w-4 h-4 mr-1" /> {t("Visa", "ভিসা")}
            </Button>
          </Link>
          <Button onClick={() => generateStudyGuidePDF("en")} variant="outline" size="sm" className="whitespace-nowrap flex-shrink-0">
            <Download className="w-4 h-4 mr-1" /> EN PDF
          </Button>
          <Button onClick={() => generateStudyGuidePDF("bn")} variant="outline" size="sm" className="whitespace-nowrap flex-shrink-0">
            <Download className="w-4 h-4 mr-1" /> বাং PDF
          </Button>
          <Button onClick={() => setLang(lang === "en" ? "bn" : "en")} variant="ghost" size="sm" className="flex-shrink-0">
            <Globe className="w-4 h-4" /> {lang === "en" ? "বাং" : "EN"}
          </Button>
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="flex-shrink-0">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Tallinn city image banner */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="rounded-2xl overflow-hidden relative h-40 md:h-56">
          <img src={tallinnImg} alt="Tallinn, Estonia - Old Town panoramic view" className="w-full h-full object-cover" width={1024} height={576} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-card-foreground drop-shadow-lg">
              {t("Your Strategic Gateway to Europe", "ইউরোপে আপনার কৌশলগত প্রবেশদ্বার")}
            </h2>
            <p className="text-sm text-muted-foreground drop-shadow">
              {t("Tallinn, Estonia — EU & Schengen, e-governance pioneer", "তালিন, Estonia — EU & শেনজেন, ই-গভর্নেন্স পথিকৃৎ")}
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "evaluation" && <EstoniaSection />}
        {activeTab === "finance" && <FinanceSection />}
        {activeTab === "roadmap" && <RoadmapSection />}
      </main>
    </div>
  );
};

export default Index;
