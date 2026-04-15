import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { AlertCircle } from "lucide-react";

export const FinanceSection = () => {
  const budgetData = [
    { name: "Passport & Exams", value: 52000, color: "#0ea5e9" },
    { name: "Application & Notary", value: 20000, color: "#6366f1" },
    { name: "Visa Fee & Insurance", value: 35000, color: "#8b5cf6" },
    { name: "One-way Flight", value: 100000, color: "#a855f7" },
    { name: "Bank/Living (Remaining)", value: 1293000, color: "#22c55e" },
  ];

  const incomeVsCostData = [
    { category: "Part-time Income", amount: 520, color: "#22c55e" },
    { category: "Living Cost", amount: 600, color: "#ef4444" },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">
          Financial Masterplan & The ROI Truth
        </h2>
        <p className="text-muted-foreground mt-2">
          Breaking down your 15 Lakh BDT budget and answering your crucial ROI questions
          with real data.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
          <h3 className="text-xl font-bold text-card-foreground mb-2 text-center">
            Your 15 Lakh BDT Budget Allocation
          </h3>
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Assuming you win a 100% Tuition Waiver
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value.toLocaleString()} BDT`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-2 text-sm">
            {[
              { label: "Passport & Exams (IELTS+SAT)", value: "~52,000 BDT" },
              { label: "Application & Notary", value: "~20,000 BDT" },
              { label: "Visa Fee & Insurance", value: "~35,000 BDT" },
              { label: "One-way Flight", value: "~100,000 BDT" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between border-b pb-1 text-muted-foreground">
                <span>{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 text-primary font-bold">
              <span>Total Initial Sunk Cost</span>
              <span>~207,000 BDT</span>
            </div>
            <div className="flex justify-between pt-1 text-success font-bold">
              <span>Remaining for Bank/Living</span>
              <span>~1,293,000 BDT (€9,900)</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
          <h3 className="text-xl font-bold text-card-foreground mb-2 text-center">
            Part-Time Income vs. Living Cost
          </h3>
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Monthly (€) — Earning €6.5/hr, working 20 hrs/week
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={incomeVsCostData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="category" tick={{ fill: '#64748b' }} />
              <YAxis tick={{ fill: '#64748b' }} />
              <Tooltip formatter={(value) => `€${value}`} />
              <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                {incomeVsCostData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive">
            <div className="flex items-start gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <h4 className="font-bold text-card-foreground">
                The Hard Truth About Your ROI Questions:
              </h4>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-card-foreground font-semibold mb-1">
                  Q: Can I earn my 15 Lakh investment back within 1 year of part-time
                  work?
                </p>
                <p className="text-muted-foreground">
                  <strong>NO.</strong> Part-time work (Wolt, Bolt, cafes) earns about
                  €500-€600/month. Your living cost is ~€500/month. You will break even
                  on daily survival. The real ROI comes AFTER graduation when you earn
                  €3000/month as an AI/Cyber engineer.
                </p>
              </div>

              <div>
                <p className="text-card-foreground font-semibold mb-1">
                  Q: Can I pay tuition fees from part-time work?
                </p>
                <p className="text-muted-foreground">
                  <strong>NO.</strong> You cannot save €6,000/year for tuition by
                  delivering food part-time while studying engineering. It is impossible.{" "}
                  <strong>You MUST secure the 100% scholarship.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
