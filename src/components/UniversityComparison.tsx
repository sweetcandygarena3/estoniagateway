import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  { factor: "Location", taltech: "Tallinn (Capital city)", tartu: "Tartu (University town)" },
  { factor: "Ranking (QS 2024)", taltech: "Top 601-650", tartu: "Top 301-350" },
  { factor: "BSc Cybersecurity", taltech: "✅ Strong (IT Faculty flagship)", tartu: "✅ Available (CS-focused)" },
  { factor: "BSc AI / Data Science", taltech: "✅ Available", tartu: "✅ Strong (Math/CS dept)" },
  { factor: "Tuition (non-EU)", taltech: "€6,160/year", tartu: "€6,000–€7,500/year" },
  { factor: "100% Tuition Waiver", taltech: "✅ Merit-based (GPA + SAT)", tartu: "✅ Merit-based (GPA)" },
  { factor: "Language of Instruction", taltech: "English", tartu: "English" },
  { factor: "Application Platform", taltech: "DreamApply", tartu: "DreamApply" },
  { factor: "Application Deadline", taltech: "March 15 (approx.)", tartu: "April 1 (approx.)" },
  { factor: "Part-time Jobs", taltech: "🟢 Excellent (Tallinn tech hub)", tartu: "🟡 Good (smaller city)" },
  { factor: "Living Cost/Month", taltech: "€600–€800", tartu: "€450–€650" },
  { factor: "Dorm Availability", taltech: "Good", tartu: "Excellent (cheaper)" },
  { factor: "Tech Startup Scene", taltech: "🟢 Excellent (Wise, Bolt HQ)", tartu: "🟡 Growing" },
  { factor: "Post-Study Work", taltech: "9 months job search visa", tartu: "9 months job search visa" },
];

export const UniversityComparison = () => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-8">
      <h3 className="text-2xl font-bold text-card-foreground mb-2">
        🏫 TalTech vs University of Tartu
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Head-to-head comparison for a Bangladeshi student targeting Cyber/AI
      </p>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold min-w-[160px]">Factor</TableHead>
              <TableHead className="font-bold text-primary min-w-[200px]">TalTech (Tallinn)</TableHead>
              <TableHead className="font-bold text-accent min-w-[200px]">Univ. of Tartu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-semibold text-card-foreground">{row.factor}</TableCell>
                <TableCell className="text-muted-foreground">{row.taltech}</TableCell>
                <TableCell className="text-muted-foreground">{row.tartu}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <p className="text-sm text-card-foreground">
          <strong>💡 Recommendation:</strong> Apply to <strong>both</strong>. TalTech is better for Cybersecurity 
          and job opportunities in Tallinn's tech scene. Tartu is cheaper for living and has a stronger academic 
          research environment. Applying to both doubles your chance of getting a 100% tuition waiver.
        </p>
      </div>
    </div>
  );
};
