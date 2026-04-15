export const RoadmapSection = () => {
  const timelineSteps = [
    {
      number: 1,
      title: "June - August 2026: The Academic Foundation",
      description:
        "Crush the HSC exams. Secure GPA 5.0. No distractions. Apply for your NID/Smart Card immediately (takes time in BD) and apply for your E-Passport (~8,000 BDT) right after exams.",
      color: "primary",
    },
    {
      number: 2,
      title: "Sept 2026 - March 2027: The Standardized Tests",
      description:
        "Start intensive preparation. Register for IELTS (~28,450 BDT) target: 7.0+. Register for SAT (~15,000 BDT) target: 1350+. These scores are your weapons to guarantee the 100% scholarship.",
      color: "primary",
    },
    {
      number: 3,
      title: "Oct 2027 - Jan 2028: University Application Phase",
      description:
        "Estonian university portals (DreamApply) open. Apply to TalTech and Tartu for Cyber/AI. Submit motivation letters, transcripts (notarized), IELTS, and SAT. Apply explicitly for the Merit-Based Tuition Waiver.",
      color: "primary",
    },
    {
      number: 4,
      title: "April 2028 - May 2028: Offer & Bank Statement",
      description:
        "Receive Offer Letter + 100% Scholarship Confirmation! Now, prepare the Bank Statement. You need to show ~€600 x 12 months = €7,200 (approx. 9.5 Lakh BDT) in an account to prove you can survive the first year.",
      color: "primary",
    },
    {
      number: 5,
      title: "June 2028 - July 2028: Visa Processing (Embassy)",
      description:
        "Estonia does NOT have a full embassy in Bangladesh. You will likely apply for the D-Visa through the VFS Global center in New Delhi, India (requires Indian travel visa) OR apply for TRP online and travel. Pay Visa fees (~€120) + Insurance.",
      color: "primary",
    },
    {
      number: 6,
      title: "August 2028: Departure 🎉",
      description:
        "Book one-way flight (~100,000 BDT). Pack warm clothes. Carry initial cash (€1000). Arrive in Tallinn, Estonia. Settle into dorms, get local ID, and begin your Cyber/AI degree.",
      color: "success",
    },
  ];

  const nextQuestions = [
    "How exactly do I write a Motivation Letter that guarantees a 100% scholarship at TalTech?",
    "If Estonia doesn't have an embassy in BD, what is the exact step-by-step process to go to New Delhi for the visa?",
    "What specific IT skills (like Python, Linux) should I learn in the 1.5 years before leaving to secure a part-time tech job instead of a delivery job?",
    "How does the Bank Statement actually work? Can the money be in my father's account, and how long does it need to sit there?",
    "What is the backup plan if I get accepted but DO NOT get the 100% scholarship? Which countries are plan B?",
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">
          The A-Z Roadmap (2026 - 2028)
        </h2>
        <p className="text-muted-foreground mt-2">
          Your step-by-step timeline from today until your first day in Estonia.
        </p>
      </div>

      <div className="relative border-l-2 border-border ml-4 md:ml-6 space-y-8 pb-12">
        {timelineSteps.map((step, idx) => (
          <div
            key={idx}
            className="timeline-item relative pl-8 md:pl-12 group hover:translate-x-2 transition-transform duration-300"
          >
            <div
              className={`absolute -left-3.5 top-1 bg-${step.color} w-7 h-7 rounded-full border-4 border-background flex items-center justify-center text-${step.color}-foreground text-xs font-bold shadow-md group-hover:scale-110 transition-transform duration-300`}
            >
              {step.number}
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-accent/10 p-6 rounded-xl border border-accent/30 mt-6">
        <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
          🔍 5 Questions You Should Ask Next:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
          {nextQuestions.map((question, idx) => (
            <li key={idx} className="leading-relaxed">
              "{question}"
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
