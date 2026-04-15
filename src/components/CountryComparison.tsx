import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    factor: "Tuition (Non-EU)",
    estonia: "€2,500-€7,200/yr (100% waiver available)",
    germany: "Free at public unis; semester fees €200-€500",
    ireland: "€9,850-€55,000/yr; high financial barrier",
  },
  {
    factor: "Cost of Living",
    estonia: "€550-€850/month (Tartu cheaper)",
    germany: "€800-€1,100/month (Munich/Berlin higher)",
    ireland: "€1,000-€1,500+/month (Dublin housing crisis)",
  },
  {
    factor: "Scholarship Access",
    estonia: "High merit-based tuition waivers; IT Academy stipends",
    germany: "Low tuition makes scholarships less common; living stipends focus",
    ireland: "Limited full-ride; mostly partial grants",
  },
  {
    factor: "Work Rules (Student)",
    estonia: "Up to 40hrs/week; no separate permit needed",
    germany: "20hrs/week (or 120 full days/year)",
    ireland: "20hrs/week (40 during holidays)",
  },
  {
    factor: "Post-Study Visa",
    estonia: "9 months job-seeking visa",
    germany: "18 months job-seeker visa",
    ireland: "12-24 months (Stamp 1G)",
  },
  {
    factor: "PR Pathway",
    estonia: "5-8 years residence; B1 Estonian required",
    germany: "2-5 years (Blue Card fast-track possible)",
    ireland: "5 years residence; English-speaking advantage",
  },
  {
    factor: "Admission Barrier",
    estonia: "Direct entry with HSC; DreamApply portal",
    germany: "Often requires Studienkolleg (foundation year); higher GPA threshold",
    ireland: "Direct entry but financially prohibitive at 20k BDT/month income",
  },
  {
    factor: "Language of Instruction",
    estonia: "English (all IT programs)",
    germany: "Many programs in German; English options limited at BSc level",
    ireland: "English (native)",
  },
];

export const CountryComparison = () => {
  return (
    <div className="glass-card p-6 rounded-2xl mt-8">
      <h3 className="text-2xl font-bold text-card-foreground mb-1">
        🌍 Estonia vs. Germany vs. Ireland — Strategic Comparison
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        Why Estonia is the optimal entry point for a middle-income Bangladeshi student.
      </p>
      <div className="overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-bold min-w-[130px] sticky left-0 bg-muted/50 z-10">Factor</TableHead>
              <TableHead className="font-bold min-w-[200px] text-center">🇪🇪 Estonia</TableHead>
              <TableHead className="font-bold min-w-[200px] text-center">🇩🇪 Germany</TableHead>
              <TableHead className="font-bold min-w-[200px] text-center">🇮🇪 Ireland</TableHead>
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
          <strong>Conclusion:</strong> Germany has free tuition but requires Studienkolleg and German language for most BSc programs.
          Ireland is financially prohibitive (~€9,850+/yr tuition). Estonia provides the lowest entry barrier with English-taught IT programs,
          merit-based 100% waivers, and a direct pathway to both countries via an ECTS-recognized EU degree.
        </p>
      </div>
    </div>
  );
};
