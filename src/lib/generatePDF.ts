import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateStudyGuidePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Title
  doc.setFontSize(22);
  doc.setTextColor(14, 165, 233); // primary blue
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

  const roadmapSteps = [
    ["June-Aug 2026", "Crush HSC exams. GPA 5.0. Apply for NID & E-Passport."],
    ["Sept 2026-Mar 2027", "IELTS (target 7.0+) & SAT (target 1350+) preparation."],
    ["Oct 2027-Jan 2028", "Apply to TalTech & Tartu via DreamApply. Submit all docs."],
    ["Apr-May 2028", "Receive offer + scholarship. Prepare bank statement (€7,200+)."],
    ["Jun-Jul 2028", "Apply for D-Visa (VFS New Delhi or online TRP). Buy insurance."],
    ["Aug 2028", "Book flight (~100k BDT). Depart for Tallinn! 🎉"],
  ];

  autoTable(doc, {
    startY: y,
    head: [["Timeline", "Action Items"]],
    body: roadmapSteps,
    styles: { fontSize: 9 },
    headStyles: { fillColor: [99, 102, 241] },
    columnStyles: { 0: { cellWidth: 40, fontStyle: "bold" } },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 15;

  // University Comparison
  if (y > 230) {
    doc.addPage();
    y = 20;
  }

  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("TalTech vs University of Tartu", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Factor", "TalTech", "Univ. of Tartu"]],
    body: [
      ["Location", "Tallinn (Capital)", "Tartu (Uni town)"],
      ["Tuition (non-EU)", "€6,160/year", "€6,000-€7,500/year"],
      ["100% Waiver", "Merit-based (GPA+SAT)", "Merit-based (GPA)"],
      ["Application Deadline", "~March 15", "~April 1"],
      ["Living Cost/Month", "€600-€800", "€450-€650"],
      ["Part-time Jobs", "Excellent (tech hub)", "Good (smaller city)"],
      ["Post-Study Work", "9 months", "9 months"],
    ],
    styles: { fontSize: 9 },
    headStyles: { fillColor: [14, 165, 233] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 15;

  // Scholarship Checklist
  if (y > 200) {
    doc.addPage();
    y = 20;
  }

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
