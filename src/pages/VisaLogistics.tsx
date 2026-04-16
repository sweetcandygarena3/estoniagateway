import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane, FileCheck, AlertTriangle, MapPin, Clock, CreditCard } from "lucide-react";
import { useLang } from "@/lib/i18n";
import visaProcessImg from "@/assets/visa-process.jpg";

export default function VisaLogistics() {
  const { t } = useLang();

  const steps = [
    {
      num: 1,
      title: t("Receive University Admission Letter", "বিশ্ববিদ্যালয়ের ভর্তির চিঠি গ্রহণ করুন"),
      timeline: t("April - May 2028", "এপ্রিল - মে ২০২৮"),
      details: t(
        "Accept your admission offer via DreamApply. Download the official admission letter. Confirm your 100% tuition waiver status (if granted). This letter is MANDATORY for visa application.",
        "DreamApply-এর মাধ্যমে আপনার ভর্তি অফার গ্রহণ করুন। অফিসিয়াল ভর্তির চিঠি ডাউনলোড করুন। আপনার ১০০% টিউশন মওকুফের স্ট্যাটাস নিশ্চিত করুন। এই চিঠি ভিসা আবেদনের জন্য বাধ্যতামূলক।"
      ),
    },
    {
      num: 2,
      title: t("Prepare Required Documents", "প্রয়োজনীয় কাগজপত্র প্রস্তুত করুন"),
      timeline: t("May 2028", "মে ২০২৮"),
      details: t(
        "Gather all documents BEFORE booking India trip. Missing a single document means wasted trip money.",
        "ভারত ভ্রমণ বুক করার আগে সমস্ত ডকুমেন্ট সংগ্রহ করুন। একটি ডকুমেন্ট মিসিং মানে ভ্রমণের টাকা নষ্ট।"
      ),
    },
    {
      num: 3,
      title: t("Book VFS Global Appointment", "VFS Global অ্যাপয়েন্টমেন্ট বুক করুন"),
      timeline: t("May - June 2028", "মে - জুন ২০২৮"),
      details: t(
        "Go to vfsglobal.com/estonia/india. Create account → Select 'New Delhi' → Choose 'D-Visa (Long Stay)' → Select appointment date. Book at least 6-8 weeks before your intended departure. VFS service fee: ~€22 (paid separately). Appointment confirmation will be emailed.",
        "vfsglobal.com/estonia/india-এ যান। অ্যাকাউন্ট তৈরি করুন → 'New Delhi' সিলেক্ট করুন → 'D-Visa (Long Stay)' বেছে নিন → অ্যাপয়েন্টমেন্টের তারিখ বাছাই করুন। প্রস্থানের অন্তত ৬-৮ সপ্তাহ আগে বুক করুন। VFS সার্ভিস ফি: ~€২২।"
      ),
    },
    {
      num: 4,
      title: t("Travel to New Delhi", "নতুন দিল্লিতে ভ্রমণ"),
      timeline: t("June - July 2028", "জুন - জুলাই ২০২৮"),
      details: t(
        "Flight: Dhaka (DAC) → New Delhi (DEL). Round-trip: ~30,000-40,000 BDT. Budget airlines: IndiGo, Air India Express. Book 3-4 weeks early. Stay: 2-3 nights near Chanakyapuri (embassy area). Budget hotels: ₹2,000-4,000/night (~1,800-3,600 BDT). Total India trip: ~50,000 BDT.",
        "ফ্লাইট: ঢাকা (DAC) → নতুন দিল্লি (DEL)। রাউন্ড-ট্রিপ: ~৩০,০০০-৪০,০০০ টাকা। বাজেট এয়ারলাইন: IndiGo, Air India Express। ৩-৪ সপ্তাহ আগে বুক করুন। থাকা: চাণক্যপুরীর কাছে ২-৩ রাত। বাজেট হোটেল: ₹২,০০০-৪,০০০/রাত। মোট ভারত ট্রিপ: ~৫০,০০০ টাকা।"
      ),
    },
    {
      num: 5,
      title: t("VFS Appointment Day", "VFS অ্যাপয়েন্টমেন্টের দিন"),
      timeline: t("Appointment day", "অ্যাপয়েন্টমেন্টের দিন"),
      details: t(
        "Location: VFS Global Application Centre, New Delhi. Arrive 30 min early. Process: (1) Token → Wait → (2) Document verification at counter → (3) Biometric capture (fingerprints + photo) → (4) Fee payment (€100 visa fee + €22 VFS) → (5) Receive tracking number. Total time: 2-4 hours. Dress formally. Keep all originals + 2 photocopies.",
        "অবস্থান: VFS Global Application Centre, নতুন দিল্লি। ৩০ মিনিট আগে পৌঁছান। প্রক্রিয়া: (১) টোকেন → অপেক্ষা → (২) কাউন্টারে ডকুমেন্ট ভেরিফিকেশন → (৩) বায়োমেট্রিক (আঙুলের ছাপ + ছবি) → (৪) ফি পেমেন্ট (€১০০ ভিসা ফি + €২২ VFS) → (৫) ট্র্যাকিং নম্বর পান। মোট সময়: ২-৪ ঘণ্টা।"
      ),
    },
    {
      num: 6,
      title: t("Wait for Processing & Collect Passport", "প্রক্রিয়াকরণ ও পাসপোর্ট সংগ্রহের অপেক্ষা"),
      timeline: t("10-30 business days", "১০-৩০ কার্যদিবস"),
      details: t(
        "Track status at vfsglobal.com using tracking number. Processing: 10-30 business days (typically 15). If approved: D-Visa sticker placed in passport. Collect from VFS Delhi OR opt for courier delivery (extra fee). If rejected: Appeal possible but rare for students with proper documentation.",
        "ট্র্যাকিং নম্বর দিয়ে vfsglobal.com-এ স্ট্যাটাস ট্র্যাক করুন। প্রক্রিয়াকরণ: ১০-৩০ কার্যদিবস (সাধারণত ১৫)। অনুমোদিত হলে: পাসপোর্টে D-Visa স্টিকার লাগানো হবে। VFS দিল্লি থেকে সংগ্রহ করুন অথবা কুরিয়ার ডেলিভারি বেছে নিন।"
      ),
    },
  ];

  const requiredDocs = [
    { doc: t("Valid E-Passport", "বৈধ ই-পাসপোর্ট"), detail: t("Min 2 blank pages, valid 3+ months beyond stay", "ন্যূনতম ২টি ফাঁকা পৃষ্ঠা, থাকার মেয়াদ শেষের ৩+ মাস পর্যন্ত বৈধ") },
    { doc: t("University Admission Letter", "বিশ্ববিদ্যালয়ের ভর্তির চিঠি"), detail: t("Original from TalTech/Tartu via DreamApply", "DreamApply-এর মাধ্যমে TalTech/Tartu থেকে অরিজিনাল") },
    { doc: t("Completed Visa Application Form", "পূর্ণ ভিসা আবেদন ফর্ম"), detail: t("Download from Estonian MFA website, fill in English", "Estonian MFA ওয়েবসাইট থেকে ডাউনলোড, ইংরেজিতে পূরণ") },
    { doc: t("2 Passport Photos", "২টি পাসপোর্ট ছবি"), detail: t("35×45mm, white background, recent (< 6 months)", "৩৫×৪৫মিমি, সাদা ব্যাকগ্রাউন্ড, সাম্প্রতিক (< ৬ মাস)") },
    { doc: t("Bank Statement", "ব্যাংক স্টেটমেন্ট"), detail: t("Min €4,200 (~6.05L BDT), 3-6 months history", "ন্যূনতম €৪,২০০ (~৬.০৫ লক্ষ টাকা), ৩-৬ মাসের ইতিহাস") },
    { doc: t("Sponsorship Letter (if parents' account)", "স্পনসরশিপ লেটার (পিতামাতার অ্যাকাউন্ট হলে)"), detail: t("Notarized, stating full financial support", "নোটারাইজড, সম্পূর্ণ আর্থিক সহায়তার ঘোষণা") },
    { doc: t("Health Insurance", "স্বাস্থ্য বীমা"), detail: t("Schengen-compliant, min €30,000 coverage, full study period", "শেনজেন-সম্মত, ন্যূনতম €৩০,০০০ কভারেজ") },
    { doc: t("IELTS Score Report", "IELTS স্কোর রিপোর্ট"), detail: t("Original TRF (Test Report Form)", "অরিজিনাল TRF") },
    { doc: t("HSC + SSC Transcripts", "HSC + SSC ট্রান্সক্রিপ্ট"), detail: t("Notarized English translations", "নোটারাইজড ইংরেজি অনুবাদ") },
    { doc: t("Motivation Letter Copy", "মোটিভেশন লেটার কপি"), detail: t("Same as submitted to university", "বিশ্ববিদ্যালয়ে জমা দেওয়া একই কপি") },
    { doc: t("Flight Itinerary (optional but helpful)", "ফ্লাইট ইটিনারারি (ঐচ্ছিক কিন্তু সহায়ক)"), detail: t("Tentative booking showing intent to travel", "ভ্রমণের ইচ্ছা দেখানো অস্থায়ী বুকিং") },
    { doc: t("Accommodation Proof", "থাকার প্রমাণপত্র"), detail: t("Dorm reservation confirmation from university", "বিশ্ববিদ্যালয় থেকে ডর্ম রিজার্ভেশন নিশ্চিতকরণ") },
  ];

  const indianTransitInfo = [
    {
      q: t("Do I need an Indian transit visa?", "আমার কি ভারতীয় ট্রানজিট ভিসা লাগবে?"),
      a: t(
        "Bangladeshi nationals need an Indian visa to enter India, even for transit. Since you're visiting the embassy in New Delhi (not just transiting through an airport), you need a regular Indian Tourist Visa, NOT a transit visa.",
        "বাংলাদেশি নাগরিকদের ভারতে প্রবেশের জন্য ভিসা প্রয়োজন, এমনকি ট্রানজিটের জন্যও। যেহেতু আপনি নতুন দিল্লিতে দূতাবাসে যাচ্ছেন, আপনার একটি নিয়মিত ভারতীয় ট্যুরিস্ট ভিসা প্রয়োজন।"
      ),
    },
    {
      q: t("How to apply for Indian visa from Bangladesh?", "বাংলাদেশ থেকে ভারতীয় ভিসার জন্য কীভাবে আবেদন করবেন?"),
      a: t(
        "Apply online at indianvisaonline.gov.in. Select 'Tourist Visa' (short duration). Upload: passport scan, photo, bank statement. Fee: ~৳800-1,600 (varies). Process via Indian Visa Application Centre (IVAC), Dhaka. Processing: 3-7 working days. Apply 3-4 weeks before your Delhi trip.",
        "indianvisaonline.gov.in-এ অনলাইনে আবেদন করুন। 'Tourist Visa' (স্বল্প মেয়াদ) সিলেক্ট করুন। আপলোড: পাসপোর্ট স্ক্যান, ছবি, ব্যাংক স্টেটমেন্ট। ফি: ~৳৮০০-১,৬০০। IVAC, ঢাকায় প্রক্রিয়া। প্রসেসিং: ৩-৭ কার্যদিবস। দিল্লি ট্রিপের ৩-৪ সপ্তাহ আগে আবেদন করুন।"
      ),
    },
    {
      q: t("Documents for Indian visa?", "ভারতীয় ভিসার জন্য কি কি ডকুমেন্ট?"),
      a: t(
        "Valid Bangladeshi passport, completed online form, 2 photos (51×51mm), bank statement (last 3 months), travel itinerary, hotel booking in Delhi, cover letter explaining purpose (Estonian visa appointment), copy of Estonian university admission letter.",
        "বৈধ বাংলাদেশি পাসপোর্ট, পূর্ণ অনলাইন ফর্ম, ২টি ছবি (৫১×৫১মিমি), ব্যাংক স্টেটমেন্ট (শেষ ৩ মাস), ভ্রমণ পরিকল্পনা, দিল্লিতে হোটেল বুকিং, কভার লেটার (Estonian ভিসা অ্যাপয়েন্টমেন্টের উদ্দেশ্য ব্যাখ্যা), Estonian বিশ্ববিদ্যালয়ের ভর্তি চিঠির কপি।"
      ),
    },
  ];

  const costBreakdown = [
    { item: t("Indian Tourist Visa fee", "ভারতীয় ট্যুরিস্ট ভিসা ফি"), bdt: "~৳800-1,600" },
    { item: t("Dhaka → Delhi flight (RT)", "ঢাকা → দিল্লি ফ্লাইট (রিটার্ন)"), bdt: "~৳30,000-40,000" },
    { item: t("Delhi hotel (2-3 nights)", "দিল্লি হোটেল (২-৩ রাত)"), bdt: "~৳5,400-10,800" },
    { item: t("Local transport + food", "স্থানীয় পরিবহন + খাবার"), bdt: "~৳3,000-5,000" },
    { item: t("Estonian D-Visa fee", "Estonian D-Visa ফি"), bdt: "~৳14,400 (€100)" },
    { item: t("VFS service fee", "VFS সার্ভিস ফি"), bdt: "~৳3,170 (€22)" },
    { item: t("TOTAL", "মোট"), bdt: "~৳57,000-75,000" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> {t("Back to Guide", "গাইডে ফিরুন")}
              </Button>
            </Link>
            <div className="flex items-center gap-2 font-bold text-lg">
              <Plane className="w-5 h-5 text-primary" />
              <span className="gradient-text">{t("Visa Logistics", "ভিসা লজিস্টিক্স")}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl mb-10">
          <img src={visaProcessImg} alt="Visa application process" className="w-full h-48 md:h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-card-foreground">
              {t("D-Visa via New Delhi — Step-by-Step", "নতুন দিল্লির মাধ্যমে D-Visa — ধাপে ধাপে")}
            </h1>
            <p className="text-muted-foreground mt-2">
              {t("No Estonian embassy in Bangladesh. Complete guide for visa processing through India.", "বাংলাদেশে কোনো Estonian দূতাবাস নেই। ভারতের মাধ্যমে ভিসা প্রসেসিংয়ের সম্পূর্ণ গাইড।")}
            </p>
          </div>
        </div>

        {/* Cost Summary */}
        <div className="glass-card p-6 rounded-2xl mb-8">
          <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            {t("Total Visa Trip Cost Breakdown", "মোট ভিসা ট্রিপ খরচের বিবরণ")}
          </h2>
          <div className="space-y-2">
            {costBreakdown.map((item, i) => (
              <div key={i} className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm ${i === costBreakdown.length - 1 ? "bg-primary/10 font-bold text-card-foreground" : "border-b border-border/50"}`}>
                <span className={i === costBreakdown.length - 1 ? "text-card-foreground" : "text-muted-foreground"}>{item.item}</span>
                <span className={`font-mono ${i === costBreakdown.length - 1 ? "text-primary" : "text-card-foreground"}`}>{item.bdt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-step process */}
        <h2 className="text-2xl font-bold text-card-foreground mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          {t("6-Step Visa Process", "৬-ধাপ ভিসা প্রক্রিয়া")}
        </h2>
        <div className="space-y-4 mb-10">
          {steps.map((step) => (
            <div key={step.num} className="glass-card rounded-2xl p-5 md:p-6 flex gap-4 items-start hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                {step.num}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-lg font-bold text-card-foreground">{step.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {step.timeline}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Required Documents Checklist */}
        <div className="glass-card p-6 rounded-2xl mb-8">
          <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-success" />
            {t("Required Documents Checklist", "প্রয়োজনীয় কাগজপত্রের চেকলিস্ট")}
          </h2>
          <div className="space-y-3">
            {requiredDocs.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <span className="text-lg mt-0.5">☐</span>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">{item.doc}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indian Transit Visa */}
        <div className="glass-card p-6 rounded-2xl mb-8 border-l-4 border-accent">
          <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
            🇮🇳 {t("Indian Visa for Bangladeshi Citizens", "বাংলাদেশি নাগরিকদের জন্য ভারতীয় ভিসা")}
          </h2>
          <div className="space-y-4">
            {indianTransitInfo.map((item, i) => (
              <div key={i} className="p-4 bg-muted/30 rounded-xl">
                <h4 className="font-bold text-card-foreground mb-2">{item.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Warnings */}
        <div className="glass-card p-6 rounded-2xl border-l-4 border-destructive mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-card-foreground mb-2">{t("Critical Warnings", "গুরুত্বপূর্ণ সতর্কতা")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>{t("Apply for Indian visa FIRST", "আগে ভারতীয় ভিসার জন্য আবেদন করুন")}.</strong> {t("Without it, you cannot enter India for the Estonian visa appointment.", "এটি ছাড়া আপনি Estonian ভিসা অ্যাপয়েন্টমেন্টের জন্য ভারতে প্রবেশ করতে পারবেন না।")}</li>
                <li>• <strong>{t("Keep ALL original documents", "সমস্ত মূল কাগজপত্র রাখুন")}.</strong> {t("Plus 2 photocopies of each. VFS may retain originals during processing.", "প্রতিটির ২ কপি। VFS প্রসেসিংয়ের সময় মূল কপি রাখতে পারে।")}</li>
                <li>• <strong>{t("Bank statement must be recent", "ব্যাংক স্টেটমেন্ট সাম্প্রতিক হতে হবে")}.</strong> {t("Issued within 1 month of visa application date. Stale statements = rejection.", "ভিসা আবেদনের তারিখের ১ মাসের মধ্যে ইস্যু করা। পুরানো স্টেটমেন্ট = প্রত্যাখ্যান।")}</li>
                <li>• <strong>{t("Don't book non-refundable flights before visa approval", "ভিসা অনুমোদনের আগে নন-রিফান্ডেবল ফ্লাইট বুক করবেন না")}.</strong> {t("Wait for visa stamp, then book Dhaka → Tallinn.", "ভিসা স্ট্যাম্পের জন্য অপেক্ষা করুন, তারপর ঢাকা → তালিন বুক করুন।")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8">
              ← {t("Back to Full Guide", "সম্পূর্ণ গাইডে ফিরুন")}
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
