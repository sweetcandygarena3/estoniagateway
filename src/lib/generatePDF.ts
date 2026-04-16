import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type PdfLang = "en" | "bn";

const t = (lang: PdfLang, en: string, bn: string) => (lang === "bn" ? bn : en);

const addHeader = (doc: jsPDF, text: string, y: number, color: number[] = [14, 165, 233]) => {
  doc.setFontSize(15);
  doc.setTextColor(color[0], color[1], color[2]);
  doc.text(text, 14, y);
  doc.setDrawColor(color[0], color[1], color[2]);
  doc.setLineWidth(0.5);
  doc.line(14, y + 2, 196, y + 2);
  return y + 8;
};

const checkPage = (doc: jsPDF, y: number, threshold = 160) => {
  if (y > threshold) { doc.addPage(); return 20; }
  return y;
};

export const generateStudyGuidePDF = (lang: PdfLang = "en") => {
  const doc = new jsPDF();
  const pw = doc.internal.pageSize.getWidth();
  let y = 15;

  // Title block with colored background
  doc.setFillColor(14, 165, 233);
  doc.rect(0, 0, pw, 40, "F");
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text(t(lang, "Estonia Study Abroad Guide", "Estonia Study Abroad Guide"), pw / 2, 18, { align: "center" });
  doc.setFontSize(11);
  doc.text(t(lang,
    "Strategic Pathway: Bangladesh to Estonia (2026-2028) | 1 EUR = 144 BDT",
    "Strategic Pathway: Bangladesh to Estonia (2026-2028) | 1 EUR = 144 BDT"
  ), pw / 2, 28, { align: "center" });
  doc.setFontSize(9);
  doc.text(t(lang,
    "Data-driven guide for BSc Cybersecurity / AI | Budget: 15-20 Lakh BDT",
    "BSc Cybersecurity / AI-er jonno data-driven guide | Budget: 15-20 Lakh BDT"
  ), pw / 2, 35, { align: "center" });
  y = 50;

  // Pre-departure costs
  y = addHeader(doc, t(lang, "1. Pre-Departure Expenditure Model", "1. Pre-Departure Khoroch Model"), y);

  autoTable(doc, {
    startY: y,
    head: [[
      t(lang, "Expense", "Khoroch"),
      "BDT",
      "EUR",
      t(lang, "Notes", "Note"),
    ]],
    body: [
      [t(lang, "E-Passport", "E-Passport"), "~8,000", "56", t(lang, "Apply June-Aug 2026", "June-Aug 2026-e apply korun")],
      ["NID / Smart Card", "~500", "--", t(lang, "Election office", "Election office")],
      [t(lang, "IELTS Registration", "IELTS Registration"), "~28,450", "198", "British Council BD"],
      [t(lang, "SAT Registration", "SAT Registration"), "~15,000", "104", t(lang, "Recommended, not mandatory", "Recommended, mandatory na")],
      [t(lang, "Application & Notary", "Application & Notary"), "~20,000", "139", "DreamApply + notarized docs"],
      ["D-Visa Fee + VFS", "~17,570", "122", t(lang, "Estonian Embassy, New Delhi", "Estonian Embassy, New Delhi")],
      [t(lang, "India Trip (Visa)", "India Trip (Visa)"), "~50,000", "347", t(lang, "Dhaka-Delhi RT + 3 days", "Dhaka-Delhi RT + 3 din")],
      [t(lang, "Health Insurance", "Health Insurance"), "~14,400", "100", t(lang, "Schengen coverage", "Schengen coverage")],
      [t(lang, "One-Way Flight", "One-Way Flight"), "~93,600", "650", t(lang, "Book 2-3 months early", "2-3 mash age book korun")],
      [t(lang, "Dorm + Deposit", "Dorm + Deposit"), "~50,400", "350", t(lang, "First month settlement", "Prothom mash-er settle")],
      [t(lang, "TOTAL", "TOTAL"), "~297,920", "~2,070", ""],
    ],
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [14, 165, 233], textColor: [255, 255, 255], fontStyle: "bold" },
    alternateRowStyles: { fillColor: [240, 248, 255] },
    footStyles: { fillColor: [14, 165, 233], textColor: [255, 255, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // Budget Scenarios
  y = checkPage(doc, y, 140);
  y = addHeader(doc, t(lang, "2. Budget Scenarios (Year 1)", "2. Budget Scenario (Year 1)"), y, [34, 197, 94]);

  autoTable(doc, {
    startY: y,
    head: [[
      t(lang, "Scenario", "Scenario"),
      t(lang, "Pre-Departure", "Pre-Departure"),
      t(lang, "Tuition", "Tuition"),
      t(lang, "Bank Solvency", "Bank Solvency"),
      "TOTAL",
    ]],
    body: [
      [
        t(lang, "A: No Scholarship", "A: Scholarship nei"),
        "~2.1L BDT", "7,000 (~10.1L)", "4,200 (~6.1L)",
        t(lang, "~18.3L BDT (EXCEEDS 15L)", "~18.3L BDT (15L EXCEED kore)"),
      ],
      [
        t(lang, "B: 100% Waiver", "B: 100% Waiver"),
        "~2.1L BDT", "0", "4,200 (~6.1L)",
        t(lang, "~8.2L BDT (WITHIN BUDGET)", "~8.2L BDT (BUDGET-er moddhe)"),
      ],
    ],
    styles: { fontSize: 9, cellPadding: 4 },
    headStyles: { fillColor: [34, 197, 94], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [240, 255, 244] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // Roadmap
  y = checkPage(doc, y);
  y = addHeader(doc, t(lang, "3. A-Z Roadmap (2026-2028)", "3. A-Z Roadmap (2026-2028)"), y, [99, 102, 241]);

  autoTable(doc, {
    startY: y,
    head: [[t(lang, "Timeline", "Timeline"), t(lang, "Action Items", "Action Items")]],
    body: [
      ["Jun-Aug 2026", t(lang, "HSC exams -> GPA 5.0. Apply NID + E-Passport (~8,000 BDT).", "HSC exams -> GPA 5.0. NID + E-Passport apply korun (~8,000 BDT).")],
      ["Sep-Dec 2026", t(lang, "IELTS prep + exam. Target: 7.0+ overall, no band < 6.5.", "IELTS prep + exam. Target: 7.0+, kono band < 6.5 na.")],
      ["Jan-Mar 2027", t(lang, "SAT prep + exam. Target: 1350+ (Math 750+).", "SAT prep + exam. Target: 1350+ (Math 750+).")],
      ["Apr-Sep 2027", t(lang, "Build GitHub portfolio, earn cybersecurity badges, draft motivation letters, notarize transcripts.", "GitHub portfolio toiri korun, cybersecurity badges, motivation letters, transcripts notarize korun.")],
      ["Oct 2027", t(lang, "DreamApply opens. Submit TalTech + Tartu applications IMMEDIATELY.", "DreamApply khule. TalTech + Tartu application SATHESATHE submit korun.")],
      ["Jan-Mar 2028", t(lang, "Follow up admissions. Prepare for TalTech entrance test (Proctorio).", "Admissions follow up korun. TalTech entrance test (Proctorio) prepare korun.")],
      ["Apr 2028", t(lang, "Results + waiver decision. Accept offer. Begin bank statement prep.", "Results + waiver decision. Offer accept korun. Bank statement prep shuru korun.")],
      ["Jun-Jul 2028", t(lang, "D-Visa via New Delhi. Fee: EUR 122. India trip: ~50,000 BDT.", "D-Visa New Delhi-r maddhome. Fee: EUR 122. India trip: ~50,000 BDT.")],
      ["Aug 2028", t(lang, "Flight to Tallinn (~EUR 650). Carry EUR 1,000 cash. Begin orientation.", "Tallinn-e flight (~EUR 650). EUR 1,000 cash niye jan. Orientation shuru.")],
    ],
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [99, 102, 241], textColor: [255, 255, 255] },
    columnStyles: { 0: { cellWidth: 28, fontStyle: "bold" } },
    alternateRowStyles: { fillColor: [245, 243, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // University Comparison
  y = checkPage(doc, y, 120);
  y = addHeader(doc, t(lang, "4. Estonian Universities Comparison", "4. Estonian Universities-er Tulona"), y);

  autoTable(doc, {
    startY: y,
    head: [[
      t(lang, "University", "University"),
      t(lang, "Type", "Prokar"),
      t(lang, "Tuition", "Tuition"),
      t(lang, "100% Waiver", "100% Waiver"),
      "Cyber/AI",
      t(lang, "Living Cost", "Living Cost"),
      t(lang, "Verdict", "Verdict"),
    ]],
    body: [
      ["TalTech", "Public", "~7,000/yr", t(lang, "Merit (test+interview)", "Merit (test+interview)"), t(lang, "Flagship", "Flagship"), "700-1,000", "PRIMARY"],
      ["Univ. of Tartu", "Public", "~6,000/yr", t(lang, "Merit (GPA+SAT)", "Merit (GPA+SAT)"), t(lang, "Strong", "Strong"), "550-850", "PRIMARY"],
      ["Tallinn Univ.", "Public", "3,600-5,000", t(lang, "Limited", "Limited"), "Informatics", "700-1,000", "BACKUP"],
      ["EMU", "Public", "3,000-4,500", t(lang, "Limited", "Limited"), "N/A", "550-850", "NOT RELEVANT"],
      ["EKA", "Public", "4,500-6,000", "Portfolio", "N/A", "700-1,000", "NOT RELEVANT"],
      ["EBS", "Private", "4,900-6,900", t(lang, "Partial", "Partial"), "N/A", "700-1,000", "NOT RELEVANT"],
      ["EUAS", "Private", "4,200-5,400", t(lang, "Partial", "Partial"), "IT Security", "700-1,000", "SAFETY NET"],
    ],
    styles: { fontSize: 7, cellPadding: 2 },
    headStyles: { fillColor: [14, 165, 233], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [240, 248, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // Country comparison (with new wage + income rows)
  y = checkPage(doc, y, 100);
  y = addHeader(doc, t(lang, "5. Estonia vs. Germany vs. Ireland", "5. Estonia vs. Germany vs. Ireland"), y, [168, 85, 247]);

  autoTable(doc, {
    startY: y,
    head: [[t(lang, "Factor", "Bishoy"), "Estonia", t(lang, "Germany", "Germany"), t(lang, "Ireland", "Ireland")]],
    body: [
      [t(lang, "Tuition", "Tuition"), t(lang, "2,500-7,200 (waiver avail.)", "2,500-7,200 (waiver ache)"), t(lang, "Free (semester fees 200-500)", "Free (semester fee 200-500)"), "9,850-55,000"],
      [t(lang, "Living Cost", "Living Cost"), "550-850/mo", "800-1,100/mo", "1,000-1,500+/mo"],
      [t(lang, "Work Rules", "Work Rules"), t(lang, "Up to 40hrs/week", "40hrs/week porjonto"), "20hrs/week", "20hrs/week"],
      [t(lang, "Part-Time Wage/hr", "Part-Time Mojuri/hr"), t(lang, "5-8 (basic); 12-20 (IT)", "5-8 (sadharon); 12-20 (IT)"), "12.41 (min); 15-25 (IT)", "12.70 (min); 15-30 (IT)"],
      [t(lang, "Monthly Student Income", "Masik Chhatro Aay"), t(lang, "400-1,200", "400-1,200"), "800-1,100", "800-1,100"],
      [t(lang, "Post-Study Visa", "Post-Study Visa"), t(lang, "9 months", "9 mash"), t(lang, "18 months", "18 mash"), "12-24 months"],
      [t(lang, "PR Pathway", "PR Pathway"), t(lang, "5-8 yrs + B1 Estonian", "5-8 bochor + B1 Estonian"), "2-5 yrs (Blue Card)", "5 years"],
      [t(lang, "Admission Barrier", "Admission Barrier"), "Direct entry, DreamApply", t(lang, "Studienkolleg often required", "Studienkolleg often lage"), t(lang, "Direct but expensive", "Direct but expensive")],
      [t(lang, "Language", "Language"), t(lang, "English (all IT)", "English (shob IT)"), t(lang, "Many in German; limited English BSc", "Beshi German; limited English BSc"), t(lang, "English (native)", "English (native)")],
    ],
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [168, 85, 247], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [248, 243, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // Checklist
  doc.addPage();
  y = 20;
  y = addHeader(doc, t(lang, "6. Application Checklist (16 Steps)", "6. Application Checklist (16 Dhap)"), y, [34, 197, 94]);

  autoTable(doc, {
    startY: y,
    head: [["#", t(lang, "Task", "Kaj"), t(lang, "Deadline", "Sesh Tarikh"), t(lang, "Category", "Category")]],
    body: [
      ["[ ]", "HSC GPA 5.0", "Jun-Aug 2026", "Academic"],
      ["[ ]", "IELTS 7.0+ (no band < 6.5)", "Sep-Dec 2026", "Academic"],
      ["[ ]", "SAT 1350+ (Math 750+)", "Jan-Mar 2027", "Academic"],
      ["[ ]", "NID / Smart Card", "Jun 2026", "Documents"],
      ["[ ]", "E-Passport (~8,000 BDT)", "Jun-Aug 2026", "Documents"],
      ["[ ]", t(lang, "Notarized Transcripts (SSC+HSC)", "Notarized Transcripts (SSC+HSC)"), "Sep 2027", "Documents"],
      ["[ ]", t(lang, "Technical Portfolio (GitHub, badges)", "Technical Portfolio (GitHub, badges)"), "Apr-Sep 2027", "Skills"],
      ["[ ]", t(lang, "Motivation Letters (5+ drafts)", "Motivation Letters (5+ draft)"), "Oct 2027", "Application"],
      ["[ ]", "Apply TalTech (DreamApply)", "By Mar 15, 2028", "Application"],
      ["[ ]", "Apply Tartu (DreamApply)", "By Apr 1, 2028", "Application"],
      ["[ ]", t(lang, "Apply EUAS (safety net)", "Apply EUAS (safety net)"), "By Jun 1, 2028", "Application"],
      ["[ ]", t(lang, "Bank Statement (4,200+)", "Bank Statement (4,200+)"), "Jan-Apr 2028", "Financial"],
      ["[ ]", t(lang, "Health Insurance (~100-250/yr)", "Health Insurance (~100-250/yr)"), "Jun 2028", "Financial"],
      ["[ ]", t(lang, "Book India trip for visa", "India trip book korun visa-r jonno"), "May 2028", "Visa"],
      ["[ ]", t(lang, "D-Visa via New Delhi (122)", "D-Visa New Delhi-r maddhome (122)"), "Jun-Jul 2028", "Visa"],
      ["[ ]", t(lang, "One-Way Flight (~650)", "One-Way Flight (~650)"), "Aug 2028", "Visa"],
    ],
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [34, 197, 94], textColor: [255, 255, 255] },
    columnStyles: { 0: { cellWidth: 10 } },
    alternateRowStyles: { fillColor: [240, 255, 244] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // 100% Waiver Strategy
  y = checkPage(doc, y);
  y = addHeader(doc, t(lang, "7. 100% Tuition Waiver Strategy", "7. 100% Tuition Waiver Strategy"), y, [168, 85, 247]);

  autoTable(doc, {
    startY: y,
    head: [[t(lang, "Step", "Step"), t(lang, "Action", "Action"), t(lang, "Key Details", "Key Details")]],
    body: [
      ["1", t(lang, "Understand Merit System", "Merit System bujhun"), t(lang, "Top 10-20% get waivers. Composite: GPA + test + letter + interview (TalTech).", "Top 10-20% waiver pay. Composite: GPA + test + letter + interview (TalTech).")],
      ["2", t(lang, "Maximize Academics", "Academics maximize korun"), t(lang, "GPA 5.0 + SAT 1350+ + IELTS 7.0+. Math 750+ is key differentiator.", "GPA 5.0 + SAT 1350+ + IELTS 7.0+. Math 750+ key differentiator.")],
      ["3", t(lang, "Strategic Motivation Letter", "Strategic Motivation Letter"), t(lang, "Research specific programs, labs, professors. Mention Tiger Leap, NATO CCDCOE. 5+ drafts.", "Specific programs, labs, professors research korun. Tiger Leap, NATO CCDCOE mention korun. 5+ drafts.")],
      ["4", t(lang, "Apply for ALL Funding", "Shob Funding-e apply korun"), t(lang, "TalTech waiver + Tartu waiver + IT Academy Stipend (240/mo) + Estonian Gov. + SEB.", "TalTech waiver + Tartu waiver + IT Academy Stipend (240/mo) + Estonian Gov. + SEB.")],
      ["5", t(lang, "Build Portfolio", "Portfolio toiri korun"), t(lang, "GitHub projects + TryHackMe/HackTheBox + competitive programming. Quality > quantity.", "GitHub projects + TryHackMe/HackTheBox + competitive programming. Quality > quantity.")],
      ["6", t(lang, "Submit Early (October)", "October-e submit korun"), t(lang, "Early submission = priority review. Don't wait until March deadline.", "Early submission = priority review. March deadline-er jonno wait korben na.")],
    ],
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [168, 85, 247], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [248, 243, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // Visa Logistics Summary
  y = checkPage(doc, y);
  y = addHeader(doc, t(lang, "8. Visa Logistics (New Delhi)", "8. Visa Logistics (New Delhi)"), y, [239, 68, 68]);

  autoTable(doc, {
    startY: y,
    head: [[t(lang, "Step", "Step"), t(lang, "Action", "Action"), t(lang, "Cost / Timeline", "Cost / Timeline")]],
    body: [
      ["1", t(lang, "Get Indian Tourist Visa (IVAC Dhaka)", "Indian Tourist Visa nin (IVAC Dhaka)"), "~800-1,600 BDT | 3-7 days"],
      ["2", t(lang, "Book VFS Global appointment (New Delhi)", "VFS Global appointment book korun (New Delhi)"), t(lang, "6-8 weeks before departure", "Departure-r 6-8 soptaho age")],
      ["3", t(lang, "Fly Dhaka -> Delhi (round-trip)", "Dhaka -> Delhi fly korun (round-trip)"), "~30,000-40,000 BDT"],
      ["4", t(lang, "VFS appointment: biometrics + docs", "VFS appointment: biometrics + docs"), "100 (visa) + 22 (VFS)"],
      ["5", t(lang, "Wait for processing", "Processing-er jonno wait korun"), t(lang, "10-30 business days", "10-30 kormo dibosh")],
      ["6", t(lang, "Collect passport with D-Visa stamp", "D-Visa stamp shoho passport collect korun"), t(lang, "VFS Delhi or courier", "VFS Delhi ba courier")],
    ],
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [239, 68, 68], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [255, 240, 240] },
  });
  y = (doc as any).lastAutoTable.finalY + 8;

  // Critical warnings
  doc.setFontSize(9);
  doc.setTextColor(200, 0, 0);
  y = checkPage(doc, y, 240);
  doc.text(t(lang,
    "CRITICAL: Dora Plus scholarship is Master's/PhD ONLY. Do NOT plan on it for Bachelor's.",
    "CRITICAL: Dora Plus scholarship Master's/PhD ONLY. Bachelor's-er jonno plan korben na."
  ), 14, y);
  y += 5;
  doc.text(t(lang,
    "CRITICAL: SAT is recommended but NOT mandatory. Bank statement minimum: EUR 4,200.",
    "CRITICAL: SAT recommended kintu mandatory na. Bank statement minimum: EUR 4,200."
  ), 14, y);
  y += 5;
  doc.text(t(lang,
    "CRITICAL: Apply for Indian visa BEFORE booking Delhi trip. No Indian visa = no embassy visit.",
    "CRITICAL: Delhi trip book korar AAGE Indian visa-r jonno apply korun."
  ), 14, y);

  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(7);
    doc.setTextColor(150);
    doc.text(
      `Estonia Study Guide | Page ${i}/${pageCount} | Generated ${new Date().toLocaleDateString()}${lang === "bn" ? " | Bangla Version" : ""}`,
      pw / 2,
      doc.internal.pageSize.getHeight() - 8,
      { align: "center" }
    );
  }

  const filename = lang === "bn" ? "Estonia_Study_Guide_Bangla.pdf" : "Estonia_Study_Guide.pdf";
  doc.save(filename);
};
