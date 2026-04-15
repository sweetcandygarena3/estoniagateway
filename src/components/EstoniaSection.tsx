import { UniversityComparison } from "./UniversityComparison";

export const EstoniaSection = () => {
  const factors = [
    {
      emoji: "🎓",
      title: "Education Quality",
      description: "Exceptional for IT. Estonia = 'e-Estonia' (Skype was invented here). TalTech and Tartu have world-class Cybersecurity and AI labs.",
      grade: "A+",
    },
    {
      emoji: "💰",
      title: "Affordability",
      description: "Living cost ~€500-€700/month (much lower than UK/USA). Tuition €6k-€8k/year, but 100% waivers available for top students.",
      grade: "A",
    },
    {
      emoji: "⏰",
      title: "Work While Studying",
      description: "No separate work permit needed. Unlimited hours legally. Students typically work 20 hrs/week in tech, delivery, or cafes.",
      grade: "A+",
    },
    {
      emoji: "💼",
      title: "Post-Graduation Work",
      description: "9 months post-study visa. Find a job → instant Temporary Residence Permit. Clear path to staying in the EU.",
      grade: "A",
    },
    {
      emoji: "📈",
      title: "Jobs & ROI",
      description: "Cybersecurity and AI are most demanded. Starting salaries €2,000-€3,000/month. Massive long-term ROI.",
      grade: "A+",
    },
    {
      emoji: "🏡",
      title: "Settlement Path",
      description: "5 years on TRP + B1 Estonian language = Permanent Residency. Clear, achievable pathway to EU citizenship.",
      grade: "A",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold gradient-text">Estonia: The 6-Factor Assessment</h2>
        <p className="text-muted-foreground mt-2">
          Evaluating Estonia for a Bangladeshi student targeting Cyber/AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {factors.map((factor, idx) => (
          <div
            key={idx}
            className="glass-card p-6 rounded-2xl group hover:glow-primary transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {factor.emoji}
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full bg-success/20 text-success border border-success/30">
                {factor.grade}
              </span>
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">{factor.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{factor.description}</p>
          </div>
        ))}
      </div>

      <UniversityComparison />
    </div>
  );
};
