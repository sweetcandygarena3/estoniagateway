import { CheckCircle2, Sparkles, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const OverviewSection = () => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-success shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="relative px-8 py-12 md:p-16 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Estonia Study Abroad: Strategic Pathway
          </h1>
          <p className="text-lg md:text-xl font-light mb-6 leading-relaxed max-w-3xl opacity-95">
            A data-driven guide for Bangladeshi students targeting BSc in Cybersecurity / AI in Estonia.
            Budget: 15-20 Lakh BDT. Timeline: 2026-2028 intake cycle.
          </p>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 inline-block">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              Strategic Summary
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Target Programs", value: "BEng Cyber Security (TalTech) / BSc Science & Technology (Tartu)" },
                { label: "Country", value: "Estonia — EU/Schengen, e-governance pioneer, Skype/Wise/Bolt origin" },
                { label: "Budget Constraint", value: "15-20 Lakh BDT (€10,400-€13,900 at 1 EUR = 144 BDT)" },
                { label: "Critical Requirement", value: "100% Tuition Waiver (merit-based, top 10-20% of applicants)" },
                { label: "Long-term Strategy", value: "Estonian BSc → Master's in Germany (free) or Ireland (tech jobs) → EU PR" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>{item.label}:</strong> {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Link to="/scholarship-strategy">
              <Button size="lg" variant="secondary" className="group">
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                Read Full Scholarship Strategy →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Critical Decision Points */}
      <div className="glass-card p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-card-foreground mb-6">
          Critical Decision Points — Hard Data Only
        </h2>
        <div className="space-y-4">
          {[
            {
              gradient: "from-primary/20 to-primary/5",
              border: "border-primary/30",
              question: "Is 15 Lakh BDT enough without a loan?",
              answer:
                "YES — but ONLY with a 100% tuition waiver. Without it: Prep costs (~2.1L) + Tuition €7,000 (~10.1L) + Bank solvency €4,200 (~6L) = 18.2 Lakh BDT. With 100% waiver: Prep (~2.1L) + Bank solvency (~6L) = ~8.1 Lakh BDT. The 15L budget works with a waiver and leaves a buffer.",
            },
            {
              gradient: "from-accent/20 to-accent/5",
              border: "border-accent/30",
              question: "Do I need the SAT?",
              answer:
                "SAT is NOT mandatory for Estonian university admission. However, the University of Tartu explicitly states that SAT confers a significant advantage in motivation and ranking for scholarships. For a student from Bangladesh aiming for a 100% waiver, SAT 1350+ acts as a global benchmark that compensates for differences in the HSC grading system. Cost: ~15,000 BDT.",
            },
            {
              gradient: "from-success/20 to-success/5",
              border: "border-success/30",
              question: "Can part-time work cover tuition?",
              answer:
                "NO. Part-time at €5-8/hr × 20hrs/week = €400-640/month. Living costs ~€550-850/month. You break even on living. Paying €7,000/year tuition from part-time work while studying engineering is mathematically impossible. The 100% waiver is the ONLY viable path at this budget level.",
            },
            {
              gradient: "from-destructive/20 to-destructive/5",
              border: "border-destructive/30",
              question: "Is the Estonia → Ireland/Germany pivot realistic?",
              answer:
                "YES. Estonian BSc is fully recognized under ECTS (European Credit Transfer System). Germany offers free Master's tuition at public universities + 18-month post-study job seeker visa. Ireland offers 12-24 month Stamp 1G post-study visa and is headquarters to Google, Meta, Apple, Intel. An Estonian BSc is a legitimate EU entry point.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-gradient-to-r ${item.gradient} border ${item.border} transition-all duration-300 hover:shadow-md`}
            >
              <h4 className="font-bold text-lg text-card-foreground mb-2">{item.question}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Risk Warning */}
      <div className="glass-card p-6 rounded-2xl border-l-4 border-destructive">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-card-foreground mb-2">Critical Risk Factors</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>No Estonian embassy in Bangladesh.</strong> D-Visa must be processed via Estonian Embassy in New Delhi, India. Budget for India trip (~50,000 BDT round-trip + 3 days stay).</li>
              <li>• <strong>Dora Plus scholarship is Master's/PhD ONLY.</strong> Do not count on it for Bachelor's. Focus on university merit waivers.</li>
              <li>• <strong>Bank statement timing matters.</strong> Minimum €350/month (€4,200/year) must be shown. Money should sit in account for 3-6 months before visa application.</li>
              <li>• <strong>Exchange rate risk.</strong> Current rate ~144 BDT/EUR. A 10% depreciation adds ~1.5 Lakh BDT to total costs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
