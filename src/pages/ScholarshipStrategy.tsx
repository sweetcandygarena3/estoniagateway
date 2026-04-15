import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Target, BookOpen, FileText, DollarSign, Star, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const strategySteps = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Step 1: Understand What Universities Want",
    color: "from-primary to-accent",
    content: [
      "Estonian universities (TalTech & Tartu) offer 100% tuition waivers to the TOP applicants. This is not need-based — it is MERIT-based.",
      "They rank all international applicants by a composite score. The top 10-20% get full waivers.",
      "Your composite score = HSC GPA + Standardized Test (SAT/IELTS) + Motivation Letter quality.",
    ],
    tip: "Think of it like a leaderboard. You need to be in the top tier globally, not just from Bangladesh.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Step 2: Maximize Your Academic Score",
    color: "from-success to-primary",
    content: [
      "HSC GPA 5.0 is NON-NEGOTIABLE. Anything below 4.8 significantly reduces your chances.",
      "SAT Score: Target 1350+ (out of 1600). Focus heavily on Math — scoring 750+ in Math alone is a huge differentiator.",
      "IELTS: Target 7.0+ overall, with no band below 6.5. This is the minimum for English-taught programs.",
    ],
    tip: "A GPA 5.0 + SAT 1400 + IELTS 7.5 = almost guaranteed 100% waiver at TalTech.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Step 3: Write a Killer Motivation Letter",
    color: "from-accent to-primary",
    content: [
      "This is where most Bangladeshi students lose. A generic letter = instant rejection for waiver.",
      "Structure: (1) Hook — your story, why tech matters to you. (2) Why THIS program at THIS university. (3) Career goals post-graduation. (4) Why Estonia specifically.",
      "Mention Estonia's e-Residency, startup ecosystem, Skype/Wise origins. Show you've done research.",
      "If possible, mention specific professors or labs you want to work with.",
    ],
    tip: "Write 5 drafts minimum. Have someone fluent in English review it. This letter can make or break your scholarship.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Step 4: Apply for EVERY Available Scholarship",
    color: "from-primary to-success",
    content: [
      "TalTech Merit Waiver: Applied automatically when you submit your DreamApply application. No separate form.",
      "Tartu Merit Waiver: Check the scholarship box in DreamApply. Write a strong motivation letter.",
      "Dora Plus Scholarship: Estonian government scholarship for international students. €660/month stipend. Apply separately through your university after enrollment.",
      "Estonian Government Scholarship: Through the Ministry of Education. Limited slots. Apply via studyinestonia.ee.",
      "SEB Scholarship (Banking): For students with strong academic records. €1,500-€3,000 one-time.",
    ],
    tip: "Apply to ALL of these. Even if you get the tuition waiver, the Dora Plus stipend alone covers your living costs!",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Step 5: Build a Strong Extracurricular Profile",
    color: "from-accent to-success",
    content: [
      "Competitive programming (Codeforces, LeetCode) — even a few contests show initiative.",
      "Open-source contributions on GitHub. Even small contributions count.",
      "Cybersecurity certifications: CompTIA Security+ basics, TryHackMe, HackTheBox badges.",
      "Volunteering or community projects related to tech (teaching coding, building websites for NGOs).",
      "Any national-level awards, science fairs, or olympiad participation.",
    ],
    tip: "Quality over quantity. 2-3 meaningful extracurriculars > 10 surface-level ones.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Step 6: The Timeline That Wins",
    color: "from-success to-accent",
    content: [
      "June-Aug 2026: HSC exams → GPA 5.0. Start passport & NID process.",
      "Sept-Dec 2026: IELTS preparation and exam. Target: 7.0+.",
      "Jan-Mar 2027: SAT preparation and exam. Target: 1350+.",
      "Apr-Sep 2027: Build GitHub portfolio, earn cybersecurity badges, draft motivation letters.",
      "Oct 2027: Applications open. Submit to TalTech & Tartu immediately. Don't wait until deadline.",
      "Jan-Mar 2028: Follow up with admissions offices. Check DreamApply status regularly.",
      "April 2028: Results arrive. Accept offer + waiver. Celebrate! 🎉",
    ],
    tip: "Submitting early (October vs March) can give you priority review. Don't procrastinate!",
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
              <span className="gradient-text">Scholarship Strategy</span>
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
              🎯 The Complete 100% Tuition Waiver Strategy
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl leading-relaxed">
              A step-by-step masterplan designed for Bangladeshi students to secure a full scholarship
              at an Estonian university. Follow every step. Leave nothing to chance.
            </p>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Waiver Rate", value: "10-20%", desc: "of int'l applicants" },
            { label: "Target GPA", value: "5.0", desc: "HSC mandatory" },
            { label: "Target SAT", value: "1350+", desc: "out of 1600" },
            { label: "Target IELTS", value: "7.0+", desc: "no band < 6.5" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center group hover:glow-primary transition-all duration-300">
              <div className="text-2xl md:text-3xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-sm font-semibold text-card-foreground mt-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.desc}</div>
            </div>
          ))}
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
                  <div className="ml-16 mt-4 p-3 bg-primary/10 rounded-xl border border-primary/20">
                    <p className="text-sm text-card-foreground">
                      <strong>💡 Pro Tip:</strong> {step.tip}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
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
