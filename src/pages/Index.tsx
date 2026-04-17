import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OverviewSection } from "@/components/OverviewSection";
import { EstoniaSection } from "@/components/EstoniaSection";
import { FinanceSection } from "@/components/FinanceSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Rocket, Download, Moon, Sun, Sparkles, Plane, Globe, Compass } from "lucide-react";
import { generateStudyGuidePDF } from "@/lib/generatePDF";
import { useTheme } from "@/hooks/useTheme";
import { useLang } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type Tab = "overview" | "evaluation" | "finance" | "roadmap";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [pdfBusy, setPdfBusy] = useState(false);
  const { isDark, toggle: toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();

  const handlePdf = async (l: "en" | "bn") => {
    if (pdfBusy) return;
    setPdfBusy(true);
    const id = toast.loading(
      l === "bn" ? "বাংলা PDF তৈরি হচ্ছে… (ফন্ট লোড হচ্ছে)" : "Generating PDF…"
    );
    try {
      await generateStudyGuidePDF(l);
      toast.success(l === "bn" ? "ডাউনলোড শুরু হয়েছে" : "Download started", { id });
    } catch (e) {
      console.error(e);
      toast.error(l === "bn" ? "PDF তৈরি ব্যর্থ" : "PDF generation failed", { id });
    } finally {
      setPdfBusy(false);
    }
  };

  const tabs = [
    { id: "overview" as Tab, label: t("Overview", "সারসংক্ষেপ"), icon: "🚀" },
    { id: "evaluation" as Tab, label: "Estonia", icon: "🇪🇪" },
    { id: "finance" as Tab, label: t("Finance", "অর্থ"), icon: "💰" },
    { id: "roadmap" as Tab, label: t("Roadmap", "রোডম্যাপ"), icon: "🗺️" },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 pb-20 md:pb-0">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <nav className="bg-card/80 backdrop-blur-xl shadow-sm sticky top-0 z-40 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center gap-2">
            <div className="flex-shrink-0 flex items-center font-bold text-base sm:text-xl gap-2">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="gradient-text truncate">Estonia Study Guide</span>
            </div>
            <div className="hidden md:flex space-x-1 items-center">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={activeTab === tab.id ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md" : ""}
                >
                  <span className="mr-1">{tab.icon}</span> {tab.label}
                </Button>
              ))}
              <Link to="/discover-estonia">
                <Button variant="ghost" className="text-primary">
                  <Compass className="w-4 h-4 mr-1" /> {t("Discover", "আবিষ্কার")}
                </Button>
              </Link>
              <Link to="/scholarship-strategy">
                <Button variant="ghost" className="text-primary">
                  <Sparkles className="w-4 h-4 mr-1" /> {t("Waiver", "ওয়েভার")}
                </Button>
              </Link>
              <Link to="/visa-logistics">
                <Button variant="ghost" className="text-primary">
                  <Plane className="w-4 h-4 mr-1" /> {t("Visa", "ভিসা")}
                </Button>
              </Link>

              {/* PDF dropdown */}
              <div className="relative group">
                <Button variant="outline" size="sm" disabled={pdfBusy} className="ml-1">
                  <Download className="w-4 h-4 mr-1" /> PDF ▾
                </Button>
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[200px]">
                  <button
                    onClick={() => handlePdf("en")}
                    disabled={pdfBusy}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted/50 rounded-t-lg text-card-foreground disabled:opacity-50"
                  >
                    🇬🇧 Download in English
                  </button>
                  <button
                    onClick={() => handlePdf("bn")}
                    disabled={pdfBusy}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted/50 rounded-b-lg text-card-foreground disabled:opacity-50"
                  >
                    🇧🇩 বাংলায় ডাউনলোড করুন
                  </button>
                </div>
              </div>

              <Button onClick={() => setLang(lang === "en" ? "bn" : "en")} variant="ghost" size="sm" className="ml-1">
                <Globe className="w-4 h-4 mr-1" />
                {lang === "en" ? "বাং" : "EN"}
              </Button>

              <Button onClick={toggleTheme} variant="ghost" size="icon" className="ml-1" aria-label="Toggle theme">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            {/* Mobile compact controls */}
            <div className="flex md:hidden items-center gap-1">
              <Button onClick={() => setLang(lang === "en" ? "bn" : "en")} variant="ghost" size="sm">
                <Globe className="w-4 h-4 mr-1" />{lang === "en" ? "বাং" : "EN"}
              </Button>
              <Button onClick={toggleTheme} variant="ghost" size="icon" aria-label="Toggle theme">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile section tabs (overview/evaluation/finance/roadmap) */}
      <div className="md:hidden bg-card/80 backdrop-blur-xl border-b border-border/50 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-3 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
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
          <Button onClick={() => handlePdf("en")} variant="outline" size="sm" disabled={pdfBusy} className="whitespace-nowrap flex-shrink-0">
            <Download className="w-4 h-4 mr-1" /> EN PDF
          </Button>
          <Button onClick={() => handlePdf("bn")} variant="outline" size="sm" disabled={pdfBusy} className="whitespace-nowrap flex-shrink-0">
            <Download className="w-4 h-4 mr-1" /> বাং PDF
          </Button>
        </div>
      </div>

      {/* Hero carousel */}
      <HeroCarousel />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "evaluation" && <EstoniaSection />}
        {activeTab === "finance" && <FinanceSection />}
        {activeTab === "roadmap" && <RoadmapSection />}
      </main>
    </div>
  );
};

export default Index;
