import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useLang } from "@/lib/i18n";

export const CountryComparison = () => {
  const { t } = useLang();

  const comparisonData = [
    {
      factor: t("Tuition (Non-EU)", "টিউশন (নন-ইইউ)"),
      estonia: t("€2,500-€7,200/yr (100% waiver available)", "€২,৫০০-€৭,২০০/বছর (১০০% মওকুফ সম্ভব)"),
      germany: t("Free at public unis; semester fees €200-€500", "পাবলিক বিশ্ববিদ্যালয়ে বিনামূল্যে; সেমিস্টার ফি €২০০-€৫০০"),
      ireland: t("€9,850-€55,000/yr; high financial barrier", "€৯,৮৫০-€৫৫,০০০/বছর; উচ্চ আর্থিক বাধা"),
    },
    {
      factor: t("Cost of Living", "জীবনযাত্রার ব্যয়"),
      estonia: t("€550-€850/month (Tartu cheaper)", "€৫৫০-€৮৫০/মাস (তার্তু সস্তা)"),
      germany: t("€800-€1,100/month (Munich/Berlin higher)", "€৮০০-€১,১০০/মাস (মিউনিখ/বার্লিন বেশি)"),
      ireland: t("€1,000-€1,500+/month (Dublin housing crisis)", "€১,০০০-€১,৫০০+/মাস (ডাবলিন হাউজিং ক্রাইসিস)"),
    },
    {
      factor: t("Scholarship Access", "বৃত্তি সুবিধা"),
      estonia: t("High merit-based tuition waivers; IT Academy stipends", "উচ্চ মেধা-ভিত্তিক টিউশন মওকুফ; IT Academy স্টাইপেন্ড"),
      germany: t("Low tuition makes scholarships less common; living stipends focus", "কম টিউশনে বৃত্তি কম; জীবনযাত্রা স্টাইপেন্ড ফোকাস"),
      ireland: t("Limited full-ride; mostly partial grants", "সীমিত ফুল-রাইড; বেশিরভাগ আংশিক গ্রান্ট"),
    },
    {
      factor: t("Work Rules (Student)", "কাজের নিয়ম (ছাত্র)"),
      estonia: t("Up to 40hrs/week; no separate permit needed", "সপ্তাহে ৪০ ঘণ্টা পর্যন্ত; আলাদা পারমিট লাগে না"),
      germany: t("20hrs/week (or 120 full days/year)", "সপ্তাহে ২০ ঘণ্টা (বা বছরে ১২০ পূর্ণ দিন)"),
      ireland: t("20hrs/week (40 during holidays)", "সপ্তাহে ২০ ঘণ্টা (ছুটিতে ৪০)"),
    },
    {
      factor: t("Part-Time Wage (€/hr)", "পার্ট-টাইম মজুরি (€/ঘণ্টা)"),
      estonia: t("€5-8/hr (basic jobs); €12-20/hr (IT internship)", "€৫-৮/ঘণ্টা (সাধারণ); €১২-২০/ঘণ্টা (IT ইন্টার্নশিপ)"),
      germany: t("€12.41/hr (minimum wage); €15-25/hr (IT)", "€১২.৪১/ঘণ্টা (ন্যূনতম মজুরি); €১৫-২৫/ঘণ্টা (IT)"),
      ireland: t("€12.70/hr (minimum wage); €15-30/hr (IT)", "€১২.৭০/ঘণ্টা (ন্যূনতম মজুরি); €১৫-৩০/ঘণ্টা (IT)"),
    },
    {
      factor: t("Approx. Monthly Student Income", "আনুমানিক মাসিক ছাত্র আয়"),
      estonia: t("€400-€1,200/mo (20-40hrs × €5-8)", "€৪০০-€১,২০০/মাস (২০-৪০ ঘণ্টা × €৫-৮)"),
      germany: t("€800-€1,100/mo (20hrs × €12.41)", "€৮০০-€১,১০০/মাস (২০ ঘণ্টা × €১২.৪১)"),
      ireland: t("€800-€1,100/mo (20hrs × €12.70)", "€৮০০-€১,১০০/মাস (২০ ঘণ্টা × €১২.৭০)"),
    },
    {
      factor: t("Post-Study Visa", "পড়াশোনা পরবর্তী ভিসা"),
      estonia: t("9 months job-seeking visa", "৯ মাসের চাকরি খোঁজার ভিসা"),
      germany: t("18 months job-seeker visa", "১৮ মাসের চাকরি খোঁজার ভিসা"),
      ireland: t("12-24 months (Stamp 1G)", "১২-২৪ মাস (Stamp 1G)"),
    },
    {
      factor: t("PR Pathway", "PR পথ"),
      estonia: t("5-8 years residence; B1 Estonian required", "৫-৮ বছর বসবাস; B1 Estonian প্রয়োজন"),
      germany: t("2-5 years (Blue Card fast-track possible)", "২-৫ বছর (Blue Card ফাস্ট-ট্র্যাক সম্ভব)"),
      ireland: t("5 years residence; English-speaking advantage", "৫ বছর বসবাস; ইংরেজি-ভাষী সুবিধা"),
    },
    {
      factor: t("Admission Barrier", "ভর্তি বাধা"),
      estonia: t("Direct entry with HSC; DreamApply portal", "HSC দিয়ে সরাসরি ভর্তি; DreamApply পোর্টাল"),
      germany: t("Often requires Studienkolleg (foundation year); higher GPA threshold", "প্রায়ই Studienkolleg প্রয়োজন; উচ্চ GPA থ্রেশহোল্ড"),
      ireland: t("Direct entry but financially prohibitive at 20k BDT/month income", "সরাসরি ভর্তি কিন্তু ২০ হাজার টাকা/মাস আয়ে আর্থিকভাবে অসম্ভব"),
    },
    {
      factor: t("Language of Instruction", "শিক্ষার ভাষা"),
      estonia: t("English (all IT programs)", "ইংরেজি (সব IT প্রোগ্রাম)"),
      germany: t("Many programs in German; English options limited at BSc level", "বেশিরভাগ প্রোগ্রাম জার্মানে; BSc-তে ইংরেজি সীমিত"),
      ireland: t("English (native)", "ইংরেজি (দেশীয়)"),
    },
  ];

  return (
    <div className="glass-card p-6 rounded-2xl mt-8">
      <h3 className="text-2xl font-bold text-card-foreground mb-1">
        🌍 {t("Estonia vs. Germany vs. Ireland — Strategic Comparison", "Estonia বনাম জার্মানি বনাম আয়ারল্যান্ড — কৌশলগত তুলনা")}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {t("Why Estonia is the optimal entry point for a middle-income Bangladeshi student.", "কেন Estonia মধ্যবিত্ত বাংলাদেশি ছাত্রদের জন্য সর্বোত্তম প্রবেশ পথ।")}
      </p>
      <div className="overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-bold min-w-[130px] sticky left-0 bg-muted/50 z-10">{t("Factor", "বিষয়")}</TableHead>
              <TableHead className="font-bold min-w-[200px] text-center">🇪🇪 Estonia</TableHead>
              <TableHead className="font-bold min-w-[200px] text-center">🇩🇪 {t("Germany", "জার্মানি")}</TableHead>
              <TableHead className="font-bold min-w-[200px] text-center">🇮🇪 {t("Ireland", "আয়ারল্যান্ড")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, idx) => (
              <TableRow key={idx} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-semibold text-card-foreground sticky left-0 bg-card z-10">{row.factor}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{row.estonia}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{row.germany}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{row.ireland}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
        <p className="text-sm text-card-foreground">
          <strong>{t("Conclusion:", "উপসংহার:")}</strong> {t(
            "Germany has higher hourly wages (€12.41 min) but limits students to 20hrs/week. Ireland pays well (€12.70/hr min) but tuition is €9,850+/yr. Estonia allows 40hrs/week work, offers 100% tuition waivers, and has the lowest entry barrier with English-taught IT programs — making it the optimal starting point for budget-constrained students.",
            "জার্মানিতে ঘণ্টাপ্রতি মজুরি বেশি (€১২.৪১ ন্যূনতম) কিন্তু ছাত্রদের সপ্তাহে ২০ ঘণ্টায় সীমাবদ্ধ। আয়ারল্যান্ডে ভালো বেতন (€১২.৭০/ঘণ্টা) কিন্তু টিউশন €৯,৮৫০+/বছর। Estonia সপ্তাহে ৪০ ঘণ্টা কাজের অনুমতি দেয়, ১০০% টিউশন মওকুফ দেয়, এবং ইংরেজি-শিক্ষিত IT প্রোগ্রামে সবচেয়ে কম প্রবেশ বাধা — বাজেট-সীমিত ছাত্রদের জন্য সর্বোত্তম শুরু।"
          )}
        </p>
      </div>
    </div>
  );
};
