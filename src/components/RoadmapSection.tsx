import { ScholarshipChecklist } from "./ScholarshipChecklist";

export const RoadmapSection = () => {
  const timelineSteps = [
    {
      number: 1,
      title: "June - August 2026: Academic Foundation",
      description: "Crush HSC exams → GPA 5.0. Apply for NID/Smart Card and E-Passport (~8,000 BDT) immediately after exams.",
      icon: "📚",
      gradient: "from-primary to-accent",
    },
    {
      number: 2,
      title: "Sept 2026 - March 2027: Standardized Tests",
      description: "IELTS (~28,450 BDT) target 7.0+. SAT (~15,000 BDT) target 1350+. These scores guarantee your 100% scholarship.",
      icon: "🎯",
      gradient: "from-accent to-primary",
    },
    {
      number: 3,
      title: "Oct 2027 - Jan 2028: Applications",
      description: "Apply via DreamApply to TalTech & Tartu for Cyber/AI. Submit motivation letters, transcripts, IELTS, SAT. Apply for Merit-Based Tuition Waiver.",
      icon: "📝",
      gradient: "from-primary to-success",
    },
    {
      number: 4,
      title: "April - May 2028: Offer & Bank Statement",
      description: "Receive offer + 100% waiver! Prepare bank statement: ~€600 × 12 = €7,200 (≈9.5 Lakh BDT) to prove you can survive year 1.",
      icon: "🏦",
      gradient: "from-success to-accent",
    },
    {
      number: 5,
      title: "June - July 2028: Visa Processing",
      description: "Apply for D-Visa via VFS Global (New Delhi) or online TRP. Pay visa fees (~€120) + health insurance. May need Indian transit visa.",
      icon: "✈️",
      gradient: "from-accent to-primary",
    },
    {
      number: 6,
      title: "August 2028: Departure 🎉",
      description: "Book flight (~100,000 BDT). Pack warm clothes. Carry €1,000 cash. Arrive in Tallinn and begin your Cyber/AI degree!",
      icon: "🌍",
      gradient: "from-primary to-success",
    },
  ];

  const nextQuestions = [
    "How to write a Motivation Letter that guarantees a 100% scholarship at TalTech?",
    "Step-by-step visa process via New Delhi without an Estonian embassy in BD?",
    "What IT skills (Python, Linux) to learn in 1.5 years for tech part-time jobs?",
    "How does the Bank Statement work? Can money be in father's account?",
    "Backup plan if accepted but NO 100% scholarship? Plan B countries?",
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold gradient-text">The A-Z Roadmap (2026 - 2028)</h2>
        <p className="text-muted-foreground mt-2">
          Your step-by-step timeline from today to your first day in Estonia.
        </p>
      </div>

      <div className="space-y-4">
        {timelineSteps.map((step, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-5 md:p-6 flex gap-4 md:gap-6 items-start group hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {step.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Step {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-6 rounded-2xl mt-8 border-l-4 border-accent">
        <h3 className="text-lg font-bold text-card-foreground mb-4 flex items-center gap-2">
          🔍 5 Questions You Should Ask Next
        </h3>
        <ul className="space-y-2">
          {nextQuestions.map((q, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent font-bold">{idx + 1}.</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>

      <ScholarshipChecklist />
    </div>
  );
};
