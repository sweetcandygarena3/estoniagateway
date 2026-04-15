import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { AlertCircle } from "lucide-react";
import { CostCalculator } from "./CostCalculator";

export const FinanceSection = () => {
  const scenarioA = [
    { name: "Pre-departure costs", value: 214450, color: "#0ea5e9" },
    { name: "Tuition Year 1 (no waiver)", value: 1008000, color: "#ef4444" },
    { name: "Bank solvency (€4,200)", value: 604800, color: "#22c55e" },
  ];

  const scenarioB = [
    { name: "Pre-departure costs", value: 214450, color: "#0ea5e9" },
    { name: "Tuition Year 1", value: 0, color: "#6366f1" },
    { name: "Bank solvency (€4,200)", value: 604800, color: "#22c55e" },
  ];

  const incomeVsCostData = [
    { category: "Basic Job (€5-8/hr, 20hr/wk)", income: 520, living: 0, color: "#f59e0b" },
    { category: "IT Internship (€15/hr, 20hr/wk)", income: 1200, living: 0, color: "#22c55e" },
    { category: "Living Cost (Tartu)", income: 0, living: 650, color: "#ef4444" },
    { category: "Living Cost (Tallinn)", income: 0, living: 850, color: "#ef4444" },
  ];

  const preDepartureCosts = [
    { label: "E-Passport", bdt: "~8,000", eur: "€56", note: "Apply June-Aug 2026" },
    { label: "NID / Smart Card", bdt: "~500", eur: "—", note: "Free or minimal fee" },
    { label: "IELTS Registration", bdt: "~28,450", eur: "€198", note: "British Council Bangladesh" },
    { label: "SAT Registration", bdt: "~15,000", eur: "€104", note: "collegeboard.org (recommended, not mandatory)" },
    { label: "Application & Notary Fees", bdt: "~20,000", eur: "€139", note: "DreamApply + notarized transcripts" },
    { label: "D-Visa Fee", bdt: "~14,400", eur: "€100", note: "Estonian Embassy, New Delhi" },
    { label: "VFS Service Fee", bdt: "~3,170", eur: "€22", note: "VFS Global processing" },
    { label: "India Trip (Visa Interview)", bdt: "~50,000", eur: "€347", note: "Dhaka→Delhi RT + 3 days stay" },
    { label: "Health Insurance (1 year)", bdt: "~14,400", eur: "€100", note: "Schengen-compliant coverage" },
    { label: "One-way Flight to Tallinn", bdt: "~93,600", eur: "€650", note: "Book 2-3 months early" },
    { label: "First Month Dorm + Deposit", bdt: "~50,400", eur: "€350", note: "Security deposit + first rent" },
  ];

  const totalPreDeparture = 297920;

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold gradient-text">Financial Architecture</h2>
        <p className="text-muted-foreground mt-2">
          All figures calculated at 1 EUR = 144 BDT (April 2026 rate). Sources: TalTech, Tartu, studyinestonia.ee, VFS Global.
        </p>
      </div>

      {/* Pre-departure costs table */}
      <div className="glass-card p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-card-foreground mb-4">Pre-Departure Expenditure Model (Dhaka → Tallinn)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 text-card-foreground">Expense</th>
                <th className="text-right py-2 px-3 text-card-foreground">BDT</th>
                <th className="text-right py-2 px-3 text-card-foreground">EUR</th>
                <th className="text-left py-2 px-3 text-card-foreground">Note</th>
              </tr>
            </thead>
            <tbody>
              {preDepartureCosts.map((item, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-2 px-3 text-card-foreground font-medium">{item.label}</td>
                  <td className="py-2 px-3 text-right font-mono text-muted-foreground">{item.bdt}</td>
                  <td className="py-2 px-3 text-right font-mono text-muted-foreground">{item.eur}</td>
                  <td className="py-2 px-3 text-xs text-muted-foreground">{item.note}</td>
                </tr>
              ))}
              <tr className="bg-primary/10 font-bold">
                <td className="py-2 px-3 text-card-foreground">TOTAL Pre-Departure</td>
                <td className="py-2 px-3 text-right font-mono text-primary">~৳{totalPreDeparture.toLocaleString()}</td>
                <td className="py-2 px-3 text-right font-mono text-primary">~€2,070</td>
                <td className="py-2 px-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Two scenarios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-6 rounded-2xl border-2 border-destructive/30">
          <h3 className="text-lg font-bold text-card-foreground mb-1 text-center">
            Scenario A: NO Scholarship
          </h3>
          <p className="text-sm text-destructive text-center mb-4 font-semibold">
            Total: ~18.3 Lakh BDT (€12,700) — EXCEEDS 15L BUDGET
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={scenarioA} cx="50%" cy="50%" outerRadius={90} dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                {scenarioA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `৳${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-3 p-3 bg-destructive/10 rounded-lg text-sm text-destructive border border-destructive/20">
            Prep (~2.1L) + Tuition €7,000 (~10.1L) + Bank €4,200 (~6.1L) = ~18.3 Lakh BDT. Budget breaks.
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border-2 border-success/30">
          <h3 className="text-lg font-bold text-card-foreground mb-1 text-center">
            Scenario B: 100% Tuition Waiver
          </h3>
          <p className="text-sm text-success text-center mb-4 font-semibold">
            Total: ~8.2 Lakh BDT (€5,700) — WELL WITHIN 15L BUDGET
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={scenarioB.filter(d => d.value > 0)} cx="50%" cy="50%" outerRadius={90} dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                {scenarioB.filter(d => d.value > 0).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `৳${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-3 p-3 bg-success/10 rounded-lg text-sm text-success border border-success/20">
            Prep (~2.1L) + Tuition (€0) + Bank (~6.1L) = ~8.2 Lakh BDT. Leaves ~6.8L BDT buffer for Year 1 living.
          </div>
        </div>
      </div>

      {/* Part-time reality */}
      <div className="glass-card p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-card-foreground mb-2 text-center">
          Part-Time Income vs. Living Cost (Monthly €)
        </h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Data source: studyinestonia.ee, leverageedu.com
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={incomeVsCostData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="category" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
            <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip formatter={(value: number) => `€${value}/mo`} />
            <Bar dataKey="income" name="Income" fill="#22c55e" radius={[8, 8, 0, 0]} />
            <Bar dataKey="living" name="Living Cost" fill="#ef4444" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-6 p-4 bg-destructive/10 rounded-xl border-l-4 border-destructive">
          <div className="flex items-start gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <h4 className="font-bold text-card-foreground">ROI Reality Check</h4>
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-card-foreground font-semibold mb-1">
                Can part-time work recover the 15 Lakh investment in 1 year?
              </p>
              <p className="text-muted-foreground">
                <strong>NO.</strong> Best case: IT internship €15/hr × 20hr/week = €1,200/month = ~€14,400/year (~20.7L BDT).
                After living costs (~€8,400/year), you net ~€6,000 (~8.6L BDT). Total 3-year study + living cost is ~€30,000+ (43L BDT).
                Part-time cannot recover full investment during study.
              </p>
            </div>
            <div>
              <p className="text-card-foreground font-semibold mb-1">
                When does ROI materialize?
              </p>
              <p className="text-muted-foreground">
                <strong>Post-graduation.</strong> Junior cybersecurity engineer: €2,000-€3,000/month gross in Estonia.
                €2,500-€4,000/month in Ireland/Germany. Full investment recovery within 1-2 years of full-time employment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CostCalculator />
    </div>
  );
};
