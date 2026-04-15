import { useState, useMemo } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BDT_PER_EUR = 144;

interface Expense {
  label: string;
  amountBDT: number;
  note: string;
}

export const CostCalculator = () => {
  const [budget, setBudget] = useState(1500000);
  const [monthlyLiving, setMonthlyLiving] = useState(650);
  const [tuitionPerYear, setTuitionPerYear] = useState(0);
  const [partTimeHours, setPartTimeHours] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(7);

  const expenses: Expense[] = useMemo(() => [
    { label: "E-Passport", amountBDT: 8000, note: "Apply after HSC exams" },
    { label: "NID / Smart Card", amountBDT: 500, note: "Election office" },
    { label: "IELTS Registration", amountBDT: 28450, note: "British Council BD" },
    { label: "SAT Registration", amountBDT: 15000, note: "Recommended, not mandatory" },
    { label: "Application & Notary", amountBDT: 20000, note: "DreamApply + notarized docs" },
    { label: "D-Visa Fee + VFS", amountBDT: 17570, note: "€100 + €22 = €122" },
    { label: "India Trip (Visa)", amountBDT: 50000, note: "Dhaka→Delhi RT + 3-day stay" },
    { label: "Health Insurance", amountBDT: 14400, note: "€100 Schengen coverage" },
    { label: "One-Way Flight", amountBDT: 93600, note: "€650 — book 2-3 months early" },
    { label: "First Month Dorm + Deposit", amountBDT: 50400, note: "€350 initial settlement" },
    { label: "Tuition (1st year)", amountBDT: tuitionPerYear * BDT_PER_EUR, note: tuitionPerYear === 0 ? "100% waiver" : `€${tuitionPerYear.toLocaleString()}` },
    { label: "Bank Solvency (€4,200)", amountBDT: 604800, note: "€350/mo × 12 — must show in account" },
  ], [tuitionPerYear]);

  const totalExpense = expenses.reduce((s, e) => s + e.amountBDT, 0);
  const remaining = budget - totalExpense;
  const monthlyIncome = partTimeHours * hourlyRate * 4.33;
  const gap = monthlyLiving - monthlyIncome;

  return (
    <div className="glass-card p-6 rounded-2xl mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-card-foreground">Personalized Cost Calculator</h3>
          <p className="text-muted-foreground text-sm">Adjust inputs to match your situation. Rate: 1 EUR = {BDT_PER_EUR} BDT.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Total Budget (BDT)</Label>
            <Input type="number" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="mt-1" />
            <p className="text-xs text-muted-foreground mt-1">= €{Math.round(budget / BDT_PER_EUR).toLocaleString()}</p>
          </div>
          <div>
            <Label className="text-sm font-medium">Monthly Living Cost (€)</Label>
            <Input type="number" value={monthlyLiving} onChange={(e) => setMonthlyLiving(Number(e.target.value))} className="mt-1" />
            <p className="text-xs text-muted-foreground mt-1">Tartu: €550-€850 | Tallinn: €700-€1,000</p>
          </div>
          <div>
            <Label className="text-sm font-medium">Tuition per Year (€) — Enter 0 if 100% waiver</Label>
            <Input type="number" value={tuitionPerYear} onChange={(e) => setTuitionPerYear(Number(e.target.value))} className="mt-1" />
            <p className="text-xs text-muted-foreground mt-1">TalTech: ~€7,000 | Tartu: ~€6,000</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-sm font-medium">Part-Time Hrs/Week</Label>
              <Input type="number" value={partTimeHours} onChange={(e) => setPartTimeHours(Number(e.target.value))} className="mt-1" />
            </div>
            <div>
              <Label className="text-sm font-medium">Hourly Rate (€)</Label>
              <Input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} className="mt-1" />
              <p className="text-xs text-muted-foreground mt-1">Basic: €5-8 | IT: €12-20</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground p-2 bg-muted/50 rounded-lg">
            Estimated monthly income: <strong>€{Math.round(monthlyIncome)}</strong> ({partTimeHours}hrs × €{hourlyRate} × 4.33 weeks)
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-card-foreground flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" /> Full Expense Breakdown
          </h4>
          {expenses.map((e, i) => (
            <div key={i} className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
              <div>
                <span className="text-card-foreground">{e.label}</span>
                <span className="text-xs text-muted-foreground ml-2">({e.note})</span>
              </div>
              <span className="font-mono font-semibold text-muted-foreground">
                {e.amountBDT > 0 ? `৳${e.amountBDT.toLocaleString()}` : "৳0"}
              </span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-2 border-t-2 border-primary/30">
            <span className="font-bold text-card-foreground">Total Needed</span>
            <span className="font-mono font-bold text-primary">৳{totalExpense.toLocaleString()}</span>
          </div>
          <div className={`flex justify-between items-center pt-1 ${remaining >= 0 ? "text-success" : "text-destructive"}`}>
            <span className="font-bold">{remaining >= 0 ? "Surplus" : "Shortfall"}</span>
            <span className="font-mono font-bold">৳{Math.abs(remaining).toLocaleString()}</span>
          </div>
          {gap > 0 && (
            <div className="p-3 bg-destructive/10 rounded-lg text-sm text-destructive border border-destructive/20 mt-2">
              Monthly gap: €{Math.round(gap)}. Part-time won't fully cover living.
              Annual savings needed: ~€{Math.round(gap * 12)} (~৳{Math.round(gap * 12 * BDT_PER_EUR).toLocaleString()}).
            </div>
          )}
          {gap <= 0 && (
            <div className="p-3 bg-success/10 rounded-lg text-sm text-success border border-success/20 mt-2">
              Part-time income covers living costs. Monthly savings: €{Math.round(Math.abs(gap))}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
