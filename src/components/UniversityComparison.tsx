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
  verdict: string;
}

const universities: University[] = [
  {
    name: "TalTech",
    type: "Public",
    location: "Tallinn (Capital)",
    ranking: "QS 601-650",
    cybersecurity: "✅ BEng Flagship (NATO CCDCOE)",
    aiDataScience: "✅ Available",
    tuition: "~€7,000/yr",
    waiver: "✅ 100% Merit (online test + interview)",
    language: "English",
    platform: "DreamApply",
    deadline: "~Mar 15",
    partTimeJobs: "Excellent (capital city)",
    livingCost: "€700-€1,000/mo",
    dorm: "Available (~€150-250/mo)",
    postStudyWork: "9 months",
    verdict: "🟢 PRIMARY TARGET",
  },
  {
    name: "University of Tartu",
    type: "Public",
    location: "Tartu",
    ranking: "QS 301-350 (Top 1% globally)",
    cybersecurity: "✅ CS/Computer Engineering track",
    aiDataScience: "✅ Strong (Robotics specialization)",
    tuition: "~€6,000/yr",
    waiver: "✅ 100% Merit (GPA + IT Academy Stipend €240/mo for top 20%)",
    language: "English",
    platform: "DreamApply",
    deadline: "~Apr 1",
    partTimeJobs: "Good (smaller city, academic)",
    livingCost: "€550-€850/mo",
    dorm: "Excellent (~€100-200/mo)",
    postStudyWork: "9 months",
    verdict: "🟢 PRIMARY TARGET",
  },
  {
    name: "Tallinn University",
    type: "Public",
    location: "Tallinn",
    ranking: "QS 801-1000",
    cybersecurity: "❌ N/A",
    aiDataScience: "✅ Informatics (BCS)",
    tuition: "€3,600-€5,000/yr",
    waiver: "⚠️ Limited partial waivers",
    language: "English",
    platform: "DreamApply",
    deadline: "~Apr 15",
    partTimeJobs: "Excellent (capital city)",
    livingCost: "€700-€1,000/mo",
    dorm: "Available",
    postStudyWork: "9 months",
    verdict: "🟡 BACKUP (no cybersecurity)",
  },
  {
    name: "Estonian Univ. of Life Sciences (EMÜ)",
    type: "Public",
    location: "Tartu",
    ranking: "Niche (Agriculture/Environment)",
    cybersecurity: "❌ N/A",
    aiDataScience: "⚠️ Geoinformatics only",
    tuition: "€3,000-€4,500/yr",
    waiver: "⚠️ Limited",
    language: "English (some programs)",
    platform: "DreamApply",
    deadline: "~May 1",
    partTimeJobs: "Good (Tartu)",
    livingCost: "€550-€850/mo",
    dorm: "Excellent",
    postStudyWork: "9 months",
    verdict: "❌ NOT RELEVANT for Cyber/AI",
  },
  {
    name: "Estonian Academy of Arts (EKA)",
    type: "Public",
    location: "Tallinn",
    ranking: "Niche (Arts/Design)",
    cybersecurity: "❌ N/A",
    aiDataScience: "⚠️ Interaction Design only",
    tuition: "€4,500-€6,000/yr",
    waiver: "⚠️ Portfolio-based",
    language: "English",
    platform: "DreamApply",
    deadline: "~Mar 1",
    partTimeJobs: "Excellent (Tallinn)",
    livingCost: "€700-€1,000/mo",
    dorm: "Limited",
    postStudyWork: "9 months",
    verdict: "❌ NOT RELEVANT for Cyber/AI",
  },
  {
    name: "Estonian Business School (EBS)",
    type: "Private",
    location: "Tallinn",
    ranking: "Top Baltic Business School",
    cybersecurity: "❌ N/A",
    aiDataScience: "⚠️ Business Analytics minor",
    tuition: "€4,900-€6,900/yr",
    waiver: "⚠️ Partial merit only",
    language: "English",
    platform: "Direct application",
    deadline: "Rolling",
    partTimeJobs: "Excellent (Tallinn)",
    livingCost: "€700-€1,000/mo",
    dorm: "None (private housing only)",
    postStudyWork: "9 months",
    verdict: "❌ NOT RELEVANT for Cyber/AI",
  },
  {
    name: "Estonian Entrepreneurship Univ. (EUAS)",
    type: "Private",
    location: "Tallinn",
    ranking: "Applied Sciences",
    cybersecurity: "✅ IT Security program",
    aiDataScience: "✅ Software Development",
    tuition: "€4,200-€5,400/yr",
    waiver: "⚠️ Partial only",
    language: "English",
    platform: "Direct application",
    deadline: "~Jun 1",
    partTimeJobs: "Excellent (Tallinn)",
    livingCost: "€700-€1,000/mo",
    dorm: "Partner housing",
    postStudyWork: "9 months",
    verdict: "🟡 SAFETY NET (easier admission)",
  },
];

const factors = [
  "Location", "Ranking", "Cybersecurity", "AI / Data Science", "Tuition",
  "100% Waiver", "Language", "Platform", "Deadline", "Part-time Jobs",
  "Living Cost/Mo", "Dorm", "Post-Study Work", "Verdict",
];

const getField = (u: University, factor: string): string => {
  const map: Record<string, keyof University> = {
    "Location": "location", "Ranking": "ranking", "Cybersecurity": "cybersecurity",
    "AI / Data Science": "aiDataScience", "Tuition": "tuition", "100% Waiver": "waiver",
    "Language": "language", "Platform": "platform", "Deadline": "deadline",
    "Part-time Jobs": "partTimeJobs", "Living Cost/Mo": "livingCost",
    "Dorm": "dorm", "Post-Study Work": "postStudyWork", "Verdict": "verdict",
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
        7 institutions evaluated across 14 factors for a Bangladeshi Cyber/AI applicant
      </p>
      <div className="flex gap-2 mb-4 flex-wrap">
        <Badge variant="default">🟢 Primary Target</Badge>
        <Badge variant="secondary">🟡 Backup / Safety</Badge>
        <Badge variant="outline">❌ Not relevant</Badge>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-bold min-w-[120px] sticky left-0 bg-muted/50 z-10">Factor</TableHead>
              {universities.map((u) => (
                <TableHead key={u.name} className="font-bold min-w-[160px] text-center">
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
          <strong>Strategy:</strong> Apply to <strong>TalTech</strong> (flagship cybersecurity, Proctorio entrance test required) +{" "}
          <strong>University of Tartu</strong> (higher global ranking, IT Academy stipend €240/mo for top 20%).
          Add <strong>EUAS</strong> as a safety net (lower admission bar, IT Security program). All other universities
          lack relevant Cyber/AI programs.
        </p>
      </div>
    </div>
  );
};
