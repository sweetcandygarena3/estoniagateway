import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe2, Shield, Wifi, TreePine, Briefcase, Lock, Heart, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import natureImg from "@/assets/hero-nature.jpg";
import skylineImg from "@/assets/hero-tallinn-skyline.jpg";
import tartuImg from "@/assets/hero-tartu.jpg";

const DiscoverEstonia = () => {
  const { t } = useLang();

  const reasons = [
    {
      icon: Globe2, color: "from-sky-500 to-blue-600",
      title: t("Digital Capital of the World", "বিশ্বের ডিজিটাল রাজধানী"),
      stat: t("99% of public services online", "৯৯% সরকারি সেবা অনলাইনে"),
      body: t(
        "Estonia invented e-Residency, i-Voting, and digital signatures. Register a company in 15 minutes. File taxes in 3. As a CS/Cyber student, you live inside the world's most advanced digital society.",
        "এস্তোনিয়া ই-রেসিডেন্সি, আই-ভোটিং ও ডিজিটাল স্বাক্ষর উদ্ভাবন করেছে। ১৫ মিনিটে কোম্পানি রেজিস্টার, ৩ মিনিটে ট্যাক্স ফাইল। সিএস/সাইবার শিক্ষার্থী হিসেবে আপনি বিশ্বের সবচেয়ে উন্নত ডিজিটাল সমাজে বাস করবেন।"
      ),
    },
    {
      icon: Shield, color: "from-emerald-500 to-green-600",
      title: t("NATO Cyber Defence HQ", "ন্যাটো সাইবার ডিফেন্স সদর দপ্তর"),
      stat: t("Home of NATO CCDCOE in Tallinn", "তালিনে ন্যাটো CCDCOE-র অবস্থান"),
      body: t(
        "Tallinn hosts the NATO Cooperative Cyber Defence Centre of Excellence. Cybersecurity students network with global defence engineers, attend Locked Shields exercises, and graduate into a market starved for talent.",
        "তালিনে ন্যাটো কো-অপারেটিভ সাইবার ডিফেন্স সেন্টার। সাইবার সিকিউরিটি ছাত্ররা বৈশ্বিক ডিফেন্স ইঞ্জিনিয়ারদের সঙ্গে নেটওয়ার্কিং করে, Locked Shields অনুশীলনে অংশ নেয়।"
      ),
    },
    {
      icon: Wifi, color: "from-purple-500 to-indigo-600",
      title: t("Free Public Wi-Fi Everywhere", "সর্বত্র ফ্রি পাবলিক ওয়াই-ফাই"),
      stat: t("Buses, parks, beaches, forests — all online", "বাস, পার্ক, সৈকত, বন — সব অনলাইন"),
      body: t(
        "Free Wi-Fi covers most of the country, including national parks. Mobile internet is among the cheapest and fastest in Europe. You're never offline.",
        "জাতীয় উদ্যান সহ দেশের অধিকাংশ জায়গায় ফ্রি ওয়াই-ফাই। মোবাইল ইন্টারনেট ইউরোপের সবচেয়ে সস্তা ও দ্রুততম। কখনো অফলাইন নয়।"
      ),
    },
    {
      icon: TreePine, color: "from-green-600 to-teal-600",
      title: t("Cleanest Air in Europe", "ইউরোপের সবচেয়ে বিশুদ্ধ বাতাস"),
      stat: t("50% forest cover, AQI ≤ 20", "৫০% বনভূমি, AQI ≤ ২০"),
      body: t(
        "Estonia ranks #1 globally for clean air (WHO data). Half the country is forest. After Dhaka's air quality, your lungs will recover within weeks.",
        "WHO ডেটা অনুসারে এস্তোনিয়া পরিচ্ছন্ন বাতাসে বিশ্বে #১। দেশের অর্ধেক বনভূমি। ঢাকার বায়ুর পরে কয়েক সপ্তাহেই আপনার ফুসফুস পুনরুদ্ধার হবে।"
      ),
    },
    {
      icon: Briefcase, color: "from-orange-500 to-red-600",
      title: t("EU Job Market Access", "ইউরোপীয় ইউনিয়ন চাকরির বাজার"),
      stat: t("9-month post-study visa + EU mobility", "৯ মাস পোস্ট-স্টাডি ভিসা + EU চলাচল"),
      body: t(
        "Graduate, get 9 months to find a job, then work anywhere in the EU. Average IT salary in Tallinn: €2,500-4,500/mo. Skype, Wise, Bolt, Pipedrive — all founded here.",
        "স্নাতক হলে চাকরি খোঁজার জন্য ৯ মাস পান, তারপর EU-র যেকোনো জায়গায় কাজ করুন। তালিনে গড় আইটি বেতন: €২,৫০০-৪,৫০০/মাস। Skype, Wise, Bolt, Pipedrive — সবই এখানে প্রতিষ্ঠিত।"
      ),
    },
    {
      icon: Lock, color: "from-rose-500 to-pink-600",
      title: t("One of the Safest Countries", "অন্যতম নিরাপদ দেশ"),
      stat: t("Crime rate 70% lower than EU average", "অপরাধের হার EU গড়ের চেয়ে ৭০% কম"),
      body: t(
        "Walking alone at 2 AM in Tallinn is normal. Low crime, transparent police, near-zero corruption. Bike theft is the most common 'serious' crime.",
        "তালিনে রাত ২টায় একা হাঁটা স্বাভাবিক। কম অপরাধ, স্বচ্ছ পুলিশ, প্রায় শূন্য দুর্নীতি। সাইকেল চুরিই সবচেয়ে 'গুরুতর' অপরাধ।"
      ),
    },
    {
      icon: Heart, color: "from-pink-500 to-fuchsia-600",
      title: t("Free Healthcare for Students", "ছাত্রদের জন্য ফ্রি স্বাস্থ্যসেবা"),
      stat: t("EHIC covers most needs", "EHIC বেশিরভাগ চাহিদা কভার করে"),
      body: t(
        "Mandatory student insurance (~€100/yr) gives you full GP, hospital and emergency access. Mental health services included.",
        "বাধ্যতামূলক ছাত্র বীমা (~€১০০/বছর) দিয়ে পূর্ণ GP, হাসপাতাল ও জরুরি সেবা। মানসিক স্বাস্থ্যও অন্তর্ভুক্ত।"
      ),
    },
    {
      icon: Zap, color: "from-yellow-500 to-amber-600",
      title: t("Fast Path to PR & Citizenship", "PR ও নাগরিকত্বের দ্রুত পথ"),
      stat: t("PR in 5 years, EU passport in 8", "৫ বছরে PR, ৮ বছরে EU পাসপোর্ট"),
      body: t(
        "Study (3y) + work (2y) = eligible for permanent residency. After 8 years total + B1 Estonian = EU passport. Visa-free travel to 190+ countries.",
        "পড়াশোনা (৩ বছর) + কাজ (২ বছর) = স্থায়ী আবাসনের যোগ্যতা। মোট ৮ বছর + B1 এস্তোনিয়ান = EU পাসপোর্ট। ১৯০+ দেশে ভিসা-মুক্ত ভ্রমণ।"
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <img
          src={skylineImg}
          alt="Tallinn skyline at blue hour"
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="absolute top-4 left-4 z-10">
          <Link to="/">
            <Button variant="outline" size="sm" className="backdrop-blur-md">
              <ArrowLeft className="w-4 h-4 mr-1" /> {t("Back", "ফিরে যান")}
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 z-10">
          <p className="text-xs sm:text-sm text-primary font-semibold tracking-widest uppercase mb-2">
            {t("Discover Estonia", "এস্তোনিয়া আবিষ্কার করুন")}
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold gradient-text drop-shadow-lg">
            {t("Your Future Home", "আপনার ভবিষ্যৎ ঠিকানা")}
          </h1>
          <p className="text-base sm:text-lg text-card-foreground mt-3 max-w-2xl">
            {t(
              "8 strategic reasons why Estonia outperforms Germany, Ireland, and Canada for a Bangladeshi STEM student.",
              "৮টি কৌশলগত কারণ — কেন একজন বাংলাদেশি STEM ছাত্রের জন্য এস্তোনিয়া জার্মানি, আয়ারল্যান্ড ও কানাডার চেয়ে এগিয়ে।"
            )}
          </p>
        </div>
      </div>

      {/* Reasons grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <article
                key={i}
                className="glass-card rounded-2xl p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center text-white shrink-0 shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base sm:text-lg font-bold text-card-foreground leading-tight">
                      {r.title}
                    </h2>
                    <p className="text-xs text-primary font-semibold mt-1">{r.stat}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{r.body}</p>
              </article>
            );
          })}
        </div>

        {/* Bottom imagery + CTA */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden h-48 md:h-60 relative">
            <img src={tartuImg} alt="University of Tartu" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <p className="text-xs text-primary font-semibold">UNIVERSITY OF TARTU</p>
              <p className="text-card-foreground font-bold">{t("Founded 1632 — Top 250 globally", "প্রতিষ্ঠা ১৬৩২ — বিশ্বে শীর্ষ ২৫০")}</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-48 md:h-60 relative">
            <img src={natureImg} alt="Estonian forest at sunrise" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <p className="text-xs text-success font-semibold">RMK PROTECTED FORESTS</p>
              <p className="text-card-foreground font-bold">{t("50% of land — yours to explore for free", "দেশের ৫০% — বিনামূল্যে ঘুরে দেখুন")}</p>
            </div>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link to="/scholarship-strategy">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              {t("Next: 100% Waiver Strategy →", "পরবর্তী: ১০০% ওয়েভার কৌশল →")}
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DiscoverEstonia;
