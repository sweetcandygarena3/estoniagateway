import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

interface ChecklistItem {
  id: string;
  task: string;
  deadline: string;
  details: string;
  category: "academic" | "documents" | "application" | "financial" | "visa";
}

const checklistItems: ChecklistItem[] = [
  {
    id: "hsc",
    task: "Complete HSC with GPA 5.0",
    deadline: "June–Aug 2026",
    details: "Non-negotiable. Your GPA is the #1 factor for merit-based tuition waivers.",
    category: "academic",
  },
  {
    id: "ielts",
    task: "Take IELTS — Target 7.0+",
    deadline: "Sept–Dec 2026",
    details: "Register at British Council BD (~28,450 BDT). Book early as slots fill fast.",
    category: "academic",
  },
  {
    id: "sat",
    task: "Take SAT — Target 1350+",
    deadline: "Jan–Mar 2027",
    details: "Register at collegeboard.org (~15,000 BDT). Focus on Math for engineering applications.",
    category: "academic",
  },
  {
    id: "passport",
    task: "Apply for E-Passport",
    deadline: "June–Aug 2026",
    details: "Apply immediately after exams. Costs ~8,000 BDT. Processing takes 3–6 weeks.",
    category: "documents",
  },
  {
    id: "nid",
    task: "Get NID / Smart Card",
    deadline: "June 2026",
    details: "Required for passport application. Apply at local election office.",
    category: "documents",
  },
  {
    id: "transcripts",
    task: "Get Notarized Transcripts",
    deadline: "Sept 2027",
    details: "Get SSC + HSC transcripts notarized by a certified notary. Multiple copies needed.",
    category: "documents",
  },
  {
    id: "motivation",
    task: "Write Motivation Letters",
    deadline: "Oct 2027",
    details: "One per university. Highlight: why Estonia, why this program, future goals, financial need.",
    category: "application",
  },
  {
    id: "dreamapply-taltech",
    task: "Apply to TalTech via DreamApply",
    deadline: "By March 15, 2028",
    details: "Submit: transcripts, IELTS, SAT, motivation letter, passport copy. Request tuition waiver.",
    category: "application",
  },
  {
    id: "dreamapply-tartu",
    task: "Apply to Univ. of Tartu via DreamApply",
    deadline: "By April 1, 2028",
    details: "Similar documents as TalTech. Apply for scholarship explicitly in the application form.",
    category: "application",
  },
  {
    id: "bank",
    task: "Prepare Bank Statement (€7,200+)",
    deadline: "April 2028",
    details: "Show ~9.5 Lakh BDT in account. Money should sit for 3–6 months. Can be father's account with sponsorship letter.",
    category: "financial",
  },
  {
    id: "insurance",
    task: "Purchase Health Insurance",
    deadline: "June 2028",
    details: "EU-compliant health insurance. Can buy Estonian provider (Swisscare, DR-WALTER) ~€300–€500/year.",
    category: "financial",
  },
  {
    id: "visa",
    task: "Apply for Estonia D-Visa",
    deadline: "June–July 2028",
    details: "Via VFS Global (New Delhi) or online TRP. Visa fee ~€120. May need Indian transit visa.",
    category: "visa",
  },
  {
    id: "flight",
    task: "Book One-Way Flight to Tallinn",
    deadline: "August 2028",
    details: "Budget ~100,000 BDT. Book 2–3 months early for best prices. Carry €1,000 cash.",
    category: "visa",
  },
];

const categoryColors: Record<string, string> = {
  academic: "bg-primary/10 text-primary border-primary/30",
  documents: "bg-accent/10 text-accent border-accent/30",
  application: "bg-secondary text-secondary-foreground border-border",
  financial: "bg-success/10 text-success border-success/30",
  visa: "bg-destructive/10 text-destructive border-destructive/30",
};

const categoryLabels: Record<string, string> = {
  academic: "📚 Academic",
  documents: "📄 Documents",
  application: "📝 Application",
  financial: "💰 Financial",
  visa: "✈️ Visa & Travel",
};

export const ScholarshipChecklist = () => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((checked.size / checklistItems.length) * 100);

  return (
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-card-foreground">
            ✅ Scholarship Application Checklist
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Track every step from exams to departure
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-primary">{progress}%</span>
        </div>
      </div>

      <div className="space-y-3">
        {checklistItems.map((item) => (
          <div
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
              checked.has(item.id)
                ? "bg-muted/50 border-muted opacity-70"
                : "bg-background border-border hover:border-primary/30 hover:shadow-sm"
            }`}
          >
            <div className="mt-0.5 flex-shrink-0">
              {checked.has(item.id) ? (
                <CheckCircle2 className="w-5 h-5 text-primary" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span
                  className={`font-semibold text-card-foreground ${
                    checked.has(item.id) ? "line-through" : ""
                  }`}
                >
                  {item.task}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border inline-block w-fit ${
                    categoryColors[item.category]
                  }`}
                >
                  {categoryLabels[item.category]}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                <span className="text-xs font-medium text-primary">⏰ {item.deadline}</span>
                <span className="text-xs text-muted-foreground">{item.details}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
