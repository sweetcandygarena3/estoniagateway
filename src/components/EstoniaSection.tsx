import { UniversityComparison } from "./UniversityComparison";
import { CountryComparison } from "./CountryComparison";
import { useLang } from "@/lib/i18n";
import taltechImg from "@/assets/taltech-campus.jpg";
import tartuImg from "@/assets/tartu-university.jpg";

export const EstoniaSection = () => {
  const { t } = useLang();

  const factors = [
    {
      emoji: "🎓",
      title: t("Education Quality", "শিক্ষার মান"),
      description: t(
        "TalTech hosts NATO's Cyber Defence Centre of Excellence. University of Tartu is in top 1% of world's research institutions (QS 301-350). Estonia ranks 5th globally on ITU's Cybersecurity Index.",
        "TalTech NATO-এর Cyber Defence Centre of Excellence হোস্ট করে। University of Tartu বিশ্বের শীর্ষ ১% গবেষণা প্রতিষ্ঠানের মধ্যে (QS ৩০১-৩৫০)। Estonia ITU-এর Cybersecurity Index-এ বিশ্বব্যাপী ৫ম।"
      ),
      grade: "A+",
      source: "QS Rankings, ITU GCI 2024",
    },
    {
      emoji: "💰",
      title: t("Affordability", "সামর্থ্য"),
      description: t(
        "Tuition: €2,500-€7,000/yr (varies by program). Living: €550-€850/month (Tartu cheaper). Total 3-year cost with 100% waiver: ~€20,000-€30,000. Without waiver: ~€40,000-€50,000.",
        "টিউশন: €২,৫০০-€৭,০০০/বছর। জীবনযাত্রা: €৫৫০-€৮৫০/মাস (তার্তু সস্তা)। ১০০% ওয়েভার সহ ৩ বছরের মোট খরচ: ~€২০,০০০-€৩০,০০০।"
      ),
      grade: "A",
      source: "studyinestonia.ee",
    },
    {
      emoji: "⏰",
      title: t("Work While Studying", "পড়ার সাথে কাজ"),
      description: t(
        "No separate work permit needed. Can work up to 40hrs/week (must maintain full-time study status of 30 ECTS/semester). Basic jobs: €5-8/hr. IT internships: €12-20/hr. Realistic monthly: €400-€1,200.",
        "আলাদা ওয়ার্ক পারমিট লাগে না। সপ্তাহে ৪০ ঘণ্টা পর্যন্ত কাজ করা যায়। সাধারণ কাজ: €৫-৮/ঘণ্টা। IT ইন্টার্নশিপ: €১২-২০/ঘণ্টা। মাসিক: €৪০০-€১,২০০।"
      ),
      grade: "A",
      source: "studyinestonia.ee/working",
    },
    {
      emoji: "💼",
      title: t("Post-Graduation Pathway", "স্নাতকোত্তর পথ"),
      description: t(
        "9-month job-seeking visa after graduation. 'Top Specialist' work permit or EU Blue Card available (requires degree + salary above 1.5× Estonia's average wage).",
        "স্নাতকের পর ৯ মাসের চাকরি খোঁজার ভিসা। 'Top Specialist' ওয়ার্ক পারমিট বা EU Blue Card পাওয়া যায়।"
      ),
      grade: "A",
      source: "Estonian PPA, EU Blue Card Directive",
    },
    {
      emoji: "📈",
      title: t("Jobs & Salary Data", "চাকরি ও বেতন"),
      description: t(
        "Junior software engineer: €2,000-€3,000/month gross. Cybersecurity roles: €2,500-€4,000/month. Estonia has 1,400+ startups per million people (highest in Europe). Skype, Wise, Bolt, Pipedrive all Estonian.",
        "জুনিয়র সফটওয়্যার ইঞ্জিনিয়ার: €২,০০০-€৩,০০০/মাস। সাইবার সিকিউরিটি: €২,৫০০-€৪,০০০/মাস। Estonia-তে প্রতি মিলিয়নে ১,৪০০+ স্টার্টআপ (ইউরোপে সর্বোচ্চ)।"
      ),
      grade: "A+",
      source: "Startup Estonia, Glassdoor EE",
    },
    {
      emoji: "🏡",
      title: t("Permanent Residency", "স্থায়ী বসবাস"),
      description: t(
        "5-8 years of continuous legal residence required. Must pass B1 Estonian language exam. Study years count toward residence requirement. Clear but long pathway.",
        "৫-৮ বছরের ক্রমাগত আইনসম্মত বসবাস প্রয়োজন। B1 Estonian ভাষা পরীক্ষায় পাস করতে হবে। পড়ার বছরগুলো বসবাসের প্রয়োজনীয়তায় গণনা হয়।"
      ),
      grade: "B+",
      source: "Estonian PPA",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold gradient-text">{t("Estonia: 6-Factor Assessment", "Estonia: ৬-ফ্যাক্টর মূল্যায়ন")}</h2>
        <p className="text-muted-foreground mt-2">
          {t("Data-driven evaluation for a Bangladeshi student targeting Cybersecurity/AI programs.", "সাইবার সিকিউরিটি/AI প্রোগ্রাম লক্ষ্য করা বাংলাদেশি ছাত্রের জন্য ডেটা-চালিত মূল্যায়ন।")}
        </p>
      </div>

      {/* University Campus Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-2xl overflow-hidden relative group">
          <img src={taltechImg} alt="TalTech - Tallinn University of Technology campus" loading="lazy" width={1024} height={576} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <h4 className="font-bold text-card-foreground text-lg">TalTech</h4>
            <p className="text-xs text-muted-foreground">{t("Tallinn — Flagship Cyber Security Engineering", "তালিন — ফ্ল্যাগশিপ সাইবার সিকিউরিটি ইঞ্জিনিয়ারিং")}</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative group">
          <img src={tartuImg} alt="University of Tartu campus" loading="lazy" width={1024} height={576} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <h4 className="font-bold text-card-foreground text-lg">University of Tartu</h4>
            <p className="text-xs text-muted-foreground">{t("Tartu — Strong CS + IT Academy Stipend €240/mo", "তার্তু — শক্তিশালী CS + IT Academy স্টাইপেন্ড €২৪০/মাস")}</p>
          </div>
        </div>
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
