import { UniversityComparison } from "./UniversityComparison";
  const factors = [
    {
      emoji: "🎓",
      title: "1. Education Quality",
      description:
        "Exceptional for IT. Estonia is known as 'e-Estonia' (Skype was invented here). Universities like TalTech and Tartu have world-class Cybersecurity, Software Eng., and Robotics labs. Highly recognized globally.",
    },
    {
      emoji: "💰",
      title: "2. Affordability",
      description:
        "Excellent. Living cost is ~€500-€700/month (much lower than UK/USA/Australia). Tuition is €6k-€8k/year, but Tuition Waivers are available for top international students. Very budget-friendly if you get the waiver.",
    },
    {
      emoji: "⏰",
      title: "3. Work While Studying",
      description:
        "Very Flexible. International students do NOT need a separate work permit. You can work unlimited hours legally, as long as it does not interfere with your studies. Usually, students work 20 hrs/week.",
    },
    {
      emoji: "💼",
      title: "4. Work After Graduation",
      description:
        "9 Months Post-Study. You get 9 months to stay and find a job after graduation. If you find a job, you instantly get a Temporary Residence Permit for employment.",
    },
    {
      emoji: "📈",
      title: "5. Jobs + ROI",
      description:
        "High Demand. Cybersecurity and AI are the most demanded sectors. Starting salaries post-graduation are around €2,000 - €3,000/month. The long-term ROI is massive.",
    },
    {
      emoji: "🏡",
      title: "6. Settlement",
      description:
        "Clear Pathway. After living and working in Estonia for 5 years on a TRP (Temporary Residence Permit), and passing a basic B1 Estonian language test, you are eligible for Permanent Residency (PR).",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">
          Estonia: The 6-Factor Assessment
        </h2>
        <p className="text-muted-foreground mt-2">
          Evaluating Estonia based on your specific requirements and constraints as a
          Bangladeshi student.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factors.map((factor, idx) => (
          <div
            key={idx}
            className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {factor.emoji}
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">
              {factor.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {factor.description}
            </p>
          </div>
        ))}
      </div>

      <UniversityComparison />
    </div>
  );
};
