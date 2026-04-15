import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

interface ChecklistItem {
  id: string;
  task: string;
  deadline: string;
  details: string;
  category: "academic" | "documents" | "application" | "financial" | "visa" | "skills";
}

const checklistItems: ChecklistItem[] = [
  {
    id: "hsc",
    task: "Complete HSC with GPA 5.0",
    deadline: "June–Aug 2026",
    details: "Non-negotiable. GPA is the #1 factor for merit-based tuition waivers at both TalTech and Tartu.",
    category: "academic",
  },
  {
    id: "ielts",
    task: "Take IELTS — Target 7.0+ (no band < 6.5)",
    deadline: "Sept–Dec 2026",
    details: "Register at British Council Bangladesh (~28,450 BDT). Book early — slots fill fast. Alternative: TOEFL/PTE also accepted.",
    category: "academic",
  },
  {
    id: "sat",
    task: "Take SAT — Target 1350+ (Math 750+)",
    deadline: "Jan–Mar 2027",
    details: "NOT mandatory, but Tartu explicitly states SAT confers significant scholarship ranking advantage. Cost: ~15,000 BDT via collegeboard.org.",
    category: "academic",
  },
  {
    id: "nid",
    task: "Get NID / Smart Card",
    deadline: "June 2026",
    details: "Prerequisite for all other documents. Apply at local election office. Ensure BRC is 17-digit digital certificate.",
    category: "documents",
  },
  {
    id: "passport",
    task: "Apply for E-Passport",
    deadline: "June–Aug 2026",
    details: "Apply immediately after NID. Cost: ~8,000 BDT. Processing: 3-6 weeks. Must be valid for 6+ months beyond travel date.",
    category: "documents",
  },
  {
    id: "transcripts",
    task: "Get Notarized Transcripts (SSC + HSC)",
    deadline: "Sept 2027",
    details: "Multiple notarized copies needed. Certified notary only. Some universities may require Apostille.",
    category: "documents",
  },
  {
    id: "portfolio",
    task: "Build Technical Portfolio",
    deadline: "Apr–Sept 2027",
    details: "GitHub with coding projects. TryHackMe/HackTheBox badges. Optional: CompTIA Security+ basics. Not mandatory but strengthens waiver application.",
    category: "skills",
  },
  {
    id: "motivation",
    task: "Write Motivation Letters (5+ drafts each)",
    deadline: "Oct 2027",
    details: "One per university. Structure: personal story → why THIS program → why Estonia → career goals. Mention specific professors/labs. Have native English speaker review.",
    category: "application",
  },
  {
    id: "dreamapply-taltech",
    task: "Apply to TalTech via DreamApply",
    deadline: "By March 15, 2028",
    details: "Submit: transcripts, IELTS, SAT (if taken), motivation letter, passport copy. TalTech has Proctorio-monitored online entrance test + interview.",
    category: "application",
  },
  {
    id: "dreamapply-tartu",
    task: "Apply to University of Tartu via DreamApply",
    deadline: "By April 1, 2028",
    details: "Check scholarship box explicitly. Tartu offers IT Academy Stipend (€240/mo) for top 20% of BSc students.",
    category: "application",
  },
  {
    id: "dreamapply-euas",
    task: "Apply to EUAS (safety net)",
    deadline: "By June 1, 2028",
    details: "Direct application (not DreamApply). IT Security program. Easier admission, partial waiver possible. Deadline is later — good backup.",
    category: "application",
  },
  {
    id: "bank",
    task: "Prepare Bank Statement (min €4,200)",
    deadline: "Jan–Apr 2028",
    details: "Minimum: €350/month × 12 = €4,200 (~6.05 Lakh BDT). Must sit in account 3-6 months. Can be father's account with sponsorship letter.",
    category: "financial",
  },
  {
    id: "insurance",
    task: "Purchase EU-Compliant Health Insurance",
    deadline: "June 2028",
    details: "Schengen-compliant coverage required. ~€100-250/year. Providers: Swisscare, DR-WALTER, or buy in Estonia after enrollment.",
    category: "financial",
  },
  {
    id: "india-trip",
    task: "Book India Trip for Visa Interview",
    deadline: "May 2028",
    details: "Estonian Embassy is in New Delhi (no embassy in BD). Budget: ~50,000 BDT round-trip + 3-day stay. Check if Indian transit visa needed.",
    category: "visa",
  },
  {
    id: "visa",
    task: "Apply for Estonia D-Visa (New Delhi)",
    deadline: "June–July 2028",
    details: "Via VFS Global or direct embassy appointment. Fee: €100 + VFS €22. Processing: 10-30 days. Apply 3+ months before departure.",
    category: "visa",
  },
  {
    id: "flight",
    task: "Book One-Way Flight to Tallinn",
    deadline: "August 2028",
    details: "Budget: ~€650 (~93,600 BDT). Book 2-3 months early. Carry ~€1,000 cash. Pack warm clothes for Estonian winter.",
    category: "visa",
  },
];

const categoryColors: Record<string, string> = {
  academic: "bg-primary/10 text-primary border-primary/30",
  documents: "bg-accent/10 text-accent border-accent/30",
  skills: "bg-secondary text-secondary-foreground border-border",
  application: "bg-primary/10 text-primary border-primary/30",
  financial: "bg-success/10 text-success border-success/30",
  visa: "bg-destructive/10 text-destructive border-destructive/30",
};

const categoryLabels: Record<string, string> = {
  academic: "📚 Academic",
  documents: "📄 Documents",
  skills: "💻 Skills",
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
            Application Checklist ({checklistItems.length} Steps)
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Track every milestone from HSC exams to departure. Click to mark complete.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-primary">{checked.size}/{checklistItems.length}</span>
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
