import { ScholarshipChecklist } from "./ScholarshipChecklist";

export const RoadmapSection = () => {
  const timelineSteps = [
    {
      number: 1,
      title: "June - August 2026: Academic Foundation",
      description: "Complete HSC exams → GPA 5.0 (non-negotiable for waiver eligibility). Immediately apply for NID/Smart Card and E-Passport (~8,000 BDT). Passport processing: 3-6 weeks. Ensure Birth Registration Certificate is 17-digit digital certificate.",
      icon: "📚",
      gradient: "from-primary to-accent",
    },
    {
      number: 2,
      title: "Sept 2026 - March 2027: Standardized Tests",
      description: "IELTS (~28,450 BDT at British Council BD) — target 7.0+ overall, no band below 6.5. SAT (~15,000 BDT via collegeboard.org) — target 1350+, Math 750+. SAT is not mandatory but Tartu explicitly states it gives significant advantage in scholarship ranking.",
      icon: "🎯",
      gradient: "from-accent to-primary",
    },
    {
      number: 3,
      title: "Apr - Sept 2027: Portfolio & Preparation",
      description: "Build GitHub portfolio (small coding projects). Earn cybersecurity badges (TryHackMe, HackTheBox). Consider CompTIA Security+ basics. Draft motivation letters (5+ drafts). Get SSC + HSC transcripts notarized. Research specific TalTech/Tartu professors and labs.",
      icon: "💻",
      gradient: "from-primary to-success",
    },
    {
      number: 4,
      title: "Oct 2027 - Jan 2028: Applications",
      description: "Apply via DreamApply to TalTech (deadline ~Mar 15) and Tartu (deadline ~Apr 1). Submit early — October submission may get priority review. Documents: transcripts, IELTS, SAT (if taken), motivation letter, passport copy. Check 'scholarship' box explicitly. Also apply to EUAS as safety net.",
      icon: "📝",
      gradient: "from-success to-accent",
    },
    {
      number: 5,
      title: "April - May 2028: Offer & Bank Statement",
      description: "Receive admission offer + waiver decision. Prepare bank statement: minimum €350/month × 12 = €4,200 (~6.05 Lakh BDT). Money should have been sitting in account 3-6 months. Can be father's account with sponsorship letter. Purchase EU-compliant health insurance (~€100-250/year).",
      icon: "🏦",
      gradient: "from-accent to-primary",
    },
    {
      number: 6,
      title: "June - July 2028: Visa Processing",
      description: "No Estonian embassy in Bangladesh. Apply at Estonian Embassy in New Delhi via VFS Global. Budget: D-Visa fee €100 + VFS €22 + India round-trip ~50,000 BDT + 3-day Delhi stay ~€150. Processing: 10-30 days. Apply at least 3 months before departure. May need Indian transit visa.",
      icon: "✈️",
      gradient: "from-primary to-success",
    },
    {
      number: 7,
      title: "August 2028: Departure",
      description: "Book one-way flight Dhaka → Tallinn (~€650, book 2-3 months early). Carry ~€1,000 cash for initial expenses. First month dorm + deposit ~€350. Arrive and begin orientation. Register at university, open Estonian bank account, get student ID.",
      icon: "🌍",
      gradient: "from-success to-accent",
    },
  ];

  const nextSteps = [
    "Which English proficiency test (IELTS, TOEFL, PTE) is preferred for Estonian university applications?",
    "What documents are needed from Bangladesh (transcripts, legalization, etc.) for Estonian admission?",
    "How competitive are 100% tuition waivers at TalTech and Tartu for international Bachelor students?",
    "What is the student housing situation (dorm vs private) and costs in Tallinn vs Tartu?",
    "What steps can I take now (while in HSC) to strengthen my application — competitions, coding projects, internships?",
    "Step-by-step D-visa process via New Delhi — what happens at the embassy appointment?",
    "What IT skills (Python, Linux, networking) should I learn in 1.5 years for part-time tech jobs in Estonia?",
    "How does the bank statement process work? Can the money be in father's account?",
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold gradient-text">The A-Z Roadmap (2026 - 2028)</h2>
        <p className="text-muted-foreground mt-2">
          Step-by-step timeline with exact costs, deadlines, and action items.
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
          Next Research Questions
        </h3>
        <ul className="space-y-2">
          {nextSteps.map((q, idx) => (
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
