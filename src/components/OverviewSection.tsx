import { CheckCircle2, Sparkles } from "lucide-react";
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
            Your Future Starts Now <span className="inline-block animate-float">🚀</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-6 leading-relaxed max-w-3xl opacity-95">
            Middle-income family. Dad works hard for 20k BDT/month.{" "}
            <strong>This is not a weakness; it is your ultimate superpower.</strong>{" "}
            Hunger breeds discipline. Getting a <strong>GPA 5.0 is non-negotiable</strong>.
          </p>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 inline-block">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              💡 Your Strategy Overview
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Target", value: "BSc in Cybersecurity / AI" },
                { label: "Country", value: "Estonia (Tech hub of Europe)" },
                { label: "Budget", value: "Under 15 Lakhs BDT (Strict)" },
                { label: "Requirement", value: "100% Tuition Waiver" },
                { label: "Master Plan", value: "Graduate → EU → Ireland/Germany" },
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

      {/* FAQ */}
      <div className="glass-card p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-card-foreground mb-6">
          Direct Answers to Your Biggest Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              gradient: "from-primary/20 to-primary/5",
              border: "border-primary/30",
              question: "1. Can I do all this under 15 Lakhs BDT without a loan?",
              answer:
                "YES, BUT ONLY IF you secure a 100% tuition fee waiver. Without it, €6,000/year = ~7.8 Lakh BDT and your budget breaks. 15 Lakhs covers visa, flights, initial deposit, and 1 year living costs proof.",
            },
            {
              gradient: "from-accent/20 to-accent/5",
              border: "border-accent/30",
              question: "2. Do I need SAT for a 100% scholarship?",
              answer:
                "Highly Recommended. TalTech and Tartu offer waivers based on merit. GPA 5.0 + SAT 1350+ + IELTS 7.0 puts you in the top 5% globally, almost guaranteeing a waiver.",
            },
            {
              gradient: "from-success/20 to-success/5",
              border: "border-success/30",
              question: "3. The Ireland/Germany Strategy - Is it good?",
              answer:
                "Brilliant and realistic. Estonia is EU/Schengen. An Estonian BSc is fully recognized across Europe. Cheap Bachelor's in Estonia → Ireland (tech jobs) or Germany (free Masters) is the smartest route.",
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
    </div>
  );
};
