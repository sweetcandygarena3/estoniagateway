import { useState, useMemo } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BDT_PER_EUR = 130;

interface Expense {
  label: string;
  amountBDT: number;
  note: string;
}

export const CostCalculator = () => {
  const [budget, setBudget] = useState(1500000);
  const [monthlyLiving, setMonthlyLiving] = useState(600);
  const [tuitionPerYear, setTuitionPerYear] = useState(0);
  const [partTimeHours, setPartTimeHours] = useState(20);
  const hourlyRate = 6.5;

  const expenses: Expense[] = useMemo(() => [
    { label: "E-Passport", amountBDT: 8000, note: "Apply early" },
    { label: "IELTS Registration", amountBDT: 28450, note: "British Council BD" },
    { label: "SAT Registration", amountBDT: 15000, note: "collegeboard.org" },
    { label: "Application & Notary", amountBDT: 20000, note: "DreamApply + docs" },
    { label: "Visa Fee & Insurance", amountBDT: 35000, note: "D-Visa + health" },
    { label: "One-Way Flight", amountBDT: 100000, note: "Book 2-3 months early" },
    { label: "Tuition (1st year)", amountBDT: tuitionPerYear * BDT_PER_EUR, note: tuitionPerYear === 0 ? "100% waiver!" : `€${tuitionPerYear.toLocaleString()}` },
    { label: "Living Costs (12 months)", amountBDT: monthlyLiving * 12 * BDT_PER_EUR, note: `€${monthlyLiving}/mo × 12` },
  ], [monthlyLiving, tuitionPerYear]);

  const totalExpense = expenses.reduce((s, e) => s + e.amountBDT, 0);
  const remaining = budget - totalExpense;
  const monthlyIncome = partTimeHours * hourlyRate * 4;
  const gap = monthlyLiving - monthlyIncome;

  return (
    <div className="glass-card p-6 rounded-2xl mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-card-foreground">💰 Personalized Cost Calculator</h3>
          <p className="text-muted-foreground text-sm">Adjust the sliders to match your situation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Total Budget (BDT)</Label>
            <Input
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">≈ €{Math.round(budget / BDT_PER_EUR).toLocaleString()}</p>
          </div>
          <div>
            <Label className="text-sm font-medium">Monthly Living Cost (€)</Label>
            <Input
              type="number"
              value={monthlyLiving}
              onChange={(e) => setMonthlyLiving(Number(e.target.value))}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm font-medium">Tuition per Year (€) — 0 if waiver</Label>
            <Input
              type="number"
              value={tuitionPerYear}
              onChange={(e) => setTuitionPerYear(Number(e.target.value))}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm font-medium">Part-Time Hours/Week</Label>
            <Input
              type="number"
              value={partTimeHours}
              onChange={(e) => setPartTimeHours(Number(e.target.value))}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Monthly income: €{Math.round(monthlyIncome)} (at €{hourlyRate}/hr)
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-card-foreground flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" /> Expense Breakdown
          </h4>
          {expenses.map((e, i) => (
            <div key={i} className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
              <div>
                <span className="text-card-foreground">{e.label}</span>
                <span className="text-xs text-muted-foreground ml-2">({e.note})</span>
              </div>
              <span className="font-mono font-semibold text-muted-foreground">
                {e.amountBDT > 0 ? `৳${e.amountBDT.toLocaleString()}` : "—"}
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
              ⚠️ Monthly gap: €{Math.round(gap)}. Part-time work won't fully cover living costs.
              You'll need ~€{Math.round(gap * 12)}/year from savings.
            </div>
          )}
          {gap <= 0 && (
            <div className="p-3 bg-success/10 rounded-lg text-sm text-success border border-success/20 mt-2">
              ✅ Part-time income covers your living costs! You can even save €{Math.round(Math.abs(gap))}/month.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
