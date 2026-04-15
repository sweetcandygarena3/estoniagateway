import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateStudyGuidePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Title
  doc.setFontSize(22);
  doc.setTextColor(14, 165, 233);
  doc.text("Estonia Study Abroad Guide", pageWidth / 2, y, { align: "center" });
  y += 10;
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Strategic Pathway: Bangladesh to Estonia (2026-2028) | Rate: 1 EUR = 144 BDT", pageWidth / 2, y, { align: "center" });
  y += 15;

  // Pre-departure costs
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("Pre-Departure Expenditure Model", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Expense", "BDT", "EUR", "Notes"]],
    body: [
      ["E-Passport", "~8,000", "€56", "Apply June-Aug 2026"],
      ["NID / Smart Card", "~500", "—", "Election office"],
      ["IELTS Registration", "~28,450", "€198", "British Council BD"],
      ["SAT Registration", "~15,000", "€104", "Recommended, not mandatory"],
      ["Application & Notary", "~20,000", "€139", "DreamApply + notarized docs"],
      ["D-Visa Fee + VFS", "~17,570", "€122", "Estonian Embassy, New Delhi"],
      ["India Trip (Visa)", "~50,000", "€347", "Dhaka→Delhi RT + 3 days"],
      ["Health Insurance", "~14,400", "€100", "Schengen coverage"],
      ["One-Way Flight", "~93,600", "€650", "Book 2-3 months early"],
      ["Dorm + Deposit", "~50,400", "€350", "First month settlement"],
      ["TOTAL", "~297,920", "~€2,070", ""],
    ],
    styles: { fontSize: 8 },
    headStyles: { fillColor: [14, 165, 233] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 12;

  // Scenario comparison
  doc.setFontSize(14);
  doc.setTextColor(30);
  doc.text("Budget Scenarios (Year 1)", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Scenario", "Pre-Departure", "Tuition", "Bank Solvency", "TOTAL"]],
    body: [
      ["A: No Scholarship", "~2.1L BDT", "€7,000 (~10.1L)", "€4,200 (~6.1L)", "~18.3L BDT (EXCEEDS 15L)"],
      ["B: 100% Waiver", "~2.1L BDT", "€0", "€4,200 (~6.1L)", "~8.2L BDT (WITHIN BUDGET)"],
    ],
    styles: { fontSize: 9 },
    headStyles: { fillColor: [34, 197, 94] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 12;

  // Roadmap
  if (y > 180) { doc.addPage(); y = 20; }
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("A-Z Roadmap (2026-2028)", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Timeline", "Action Items"]],
    body: [
      ["Jun-Aug 2026", "HSC exams → GPA 5.0. Apply NID + E-Passport (~8,000 BDT)."],
      ["Sep-Dec 2026", "IELTS prep + exam. Target: 7.0+ overall, no band < 6.5."],
      ["Jan-Mar 2027", "SAT prep + exam. Target: 1350+ (Math 750+)."],
      ["Apr-Sep 2027", "Build GitHub portfolio, earn cybersecurity badges, draft motivation letters, notarize transcripts."],
      ["Oct 2027", "DreamApply opens. Submit TalTech + Tartu applications IMMEDIATELY."],
      ["Jan-Mar 2028", "Follow up with admissions. Prepare for TalTech entrance test (Proctorio)."],
      ["Apr 2028", "Results + waiver decision. Accept offer. Begin bank statement prep."],
      ["Jun-Jul 2028", "D-Visa via New Delhi. Fee: €122. India trip: ~50,000 BDT."],
      ["Aug 2028", "Flight to Tallinn (~€650). Carry €1,000 cash. Begin orientation."],
    ],
    styles: { fontSize: 8 },
    headStyles: { fillColor: [99, 102, 241] },
    columnStyles: { 0: { cellWidth: 30, fontStyle: "bold" } },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 12;

  // University Comparison
  if (y > 140) { doc.addPage(); y = 20; }
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("Estonian Universities — Comparison", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["University", "Type", "Tuition", "100% Waiver", "Cyber/AI", "Living Cost", "Verdict"]],
    body: [
      ["TalTech", "Public", "~€7,000/yr", "Merit (test+interview)", "Flagship", "€700-€1,000", "PRIMARY"],
      ["Univ. of Tartu", "Public", "~€6,000/yr", "Merit (GPA+SAT)", "Strong", "€550-€850", "PRIMARY"],
      ["Tallinn Univ.", "Public", "€3,600-€5,000", "Limited", "Informatics", "€700-€1,000", "BACKUP"],
      ["EMÜ", "Public", "€3,000-€4,500", "Limited", "N/A", "€550-€850", "NOT RELEVANT"],
      ["EKA", "Public", "€4,500-€6,000", "Portfolio", "N/A", "€700-€1,000", "NOT RELEVANT"],
      ["EBS", "Private", "€4,900-€6,900", "Partial", "N/A", "€700-€1,000", "NOT RELEVANT"],
      ["EUAS", "Private", "€4,200-€5,400", "Partial", "IT Security", "€700-€1,000", "SAFETY NET"],
    ],
    styles: { fontSize: 7 },
    headStyles: { fillColor: [14, 165, 233] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  y = (doc as any).lastAutoTable.finalY + 12;

  // Country comparison
  if (y > 140) { doc.addPage(); y = 20; }
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("Estonia vs. Germany vs. Ireland", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Factor", "Estonia", "Germany", "Ireland"]],
    body: [
      ["Tuition", "€2,500-€7,200 (waiver avail.)", "Free (semester fees €200-500)", "€9,850-€55,000"],
      ["Living Cost", "€550-€850/mo", "€800-€1,100/mo", "€1,000-€1,500+/mo"],
      ["Work Rules", "Up to 40hrs/week", "20hrs/week", "20hrs/week"],
      ["Post-Study Visa", "9 months", "18 months", "12-24 months"],
      ["PR Pathway", "5-8 years + B1 Estonian", "2-5 years (Blue Card)", "5 years"],
      ["Admission Barrier", "Direct entry, DreamApply", "Studienkolleg often required", "Direct but expensive"],
    ],
    styles: { fontSize: 8 },
    headStyles: { fillColor: [168, 85, 247] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  // Checklist
  doc.addPage();
  y = 20;
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("Application Checklist (16 Steps)", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["☐", "Task", "Deadline", "Category"]],
    body: [
      ["☐", "HSC GPA 5.0", "Jun-Aug 2026", "Academic"],
      ["☐", "IELTS 7.0+ (no band < 6.5)", "Sep-Dec 2026", "Academic"],
      ["☐", "SAT 1350+ (Math 750+)", "Jan-Mar 2027", "Academic"],
      ["☐", "NID / Smart Card", "Jun 2026", "Documents"],
      ["☐", "E-Passport (~8,000 BDT)", "Jun-Aug 2026", "Documents"],
      ["☐", "Notarized Transcripts (SSC+HSC)", "Sep 2027", "Documents"],
      ["☐", "Technical Portfolio (GitHub, badges)", "Apr-Sep 2027", "Skills"],
      ["☐", "Motivation Letters (5+ drafts)", "Oct 2027", "Application"],
      ["☐", "Apply TalTech (DreamApply)", "By Mar 15, 2028", "Application"],
      ["☐", "Apply Tartu (DreamApply)", "By Apr 1, 2028", "Application"],
      ["☐", "Apply EUAS (safety net)", "By Jun 1, 2028", "Application"],
      ["☐", "Bank Statement (€4,200+)", "Jan-Apr 2028", "Financial"],
      ["☐", "Health Insurance (~€100-250/yr)", "Jun 2028", "Financial"],
      ["☐", "Book India trip for visa", "May 2028", "Visa"],
      ["☐", "D-Visa via New Delhi (€122)", "Jun-Jul 2028", "Visa"],
      ["☐", "One-Way Flight (~€650)", "Aug 2028", "Visa"],
    ],
    styles: { fontSize: 8 },
    headStyles: { fillColor: [34, 197, 94] },
    columnStyles: { 0: { cellWidth: 12 } },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  // 100% Waiver Strategy
  y = (doc as any).lastAutoTable.finalY + 12;
  if (y > 160) { doc.addPage(); y = 20; }
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("100% Tuition Waiver Strategy", 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Step", "Action", "Key Details"]],
    body: [
      ["1", "Understand Merit System", "Top 10-20% get waivers. Composite: GPA + test + letter + interview (TalTech)."],
      ["2", "Maximize Academics", "GPA 5.0 + SAT 1350+ + IELTS 7.0+. Math 750+ is key differentiator."],
      ["3", "Strategic Motivation Letter", "Research specific programs, labs, professors. Mention Tiger Leap, NATO CCDCOE. 5+ drafts."],
      ["4", "Apply for ALL Funding", "TalTech waiver + Tartu waiver + IT Academy Stipend (€240/mo) + Estonian Gov. + SEB."],
      ["5", "Build Portfolio", "GitHub projects + TryHackMe/HackTheBox + competitive programming. Quality > quantity."],
      ["6", "Submit Early (October)", "Early submission = priority review. Don't wait until March deadline."],
    ],
    styles: { fontSize: 8 },
    headStyles: { fillColor: [168, 85, 247] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  // Critical warnings
  y = (doc as any).lastAutoTable.finalY + 10;
  doc.setFontSize(10);
  doc.setTextColor(200, 0, 0);
  doc.text("CRITICAL: Dora Plus scholarship is Master's/PhD ONLY. Do NOT plan on it for Bachelor's.", 14, y);
  y += 6;
  doc.text("CRITICAL: SAT is recommended but NOT mandatory. Bank statement minimum: €4,200 (€350/mo × 12).", 14, y);

  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(
      `Estonia Study Abroad Guide — Page ${i} of ${pageCount} — Generated ${new Date().toLocaleDateString()}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );
  }

  doc.save("Estonia_Study_Guide.pdf");
};
