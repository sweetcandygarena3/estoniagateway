import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OverviewSection } from "@/components/OverviewSection";
import { EstoniaSection } from "@/components/EstoniaSection";
import { FinanceSection } from "@/components/FinanceSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { Rocket, Download, Moon, Sun, Sparkles } from "lucide-react";
import { generateStudyGuidePDF } from "@/lib/generatePDF";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "react-router-dom";

type Tab = "overview" | "evaluation" | "finance" | "roadmap";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const { isDark, toggle: toggleTheme } = useTheme();

  const tabs = [
    { id: "overview" as Tab, label: "Overview", icon: "🚀" },
    { id: "evaluation" as Tab, label: "Estonia", icon: "🇪🇪" },
    { id: "finance" as Tab, label: "Finance", icon: "💰" },
    { id: "roadmap" as Tab, label: "Roadmap", icon: "🗺️" },
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
              <span className="gradient-text">Estonia Study Guide</span>
            </div>
            <div className="hidden md:flex space-x-1 items-center">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`transition-all duration-200 ${activeTab === tab.id ? "bg-gradient-to-r from-primary to-accent text-white shadow-md" : ""}`}
                >
                  <span className="mr-1">{tab.icon}</span> {tab.label}
                </Button>
              ))}
              <Link to="/scholarship-strategy">
                <Button variant="ghost" className="text-primary">
                  <Sparkles className="w-4 h-4 mr-1" /> Waiver Guide
                </Button>
              </Link>
              <Button onClick={generateStudyGuidePDF} variant="outline" size="sm" className="ml-1">
                <Download className="w-4 h-4 mr-1" /> PDF
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
              className={`whitespace-nowrap flex-shrink-0 ${activeTab === tab.id ? "bg-gradient-to-r from-primary to-accent text-white" : ""}`}
            >
              {tab.icon} {tab.label}
            </Button>
          ))}
          <Link to="/scholarship-strategy">
            <Button variant="outline" size="sm" className="whitespace-nowrap flex-shrink-0">
              <Sparkles className="w-4 h-4 mr-1" /> Waiver
            </Button>
          </Link>
          <Button onClick={generateStudyGuidePDF} variant="outline" size="sm" className="whitespace-nowrap flex-shrink-0">
            <Download className="w-4 h-4 mr-1" /> PDF
          </Button>
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="flex-shrink-0">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
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
