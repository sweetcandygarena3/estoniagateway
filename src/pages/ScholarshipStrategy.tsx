import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Target, BookOpen, FileText, DollarSign, Star, ChevronDown, ChevronUp, Sparkles, AlertTriangle, Code } from "lucide-react";

const strategySteps = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Step 1: Understand the Merit-Based Waiver System",
    color: "from-primary to-accent",
    content: [
      "Estonian universities (TalTech & Tartu) offer 100% tuition waivers to the TOP 10-20% of international applicants. This is NOT need-based — it is purely MERIT-based.",
      "TalTech uses a composite score: Proctorio-monitored online entrance test (Math + Informatics) + motivation interview + academic record.",
      "Tartu ranks applicants by: HSC GPA + standardized test scores (SAT/IELTS) + motivation letter quality.",
      "Both universities process waivers automatically during admission — no separate scholarship application form. But you MUST check the 'scholarship' option in DreamApply.",
    ],
    tip: "You are competing globally, not just against Bangladeshi applicants. A GPA 5.0 from Bangladesh is strong but must be paired with standardized test scores to benchmark internationally.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Step 2: Maximize Your Academic Score",
    color: "from-success to-primary",
    content: [
      "HSC GPA 5.0 — Non-negotiable. Anything below 4.8 significantly reduces chances. This is the foundation of your application.",
      "IELTS 7.0+ overall (no band below 6.5) — This is the minimum for English-taught programs. Cost: ~28,450 BDT at British Council Bangladesh.",
      "SAT 1350+ (Math 750+) — NOT mandatory for admission, but Tartu explicitly states SAT gives significant advantage in scholarship ranking. For a Bangladeshi student, SAT 1350+ compensates for HSC grading system differences. Cost: ~15,000 BDT.",
      "TalTech Entrance Test — Proctorio-monitored online test covering Mathematics and Informatics. Begin studying international curricula immediately after HSC.",
    ],
    tip: "Combination that near-guarantees 100% waiver: GPA 5.0 + SAT 1400+ + IELTS 7.5 + strong motivation letter + entrance test performance.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Step 3: Write a Strategic Motivation Letter",
    color: "from-accent to-primary",
    content: [
      "Generic letters = automatic rejection for waiver. Admissions committees read thousands — yours must stand out with specificity.",
      "Structure: (1) Personal hook — your background and what drives you toward cybersecurity/AI. (2) Why THIS specific program at THIS university — cite course modules, lab names, professors. (3) Why Estonia — mention e-Residency, startup density, Skype/Wise/Bolt origins, NATO CCDCOE. (4) Career goals post-graduation and how this degree enables them.",
      "Research the program page thoroughly. For TalTech Cyber Security Engineering, mention the Tiger Leap initiative and real-world threat simulation labs.",
      "For Tartu Science & Technology, mention the ECTS framework and how the multidisciplinary first year prepares for specialization in Computer Engineering.",
      "Write minimum 5 drafts. Have a native English speaker review. Keep under 1 page (500-700 words).",
    ],
    tip: "Mention specific professors by name if possible. This shows genuine research and commitment that generic applicants never demonstrate.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Step 4: Apply for Every Available Funding Source",
    color: "from-primary to-success",
    content: [
      "TalTech Merit Waiver — Automatically assessed during admission. Based on entrance test + interview + academic record. Can be 25%, 50%, or 100%.",
      "Tartu Merit Waiver — Check scholarship option in DreamApply. Based on GPA + standardized tests + motivation letter.",
      "IT Academy Stipend (Tartu only) — €240/month for top 20% of Bachelor students. This is a living stipend, not tuition. Applied automatically based on semester grades.",
      "Estonian Government Scholarship — Through Ministry of Education. Limited slots. Apply via studyinestonia.ee after receiving admission.",
      "SEB Scholarship (Banking sector) — For students with strong academic records. €1,500-€3,000 one-time grant.",
    ],
    warning: "CRITICAL: Dora Plus scholarship is for Master's/PhD students ONLY. Do NOT count on it for Bachelor's level. Focus entirely on university merit waivers.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Step 5: Build a Technical Portfolio (Not Mandatory, But Decisive)",
    color: "from-accent to-success",
    content: [
      "GitHub profile with 3-5 small coding projects (Python, web development, basic networking scripts). Quality > quantity.",
      "Cybersecurity badges: Complete TryHackMe beginner path, earn HackTheBox badges. These are free and show initiative.",
      "CompTIA Security+ study (don't need to pass exam, just demonstrate knowledge in motivation letter).",
      "Competitive programming: Even 2-3 Codeforces or LeetCode contests show analytical ability.",
      "Community contributions: Teaching coding to juniors, building a website for a local NGO, organizing a small hackathon.",
      "Any national-level awards, science olympiad participation, or STEM competitions.",
    ],
    tip: "A TalTech admissions officer reviewing 500 applications will notice a GitHub link with real projects. Most Bangladeshi applicants don't include one. This is your differentiator.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Step 6: Execution Timeline — Submit Early",
    color: "from-success to-accent",
    content: [
      "June-Aug 2026: HSC exams → GPA 5.0. Start NID + E-Passport process immediately.",
      "Sept-Dec 2026: IELTS preparation and exam. Target: 7.0+ overall.",
      "Jan-Mar 2027: SAT preparation and exam. Target: 1350+ (Math 750+).",
      "Apr-Sep 2027: Build GitHub portfolio, earn cybersecurity badges, draft 5+ motivation letter versions, get transcripts notarized.",
      "Oct 2027: DreamApply portals open. Submit to TalTech & Tartu IMMEDIATELY. Early submission may receive priority review.",
      "Jan-Mar 2028: Follow up with admissions offices via email. Check DreamApply status weekly. Prepare for TalTech online entrance test.",
      "April 2028: Results arrive. Accept offer + waiver. Begin bank statement preparation.",
    ],
    tip: "Submitting in October vs. waiting until March deadline can be the difference between waiver and no waiver. Early applicants often get priority consideration.",
  },
];

export default function ScholarshipStrategy() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0]));

  const toggleStep = (idx: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Guide
              </Button>
            </Link>
            <div className="flex items-center gap-2 font-bold text-lg">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="gradient-text">100% Waiver Strategy</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-success p-8 md:p-14 text-white mb-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              100% Tuition Waiver Strategy
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl leading-relaxed">
              A 6-step strategic framework for Bangladeshi students to secure a full merit-based scholarship
              at TalTech or University of Tartu. Based on official admission criteria and sourced data.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Waiver Rate", value: "10-20%", desc: "of international applicants" },
            { label: "Required GPA", value: "5.0", desc: "HSC (non-negotiable)" },
            { label: "SAT Target", value: "1350+", desc: "recommended, not mandatory" },
            { label: "IELTS Target", value: "7.0+", desc: "no band below 6.5" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center group hover:glow-primary transition-all duration-300">
              <div className="text-2xl md:text-3xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-sm font-semibold text-card-foreground mt-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Critical Warning */}
        <div className="glass-card p-5 rounded-2xl mb-8 border-l-4 border-destructive">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-card-foreground mb-1">Common Misconceptions</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Dora Plus is NOT for Bachelor's.</strong> It's Master's/PhD only. Don't plan around it.</li>
                <li>• <strong>SAT is NOT required for admission.</strong> But it IS a significant advantage for scholarship ranking at Tartu.</li>
                <li>• <strong>Need-based aid does not exist.</strong> These are purely merit-based waivers. Financial hardship alone won't get you a waiver.</li>
                <li>• <strong>Partial waivers exist.</strong> You may get 25% or 50% — plan your budget for this scenario too.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {strategySteps.map((step, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
              <button
                onClick={() => toggleStep(idx)}
                className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-card-foreground flex-1">{step.title}</h3>
                {expanded.has(idx) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              {expanded.has(idx) && (
                <div className="px-5 md:px-6 pb-6 animate-in fade-in duration-200">
                  <ul className="space-y-3 ml-16">
                    {step.content.map((point, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {"warning" in step && (step as any).warning && (
                    <div className="ml-16 mt-4 p-3 bg-destructive/10 rounded-xl border border-destructive/20">
                      <p className="text-sm text-destructive font-semibold">
                        ⚠️ {(step as any).warning}
                      </p>
                    </div>
                  )}
                  {step.tip && (
                    <div className="ml-16 mt-4 p-3 bg-primary/10 rounded-xl border border-primary/20">
                      <p className="text-sm text-card-foreground">
                        <strong>Pro Tip:</strong> {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Long-term Strategy */}
        <div className="glass-card p-6 rounded-2xl mt-10">
          <h3 className="text-xl font-bold text-card-foreground mb-4">Long-term Strategy: The Estonia → EU Pivot</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-card-foreground mb-2">Year 1-3: Estonian BSc</h4>
              <p>Complete BSc in Cybersecurity (TalTech) or Computer Engineering (Tartu). Build work experience through 20hr/week part-time in IT. Graduate with ECTS-recognized EU degree.</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-card-foreground mb-2">Year 4: Post-Study Options</h4>
              <p>Option A: Use 9-month job-seeking visa → Find full-time role in Estonia (€2,000-€3,000/month) → Work permit → Start PR clock (5 years).
                Option B: Apply for free Master's in Germany (public universities) with Estonian BSc.
                Option C: Apply for Master's/job in Ireland (tech hub, Google/Meta/Apple HQs, 12-24 month Stamp 1G visa).</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-card-foreground mb-2">Year 5-8: EU Settlement</h4>
              <p>Estonian BSc + Master's/work in Germany or Ireland = strong PR pathway. German Blue Card: 21 months to PR (with B1 German). Ireland: 5 years to citizenship (English-speaking). Estonian PR: 5-8 years + B1 Estonian.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8">
              ← Back to Full Guide
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
