import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateStudyGuidePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Title
  doc.setFontSize(22);
  doc.setTextColor(14, 165, 233);
  doc.text("Estonia Study Guide", pageWidth / 2, y, { align: "center" });
  y += 10;
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Your Complete Roadmap: Bangladesh to Estonia (2026-2028)", pageWidth / 2, y, { align: "center" });
  y += 15;

  // Budget Breakdown
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("Financial Budget Breakdown (15 Lakh BDT)", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Expense", "Amount (BDT)", "Notes"]],
    body: [
      ["Passport (E-Passport)", "~8,000", "Apply June-Aug 2026"],
      ["IELTS Registration", "~28,450", "British Council BD"],
      ["SAT Registration", "~15,000", "collegeboard.org"],
      ["Application & Notary Fees", "~20,000", "DreamApply + notarized docs"],
      ["Visa Fee & Insurance", "~35,000", "D-Visa ~€120 + health insurance"],
      ["One-way Flight", "~100,000", "Book 2-3 months early"],
      ["Total Initial Costs", "~207,000", ""],
      ["Remaining for Bank/Living", "~1,293,000 (~€9,900)", "Must show in bank statement"],
    ],
    styles: { fontSize: 9 },
    headStyles: { fillColor: [14, 165, 233] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 15;

  // Roadmap
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("A-Z Roadmap (2026 - 2028)", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Timeline", "Action Items"]],
    body: [
      ["June-Aug 2026", "Crush HSC exams. GPA 5.0. Apply for NID & E-Passport."],
      ["Sept 2026-Mar 2027", "IELTS (target 7.0+) & SAT (target 1350+) preparation."],
      ["Oct 2027-Jan 2028", "Apply to TalTech & Tartu via DreamApply. Submit all docs."],
      ["Apr-May 2028", "Receive offer + scholarship. Prepare bank statement (€7,200+)."],
      ["Jun-Jul 2028", "Apply for D-Visa (VFS New Delhi or online TRP). Buy insurance."],
      ["Aug 2028", "Book flight (~100k BDT). Depart for Tallinn!"],
    ],
    styles: { fontSize: 9 },
    headStyles: { fillColor: [99, 102, 241] },
    columnStyles: { 0: { cellWidth: 40, fontStyle: "bold" } },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 15;

  // University Comparison - ALL universities
  if (y > 180) { doc.addPage(); y = 20; }

  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("All Estonian Universities — Comparison", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["University", "Type", "Tuition", "Waiver", "Cyber/AI", "Living Cost"]],
    body: [
      ["TalTech", "Public", "€6,160/yr", "Merit (GPA+SAT)", "Flagship", "€600-€800"],
      ["Univ. of Tartu", "Public", "€6,000-€7,500/yr", "Merit (GPA)", "Strong", "€450-€650"],
      ["Tallinn Univ.", "Public", "€3,600-€5,000/yr", "Limited", "Informatics", "€600-€800"],
      ["Estonian ULS (EMU)", "Public", "€3,000-€4,500/yr", "Limited", "Geoinformatics", "€450-€650"],
      ["Estonian Academy of Arts", "Public", "€4,500-€6,000/yr", "Portfolio", "Interaction Design", "€600-€800"],
      ["Estonian Business School", "Private", "€4,900-€6,900/yr", "Partial", "Business Analytics", "€600-€800"],
      ["EUAS", "Private", "€4,200-€5,400/yr", "Partial", "IT Security", "€600-€800"],
    ],
    styles: { fontSize: 8 },
    headStyles: { fillColor: [14, 165, 233] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 15;

  // Scholarship Checklist
  if (y > 180) { doc.addPage(); y = 20; }

  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("Scholarship Application Checklist", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Done?", "Task", "Deadline", "Category"]],
    body: [
      ["☐", "Complete HSC with GPA 5.0", "Jun-Aug 2026", "Academic"],
      ["☐", "Take IELTS (Target 7.0+)", "Sept-Dec 2026", "Academic"],
      ["☐", "Take SAT (Target 1350+)", "Jan-Mar 2027", "Academic"],
      ["☐", "Apply for E-Passport", "Jun-Aug 2026", "Documents"],
      ["☐", "Get NID / Smart Card", "June 2026", "Documents"],
      ["☐", "Get Notarized Transcripts", "Sept 2027", "Documents"],
      ["☐", "Write Motivation Letters", "Oct 2027", "Application"],
      ["☐", "Apply to TalTech (DreamApply)", "By Mar 15, 2028", "Application"],
      ["☐", "Apply to Univ. of Tartu", "By Apr 1, 2028", "Application"],
      ["☐", "Prepare Bank Statement (€7,200+)", "Apr 2028", "Financial"],
      ["☐", "Purchase Health Insurance", "Jun 2028", "Financial"],
      ["☐", "Apply for Estonia D-Visa", "Jun-Jul 2028", "Visa"],
      ["☐", "Book One-Way Flight", "Aug 2028", "Visa"],
    ],
    styles: { fontSize: 8 },
    headStyles: { fillColor: [34, 197, 94] },
    columnStyles: { 0: { cellWidth: 15 } },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  // 100% Waiver Strategy page
  doc.addPage();
  y = 20;
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("100% Tuition Waiver Strategy", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Step", "Action", "Key Details"]],
    body: [
      ["1", "Understand Merit System", "Top 10-20% of applicants get full waivers. Composite: GPA + SAT + IELTS + Letter."],
      ["2", "Maximize Academics", "GPA 5.0 (mandatory), SAT 1350+, IELTS 7.0+. Math 750+ is a huge differentiator."],
      ["3", "Killer Motivation Letter", "Research Estonia's tech scene, mention specific programs/professors. Write 5+ drafts."],
      ["4", "Apply for ALL Scholarships", "TalTech waiver, Tartu waiver, Dora Plus (€660/mo), Estonian Gov., SEB Banking."],
      ["5", "Build Extracurriculars", "Competitive programming, GitHub contributions, cybersecurity certs, volunteering."],
      ["6", "Submit Early", "Apply in October when portals open. Early submission = priority review."],
    ],
    styles: { fontSize: 9 },
    headStyles: { fillColor: [168, 85, 247] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(
      `Estonia Study Guide — Page ${i} of ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );
  }

  doc.save("Estonia_Study_Guide.pdf");
};
