import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OverviewSection } from "@/components/OverviewSection";
import { EstoniaSection } from "@/components/EstoniaSection";
import { FinanceSection } from "@/components/FinanceSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { Rocket, Download } from "lucide-react";
import { generateStudyGuidePDF } from "@/lib/generatePDF";

type Tab = "overview" | "evaluation" | "finance" | "roadmap";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const tabs = [
    { id: "overview" as Tab, label: "Overview & Motivation" },
    { id: "evaluation" as Tab, label: "Estonia Assessment" },
    { id: "finance" as Tab, label: "Finance & ROI" },
    { id: "roadmap" as Tab, label: "A-Z Roadmap" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center font-bold text-xl text-primary gap-2">
              <Rocket className="w-6 h-6" />
              Estonia Study Guide
            </div>
            <div className="hidden md:flex space-x-2 items-center">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className="transition-all duration-200"
                >
                  {tab.label}
                </Button>
              ))}
              <Button
                onClick={generateStudyGuidePDF}
                variant="outline"
                size="sm"
                className="ml-2"
              >
                <Download className="w-4 h-4 mr-1" />
                PDF
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile tabs */}
      <div className="md:hidden bg-card border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap flex-shrink-0"
            >
              {tab.label}
            </Button>
          ))}
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
