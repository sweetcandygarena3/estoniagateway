import { CheckCircle2 } from "lucide-react";

export const OverviewSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl shadow-xl overflow-hidden text-primary-foreground">
        <div className="px-8 py-12 md:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Your Future Starts Now 🚀
          </h1>
          <p className="text-lg md:text-xl font-light mb-6 leading-relaxed max-w-3xl opacity-95">
            Middle-income family. Dad works hard for 20k BDT/month.{" "}
            <strong>This is not a weakness; it is your ultimate superpower.</strong>{" "}
            Hunger breeds discipline. Getting a <strong>GPA 5.0 is non-negotiable</strong>{" "}
            right now. It is the golden key that unlocks the 100% scholarships you desperately need.
          </p>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 inline-block">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              💡 Your Strategy Overview
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Target", value: "BSc in Cybersecurity / AI" },
                { label: "Country", value: "Estonia (Tech hub of Europe, low living cost)" },
                { label: "Budget", value: "Under 15 Lakhs BDT (Strict)" },
                { label: "Requirement", value: "100% Tuition Waiver (Merit-based)" },
                { label: "Master Plan", value: "Graduate → EU Experience → Ireland/Germany" },
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
        </div>
      </div>

      <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
        <h2 className="text-2xl font-bold text-card-foreground mb-6">
          Direct Answers to Your Biggest Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              color: "primary",
              question: "1. Can I do all this under 15 Lakhs BDT without a loan?",
              answer:
                "YES, BUT ONLY IF you secure a 100% tuition fee waiver. If you have to pay tuition (€6,000/year = ~7.8 Lakh BDT), your 15 Lakh budget will instantly break. 15 Lakhs is perfectly enough for visa processing, flights, initial deposit, and showing the Embassy you have 1 year of living costs in the bank.",
            },
            {
              color: "accent",
              question: "2. Do I need SAT for a 100% scholarship?",
              answer:
                "Highly Recommended. Universities like Tallinn University of Technology (TalTech) or University of Tartu offer tuition waivers based on absolute merit. A high HSC GPA 5.0 + an SAT score of 1350+ + IELTS 7.0 puts you in the top 5% of applicants globally, almost guaranteeing a waiver.",
            },
            {
              color: "success",
              question: "3. The Ireland/Germany Strategy - Is it good?",
              answer:
                "It is a brilliant, highly realistic strategy. Estonia is in the EU/Schengen area. An Estonian BSc is fully recognized across Europe. Getting your Bachelor's cheap in Estonia, then moving to Ireland (for English/Tech jobs) or Germany (for free Masters) is the smartest route for a student on a budget.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-4 bg-secondary rounded-lg border-l-4 border-${item.color}`}
            >
              <h4 className="font-bold text-lg text-card-foreground mb-2">
                {item.question}
              </h4>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
