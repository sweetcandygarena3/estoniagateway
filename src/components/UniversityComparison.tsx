import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface University {
  name: string;
  type: "Public" | "Private";
  location: string;
  ranking: string;
  cybersecurity: string;
  aiDataScience: string;
  tuition: string;
  waiver: string;
  language: string;
  platform: string;
  deadline: string;
  partTimeJobs: string;
  livingCost: string;
  dorm: string;
  postStudyWork: string;
}

const universities: University[] = [
  {
    name: "TalTech",
    type: "Public",
    location: "Tallinn (Capital)",
    ranking: "QS 601-650",
    cybersecurity: "✅ Flagship",
    aiDataScience: "✅ Available",
    tuition: "€6,160/yr",
    waiver: "✅ Merit (GPA+SAT)",
    language: "English",
    platform: "DreamApply",
    deadline: "~Mar 15",
    partTimeJobs: "🟢 Excellent",
    livingCost: "€600-€800",
    dorm: "Good",
    postStudyWork: "9 months",
  },
  {
    name: "Univ. of Tartu",
    type: "Public",
    location: "Tartu",
    ranking: "QS 301-350",
    cybersecurity: "✅ CS-focused",
    aiDataScience: "✅ Strong",
    tuition: "€6,000-€7,500/yr",
    waiver: "✅ Merit (GPA)",
    language: "English",
    platform: "DreamApply",
    deadline: "~Apr 1",
    partTimeJobs: "🟡 Good",
    livingCost: "€450-€650",
    dorm: "Excellent",
    postStudyWork: "9 months",
  },
  {
    name: "Tallinn Univ.",
    type: "Public",
    location: "Tallinn",
    ranking: "QS 801-1000",
    cybersecurity: "❌ N/A",
    aiDataScience: "✅ Informatics",
    tuition: "€3,600-€5,000/yr",
    waiver: "⚠️ Limited",
    language: "English",
    platform: "DreamApply",
    deadline: "~Apr 15",
    partTimeJobs: "🟢 Excellent",
    livingCost: "€600-€800",
    dorm: "Good",
    postStudyWork: "9 months",
  },
  {
    name: "Estonian Univ. of Life Sciences (EMÜ)",
    type: "Public",
    location: "Tartu",
    ranking: "Niche (Agriculture/Env.)",
    cybersecurity: "❌ N/A",
    aiDataScience: "⚠️ Geoinformatics",
    tuition: "€3,000-€4,500/yr",
    waiver: "⚠️ Limited",
    language: "English (some)",
    platform: "DreamApply",
    deadline: "~May 1",
    partTimeJobs: "🟡 Good",
    livingCost: "€450-€650",
    dorm: "Excellent",
    postStudyWork: "9 months",
  },
  {
    name: "Estonian Academy of Arts (EKA)",
    type: "Public",
    location: "Tallinn",
    ranking: "Niche (Arts/Design)",
    cybersecurity: "❌ N/A",
    aiDataScience: "⚠️ Interaction Design",
    tuition: "€4,500-€6,000/yr",
    waiver: "⚠️ Portfolio-based",
    language: "English",
    platform: "DreamApply",
    deadline: "~Mar 1",
    partTimeJobs: "🟢 Excellent",
    livingCost: "€600-€800",
    dorm: "Limited",
    postStudyWork: "9 months",
  },
  {
    name: "Estonian Business School (EBS)",
    type: "Private",
    location: "Tallinn",
    ranking: "Top Baltic Business",
    cybersecurity: "❌ N/A",
    aiDataScience: "⚠️ Business Analytics",
    tuition: "€4,900-€6,900/yr",
    waiver: "⚠️ Partial merit",
    language: "English",
    platform: "Direct",
    deadline: "Rolling",
    partTimeJobs: "🟢 Excellent",
    livingCost: "€600-€800",
    dorm: "No (private housing)",
    postStudyWork: "9 months",
  },
  {
    name: "Estonian Entrepreneurship Univ. (EUAS)",
    type: "Private",
    location: "Tallinn",
    ranking: "Applied Sciences",
    cybersecurity: "✅ IT Security",
    aiDataScience: "✅ Software Dev",
    tuition: "€4,200-€5,400/yr",
    waiver: "⚠️ Partial",
    language: "English",
    platform: "Direct",
    deadline: "~Jun 1",
    partTimeJobs: "🟢 Excellent",
    livingCost: "€600-€800",
    dorm: "Partner housing",
    postStudyWork: "9 months",
  },
];

const factors = [
  "Location", "Ranking", "Cybersecurity", "AI / Data Science", "Tuition",
  "100% Waiver", "Language", "Platform", "Deadline", "Part-time Jobs",
  "Living Cost/Mo", "Dorm", "Post-Study Work",
];

const getField = (u: University, factor: string): string => {
  const map: Record<string, keyof University> = {
    "Location": "location", "Ranking": "ranking", "Cybersecurity": "cybersecurity",
    "AI / Data Science": "aiDataScience", "Tuition": "tuition", "100% Waiver": "waiver",
    "Language": "language", "Platform": "platform", "Deadline": "deadline",
    "Part-time Jobs": "partTimeJobs", "Living Cost/Mo": "livingCost",
    "Dorm": "dorm", "Post-Study Work": "postStudyWork",
  };
  return u[map[factor]] || "";
};

export const UniversityComparison = () => {
  return (
    <div className="glass-card p-6 rounded-2xl mt-8">
      <h3 className="text-2xl font-bold text-card-foreground mb-1">
        🏫 All Estonian Universities — Full Comparison
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        Public & private institutions evaluated for a Bangladeshi student targeting Cyber/AI
      </p>
      <div className="flex gap-2 mb-4 flex-wrap">
        <Badge variant="default">🟢 Recommended</Badge>
        <Badge variant="secondary">⚠️ Partial fit</Badge>
        <Badge variant="outline">❌ Not relevant</Badge>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-bold min-w-[120px] sticky left-0 bg-muted/50 z-10">Factor</TableHead>
              {universities.map((u) => (
                <TableHead key={u.name} className="font-bold min-w-[140px] text-center">
                  <div>{u.name}</div>
                  <Badge variant={u.type === "Public" ? "default" : "secondary"} className="text-[10px] mt-1">
                    {u.type}
                  </Badge>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {factors.map((factor, idx) => (
              <TableRow key={idx} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-semibold text-card-foreground sticky left-0 bg-card z-10">{factor}</TableCell>
                {universities.map((u) => (
                  <TableCell key={u.name} className="text-muted-foreground text-center text-sm">
                    {getField(u, factor)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
        <p className="text-sm text-card-foreground">
          <strong>💡 Strategy:</strong> Apply to <strong>TalTech + Tartu</strong> (best for Cyber/AI with 100% waiver).
          Add <strong>EUAS</strong> as a safety net (easier admission, IT Security program). The other universities are
          less relevant for your specific goals but worth knowing about.
        </p>
      </div>
    </div>
  );
};
