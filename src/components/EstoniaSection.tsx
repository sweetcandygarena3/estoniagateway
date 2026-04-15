import { UniversityComparison } from "./UniversityComparison";
import { CountryComparison } from "./CountryComparison";

export const EstoniaSection = () => {
  const factors = [
    {
      emoji: "🎓",
      title: "Education Quality",
      description: "TalTech hosts NATO's Cyber Defence Centre of Excellence. University of Tartu is in top 1% of world's research institutions (QS 301-350). Estonia ranks 5th globally on ITU's Cybersecurity Index.",
      grade: "A+",
      source: "QS Rankings, ITU GCI 2024",
    },
    {
      emoji: "💰",
      title: "Affordability",
      description: "Tuition: €2,500-€7,000/yr (varies by program). Living: €550-€850/month (Tartu cheaper). Total 3-year cost with 100% waiver: ~€20,000-€30,000. Without waiver: ~€40,000-€50,000.",
      grade: "A",
      source: "study-abroad.org, studyinestonia.ee",
    },
    {
      emoji: "⏰",
      title: "Work While Studying",
      description: "No separate work permit needed. Can work up to 40hrs/week (must maintain full-time study status of 30 ECTS/semester). Basic jobs: €5-8/hr. IT internships: €12-20/hr. Realistic monthly: €400-€1,200.",
      grade: "A",
      source: "studyinestonia.ee/working",
    },
    {
      emoji: "💼",
      title: "Post-Graduation Pathway",
      description: "9-month job-seeking visa after graduation. 'Top Specialist' work permit or EU Blue Card available (requires degree + salary above 1.5× Estonia's average wage). Employers don't need special permission to hire graduates.",
      grade: "A",
      source: "Estonian PPA, EU Blue Card Directive",
    },
    {
      emoji: "📈",
      title: "Jobs & Salary Data",
      description: "Junior software engineer: €2,000-€3,000/month gross. Cybersecurity roles: €2,500-€4,000/month. Estonia has 1,400+ startups per million people (highest in Europe). Skype, Wise, Bolt, Pipedrive all Estonian.",
      grade: "A+",
      source: "Startup Estonia, Glassdoor EE",
    },
    {
      emoji: "🏡",
      title: "Permanent Residency",
      description: "5-8 years of continuous legal residence required. Must pass B1 Estonian language exam. Dual citizenship generally not allowed. Study years count toward residence requirement. Clear but long pathway.",
      grade: "B+",
      source: "immigrantinvest.com, Estonian PPA",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold gradient-text">Estonia: 6-Factor Assessment</h2>
        <p className="text-muted-foreground mt-2">
          Data-driven evaluation for a Bangladeshi student targeting Cybersecurity/AI programs.
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
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">{factor.description}</p>
            <p className="text-xs text-muted-foreground/60 italic">Source: {factor.source}</p>
          </div>
        ))}
      </div>

      <CountryComparison />
      <UniversityComparison />
    </div>
  );
};
