import { useState, useMemo } from "react";
import { Calculator, TrendingUp, PiggyBank, Bus, Train, Plane } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLang } from "@/lib/i18n";

const BDT_PER_EUR = 144;

type TravelMode = "flight" | "bus" | "train";

const TRAVEL_COST: Record<TravelMode, { bdt: number; label: { en: string; bn: string } }> = {
  flight: { bdt: 50000, label: { en: "Flight (Dhaka⇄Delhi RT, ~৳50,000)", bn: "ফ্লাইট (ঢাকা⇄দিল্লি, ~৳৫০,০০০)" } },
  bus:    { bdt: 18000, label: { en: "Bus (Dhaka→Kolkata→Delhi, ~৳15-20k)", bn: "বাস (ঢাকা→কলকাতা→দিল্লি, ~৳১৫-২০ হাজার)" } },
  train:  { bdt: 22000, label: { en: "Train (via Kolkata, ~৳20-25k)", bn: "ট্রেন (কলকাতা হয়ে, ~৳২০-২৫ হাজার)" } },
};

// Helper: state holds string so user can clear input. Number() of "" === 0, but
// we treat empty separately via the original string state.
const numOr = (v: string, fallback = 0) => (v.trim() === "" ? fallback : Number(v) || 0);

export const CostCalculator = () => {
  const { t, lang } = useLang();
  const [budget, setBudget] = useState<string>("1500000");
  const [monthlyLiving, setMonthlyLiving] = useState<string>("400");
  const [tuitionPerYear, setTuitionPerYear] = useState<string>("0");
  const [partTimeHours, setPartTimeHours] = useState<string>("20");
  const [hourlyRate, setHourlyRate] = useState<string>("7");
  const [travelMode, setTravelMode] = useState<TravelMode>("flight");

  const budgetN = numOr(budget);
  const livingN = numOr(monthlyLiving);
  const tuitionN = numOr(tuitionPerYear);
  const hoursN = numOr(partTimeHours);
  const rateN = numOr(hourlyRate);

  const expenses = useMemo(() => [
    { label: t("E-Passport", "ই-পাসপোর্ট"), bdt: 8000 },
    { label: t("NID / Smart Card", "এনআইডি"), bdt: 500 },
    { label: t("IELTS Registration", "আইইএলটিএস"), bdt: 28450 },
    { label: t("SAT Registration", "এসএটি"), bdt: 15000 },
    { label: t("Application & Notary", "আবেদন ও নোটারি"), bdt: 20000 },
    { label: t("D-Visa Fee + VFS", "ডি-ভিসা + VFS"), bdt: 17570 },
    { label: TRAVEL_COST[travelMode].label[lang], bdt: TRAVEL_COST[travelMode].bdt },
    { label: t("Health Insurance", "স্বাস্থ্য বীমা"), bdt: 14400 },
    { label: t("One-Way Flight to Tallinn", "তালিন ওয়ান-ওয়ে ফ্লাইট"), bdt: 93600 },
    { label: t("First Month Dorm + Deposit", "প্রথম মাস ডর্ম + জামানত"), bdt: 50400 },
    { label: t("Tuition (Year 1)", "টিউশন (বছর ১)"), bdt: tuitionN * BDT_PER_EUR },
    { label: t("Bank Solvency (€4,200)", "ব্যাংক সচ্ছলতা (€৪,২০০)"), bdt: 604800 },
  ], [tuitionN, travelMode, lang, t]);

  const totalExpense = expenses.reduce((s, e) => s + e.bdt, 0);
  const remaining = budgetN - totalExpense;
  const monthlyIncome = hoursN * rateN * 4.33;
  const monthlySavings = monthlyIncome - livingN;

  return (
    <div className="glass-card p-4 sm:p-6 rounded-2xl mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-card-foreground">
            {t("Personalized Cost Calculator", "ব্যক্তিগত খরচ ক্যালকুলেটর")}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm">
            {t(`Adjust inputs to your situation. Rate: 1 EUR = ${BDT_PER_EUR} BDT.`,
               `নিজের অনুযায়ী পরিবর্তন করুন। রেট: ১ ইউরো = ${BDT_PER_EUR} টাকা।`)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">{t("Total Budget (BDT)", "মোট বাজেট (টাকা)")}</Label>
            <Input
              inputMode="numeric"
              value={budget}
              onChange={(e) => setBudget(e.target.value.replace(/[^\d]/g, ""))}
              placeholder="1500000"
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">
              = €{Math.round(budgetN / BDT_PER_EUR).toLocaleString()}
            </p>
          </div>

          <div>
            <Label className="text-sm font-medium">{t("Monthly Living Cost (€)", "মাসিক জীবনযাত্রা (€)")}</Label>
            <Input
              inputMode="numeric"
              value={monthlyLiving}
              onChange={(e) => setMonthlyLiving(e.target.value.replace(/[^\d]/g, ""))}
              placeholder="400"
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">
              {t("Tartu: €400-€700 | Tallinn: €600-€900", "তার্তু: €৪০০-৭০০ | তালিন: €৬০০-৯০০")}
            </p>
          </div>

          <div>
            <Label className="text-sm font-medium">
              {t("Tuition per Year (€) — 0 if 100% waiver", "বার্ষিক টিউশন (€) — ১০০% ওয়েভার হলে ০")}
            </Label>
            <Input
              inputMode="numeric"
              value={tuitionPerYear}
              onChange={(e) => setTuitionPerYear(e.target.value.replace(/[^\d]/g, ""))}
              placeholder="0"
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">TalTech: ~€7,000 | Tartu: ~€6,000</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-sm font-medium">{t("Part-Time Hrs/Week", "পার্ট-টাইম ঘণ্টা")}</Label>
              <Input
                inputMode="numeric"
                value={partTimeHours}
                onChange={(e) => setPartTimeHours(e.target.value.replace(/[^\d]/g, ""))}
                placeholder="20"
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm font-medium">{t("Hourly Rate (€)", "ঘণ্টায় হার (€)")}</Label>
              <Input
                inputMode="numeric"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value.replace(/[^\d]/g, ""))}
                placeholder="7"
                className="mt-1"
              />
            </div>
          </div>

          {/* Travel mode */}
          <div>
            <Label className="text-sm font-medium block mb-2">
              {t("India Trip Travel Mode (for visa)", "ভারত ভ্রমণের মাধ্যম (ভিসার জন্য)")}
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {([
                { key: "flight" as const, Icon: Plane, label: t("Flight", "ফ্লাইট") },
                { key: "bus"    as const, Icon: Bus,   label: t("Bus",    "বাস") },
                { key: "train"  as const, Icon: Train, label: t("Train",  "ট্রেন") },
              ]).map(({ key, Icon, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTravelMode(key)}
                  className={`flex flex-col items-center gap-1 py-2 px-2 rounded-lg border transition-all text-xs font-medium ${
                    travelMode === key
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {TRAVEL_COST[travelMode].label[lang]}
            </p>
          </div>

          <div className="p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground">
            {t("Estimated monthly income:", "আনুমানিক মাসিক আয়:")}{" "}
            <strong className="text-foreground">€{Math.round(monthlyIncome)}</strong>
            {" "}({hoursN}h × €{rateN} × 4.33)
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          <h4 className="font-semibold text-card-foreground flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" /> {t("Full Expense Breakdown", "সম্পূর্ণ খরচের বিভাজন")}
          </h4>
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {expenses.map((e, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-border/50 pb-1.5">
                <span className="text-card-foreground text-xs sm:text-sm pr-2">{e.label}</span>
                <span className="font-mono font-semibold text-muted-foreground text-xs whitespace-nowrap">
                  ৳{e.bdt.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-2 border-t-2 border-primary/30">
            <span className="font-bold text-card-foreground">{t("Total Needed", "মোট প্রয়োজন")}</span>
            <span className="font-mono font-bold text-primary">৳{totalExpense.toLocaleString()}</span>
          </div>
          <div className={`flex justify-between items-center ${remaining >= 0 ? "text-success" : "text-destructive"}`}>
            <span className="font-bold">{remaining >= 0 ? t("Surplus", "উদ্বৃত্ত") : t("Shortfall", "ঘাটতি")}</span>
            <span className="font-mono font-bold">৳{Math.abs(remaining).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Savings summary card */}
      <div className={`rounded-xl p-4 border-2 ${
        monthlySavings >= 0
          ? "bg-success/10 border-success/30"
          : "bg-destructive/10 border-destructive/30"
      }`}>
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            monthlySavings >= 0 ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
          }`}>
            <PiggyBank className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-card-foreground text-sm sm:text-base">
              {monthlySavings >= 0
                ? t("Potential Monthly Savings", "সম্ভাব্য মাসিক সঞ্চয়")
                : t("Monthly Funding Gap", "মাসিক ঘাটতি")}
            </h5>
            <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">{t("Per Month", "প্রতি মাস")}</p>
                <p className={`font-mono font-bold text-lg ${monthlySavings >= 0 ? "text-success" : "text-destructive"}`}>
                  €{Math.round(Math.abs(monthlySavings))}
                </p>
                <p className="text-xs text-muted-foreground">
                  ৳{Math.round(Math.abs(monthlySavings) * BDT_PER_EUR).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t("Per Year", "প্রতি বছর")}</p>
                <p className={`font-mono font-bold text-lg ${monthlySavings >= 0 ? "text-success" : "text-destructive"}`}>
                  €{Math.round(Math.abs(monthlySavings) * 12)}
                </p>
                <p className="text-xs text-muted-foreground">
                  ৳{Math.round(Math.abs(monthlySavings) * 12 * BDT_PER_EUR).toLocaleString()}
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {monthlySavings >= 0
                ? t("Part-time income covers living. Build a 3-month emergency buffer.",
                    "পার্ট-টাইম আয় দিয়ে জীবনযাত্রা চলবে। ৩ মাসের জরুরি তহবিল তৈরি করুন।")
                : t("Income won't fully cover living. Save this annual gap before departure.",
                    "আয় দিয়ে পুরো খরচ চলবে না। যাওয়ার আগে এই বার্ষিক ঘাটতি জমান।")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
