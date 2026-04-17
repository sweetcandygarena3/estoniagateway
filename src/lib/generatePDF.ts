import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { registerBanglaFont } from "./banglaFont";

type PdfLang = "en" | "bn";

// English / Bangla content pairs. When lang === "bn" we render proper Bangla script
// using the embedded Hind Siliguri font.
const t = (lang: PdfLang, en: string, bn: string) => (lang === "bn" ? bn : en);

const PRIMARY: [number, number, number] = [14, 165, 233];
const SUCCESS: [number, number, number] = [34, 197, 94];
const ACCENT: [number, number, number] = [99, 102, 241];
const PURPLE: [number, number, number] = [168, 85, 247];
const RED: [number, number, number] = [239, 68, 68];

const setBnFont = (doc: jsPDF, lang: PdfLang, bnLoaded: boolean, style: "normal" | "bold" = "normal") => {
  if (lang === "bn" && bnLoaded) doc.setFont("HindSiliguri", style);
  else doc.setFont("helvetica", style);
};

const addHeader = (
  doc: jsPDF,
  text: string,
  y: number,
  color: [number, number, number],
  lang: PdfLang,
  bnLoaded: boolean
) => {
  setBnFont(doc, lang, bnLoaded, "bold");
  doc.setFontSize(14);
  doc.setTextColor(color[0], color[1], color[2]);
  doc.text(text, 14, y);
  doc.setDrawColor(color[0], color[1], color[2]);
  doc.setLineWidth(0.6);
  doc.line(14, y + 2, 196, y + 2);
  setBnFont(doc, lang, bnLoaded, "normal");
  return y + 8;
};

const checkPage = (doc: jsPDF, y: number, threshold = 250) => {
  if (y > threshold) {
    doc.addPage();
    return 20;
  }
  return y;
};

export const generateStudyGuidePDF = async (lang: PdfLang = "en") => {
  const doc = new jsPDF();
  const pw = doc.internal.pageSize.getWidth();
  const ph = doc.internal.pageSize.getHeight();

  const bnLoaded = lang === "bn" ? await registerBanglaFont(doc) : false;
  const tableFont = lang === "bn" && bnLoaded ? "HindSiliguri" : "helvetica";

  // ===== COVER =====
  doc.setFillColor(...PRIMARY);
  doc.rect(0, 0, pw, 60, "F");
  doc.setFillColor(99, 102, 241);
  doc.rect(0, 55, pw, 5, "F");

  setBnFont(doc, lang, bnLoaded, "bold");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text(
    t(lang, "Estonia Study Abroad Guide", "এস্তোনিয়া স্টাডি অ্যাব্রড গাইড"),
    pw / 2,
    25,
    { align: "center" }
  );

  setBnFont(doc, lang, bnLoaded, "normal");
  doc.setFontSize(11);
  doc.text(
    t(
      lang,
      "Strategic Pathway: Bangladesh to Estonia (2026-2028)",
      "কৌশলগত পথ: বাংলাদেশ থেকে এস্তোনিয়া (২০২৬-২০২৮)"
    ),
    pw / 2,
    37,
    { align: "center" }
  );
  doc.setFontSize(9);
  doc.text(
    t(
      lang,
      "BSc Cybersecurity / AI  |  Budget: 15-20 Lakh BDT  |  1 EUR = 144 BDT",
      "বিএসসি সাইবারসিকিউরিটি / এআই  |  বাজেট: ১৫-২০ লক্ষ টাকা  |  ১ ইউরো = ১৪৪ টাকা"
    ),
    pw / 2,
    46,
    { align: "center" }
  );

  let y = 72;

  // ===== 1. PRE-DEPARTURE =====
  y = addHeader(
    doc,
    t(lang, "1. Pre-Departure Expenditure Model", "১. দেশ ছাড়ার আগের খরচের মডেল"),
    y,
    PRIMARY,
    lang,
    bnLoaded
  );

  autoTable(doc, {
    startY: y,
    head: [[
      t(lang, "Expense", "খরচ"),
      "BDT",
      "EUR",
      t(lang, "Notes", "নোট"),
    ]],
    body: [
      [t(lang, "E-Passport", "ই-পাসপোর্ট"), "~8,000", "56", t(lang, "Apply Jun-Aug 2026", "জুন-আগস্ট ২০২৬-এ আবেদন")],
      [t(lang, "NID / Smart Card", "এনআইডি / স্মার্ট কার্ড"), "~500", "--", t(lang, "Election office", "নির্বাচন অফিস")],
      ["IELTS", "~28,450", "198", "British Council BD"],
      ["SAT", "~15,000", "104", t(lang, "Recommended, not mandatory", "সুপারিশকৃত, বাধ্যতামূলক নয়")],
      [t(lang, "Application & Notary", "আবেদন ও নোটারি"), "~20,000", "139", "DreamApply + notarized docs"],
      ["D-Visa + VFS", "~17,570", "122", t(lang, "Estonian Embassy, New Delhi", "এস্তোনিয়ান দূতাবাস, নয়াদিল্লি")],
      [t(lang, "India Trip (Visa)", "ভারত ভ্রমণ (ভিসার জন্য)"), "15,000-50,000", "104-347", t(lang, "Bus/Train/Flight options", "বাস/ট্রেন/ফ্লাইট অপশন")],
      [t(lang, "Health Insurance", "স্বাস্থ্য বীমা"), "~14,400", "100", t(lang, "Schengen coverage", "শেনজেন কভারেজ")],
      [t(lang, "One-Way Flight", "ওয়ান-ওয়ে ফ্লাইট"), "~93,600", "650", t(lang, "Book 2-3 months early", "২-৩ মাস আগে বুক করুন")],
      [t(lang, "Dorm + Deposit", "ডর্ম + জামানত"), "~50,400", "350", t(lang, "First month settlement", "প্রথম মাসের সেটেলমেন্ট")],
      [t(lang, "TOTAL (excl. tuition)", "মোট (টিউশন বাদে)"), "~262,920", "~1,827", ""],
    ],
    styles: { fontSize: 8, cellPadding: 3, font: tableFont },
    headStyles: { fillColor: PRIMARY, textColor: [255, 255, 255], fontStyle: "bold", font: tableFont },
    alternateRowStyles: { fillColor: [240, 248, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // ===== 2. BUDGET SCENARIOS =====
  y = checkPage(doc, y, 220);
  y = addHeader(doc, t(lang, "2. Budget Scenarios (Year 1)", "২. বাজেট পরিস্থিতি (বছর ১)"), y, SUCCESS, lang, bnLoaded);

  autoTable(doc, {
    startY: y,
    head: [[
      t(lang, "Scenario", "পরিস্থিতি"),
      t(lang, "Pre-Departure", "প্রাক-প্রস্থান"),
      t(lang, "Tuition", "টিউশন"),
      t(lang, "Bank Solvency", "ব্যাংক সচ্ছলতা"),
      "TOTAL",
    ]],
    body: [
      [
        t(lang, "A: No Scholarship", "এ: স্কলারশিপ নেই"),
        "~2.1L BDT", "7,000 (~10.1L)", "4,200 (~6.1L)",
        t(lang, "~18.3L BDT (EXCEEDS 15L)", "~১৮.৩ লক্ষ টাকা (১৫ লক্ষ অতিক্রম)"),
      ],
      [
        t(lang, "B: 100% Waiver", "বি: ১০০% ওয়েভার"),
        "~2.1L BDT", "0", "4,200 (~6.1L)",
        t(lang, "~8.2L BDT (WITHIN BUDGET)", "~৮.২ লক্ষ টাকা (বাজেটের মধ্যে)"),
      ],
    ],
    styles: { fontSize: 9, cellPadding: 4, font: tableFont },
    headStyles: { fillColor: SUCCESS, textColor: [255, 255, 255], font: tableFont },
    alternateRowStyles: { fillColor: [240, 255, 244] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // ===== 3. ROADMAP =====
  y = checkPage(doc, y);
  y = addHeader(doc, t(lang, "3. A-Z Roadmap (2026-2028)", "৩. পূর্ণাঙ্গ রোডম্যাপ (২০২৬-২০২৮)"), y, ACCENT, lang, bnLoaded);

  autoTable(doc, {
    startY: y,
    head: [[t(lang, "Timeline", "সময়সীমা"), t(lang, "Action Items", "করণীয়")]],
    body: [
      ["Jun-Aug 2026", t(lang, "HSC exams -> GPA 5.0. Apply NID + E-Passport.", "এইচএসসি পরীক্ষা -> জিপিএ ৫.০। এনআইডি + ই-পাসপোর্টের আবেদন।")],
      ["Sep-Dec 2026", t(lang, "IELTS prep + exam. Target: 7.0+ overall, no band < 6.5.", "আইইএলটিএস প্রস্তুতি + পরীক্ষা। লক্ষ্য: ৭.০+, কোনো ব্যান্ড ৬.৫-এর নিচে নয়।")],
      ["Jan-Mar 2027", t(lang, "SAT prep + exam. Target: 1350+ (Math 750+).", "এসএটি প্রস্তুতি + পরীক্ষা। লক্ষ্য: ১৩৫০+ (গণিত ৭৫০+)।")],
      ["Apr-Sep 2027", t(lang, "Build GitHub portfolio, cybersecurity badges, motivation letters.", "গিটহাব পোর্টফোলিও, সাইবার সিকিউরিটি ব্যাজ, মোটিভেশন লেটার তৈরি।")],
      ["Oct 2027", t(lang, "DreamApply opens. Submit TalTech + Tartu IMMEDIATELY.", "ড্রিম-অ্যাপ্লাই খোলে। টালটেক + তার্তু-তে অবিলম্বে আবেদন।")],
      ["Jan-Mar 2028", t(lang, "Follow up admissions. Prepare TalTech entrance test.", "ভর্তি ফলো-আপ। টালটেকের প্রবেশিকা পরীক্ষার প্রস্তুতি।")],
      ["Apr 2028", t(lang, "Results + waiver decision. Accept offer.", "ফলাফল + ওয়েভার সিদ্ধান্ত। অফার গ্রহণ করুন।")],
      ["Jun-Jul 2028", t(lang, "D-Visa via New Delhi. Fee EUR 122.", "নয়াদিল্লির মাধ্যমে ডি-ভিসা। ফি ১২২ ইউরো।")],
      ["Aug 2028", t(lang, "Flight to Tallinn (~EUR 650). Carry EUR 1,000 cash.", "তালিনের ফ্লাইট (~৬৫০ ইউরো)। সাথে ১,০০০ ইউরো নগদ রাখুন।")],
    ],
    styles: { fontSize: 8, cellPadding: 3, font: tableFont },
    headStyles: { fillColor: ACCENT, textColor: [255, 255, 255], font: tableFont },
    columnStyles: { 0: { cellWidth: 28, fontStyle: "bold" } },
    alternateRowStyles: { fillColor: [245, 243, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // ===== 4. UNIVERSITIES =====
  y = checkPage(doc, y, 200);
  y = addHeader(doc, t(lang, "4. Estonian Universities Comparison", "৪. এস্তোনিয়ান বিশ্ববিদ্যালয় তুলনা"), y, PRIMARY, lang, bnLoaded);

  autoTable(doc, {
    startY: y,
    head: [[
      t(lang, "University", "বিশ্ববিদ্যালয়"),
      t(lang, "Type", "ধরন"),
      "Tuition",
      t(lang, "100% Waiver", "১০০% ওয়েভার"),
      "Cyber/AI",
      t(lang, "Verdict", "সিদ্ধান্ত"),
    ]],
    body: [
      ["TalTech", t(lang, "Public", "সরকারি"), "~7,000/yr", t(lang, "Merit (test+interview)", "মেধা (পরীক্ষা+ইন্টারভিউ)"), t(lang, "Flagship", "ফ্ল্যাগশিপ"), "PRIMARY"],
      ["Univ. of Tartu", t(lang, "Public", "সরকারি"), "~6,000/yr", t(lang, "Merit (GPA+SAT)", "মেধা (জিপিএ+এসএটি)"), t(lang, "Strong", "শক্তিশালী"), "PRIMARY"],
      ["Tallinn Univ.", t(lang, "Public", "সরকারি"), "3,600-5,000", t(lang, "Limited", "সীমিত"), "Informatics", "BACKUP"],
      ["EMU", t(lang, "Public", "সরকারি"), "3,000-4,500", t(lang, "Limited", "সীমিত"), "N/A", "NOT REL."],
      ["EKA", t(lang, "Public", "সরকারি"), "4,500-6,000", t(lang, "Portfolio", "পোর্টফোলিও"), "N/A", "NOT REL."],
      ["EBS", t(lang, "Private", "বেসরকারি"), "4,900-6,900", t(lang, "Partial", "আংশিক"), "N/A", "NOT REL."],
      ["EUAS", t(lang, "Private", "বেসরকারি"), "4,200-5,400", t(lang, "Partial", "আংশিক"), "IT Security", "SAFETY NET"],
    ],
    styles: { fontSize: 7, cellPadding: 2, font: tableFont },
    headStyles: { fillColor: PRIMARY, textColor: [255, 255, 255], font: tableFont },
    alternateRowStyles: { fillColor: [240, 248, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // ===== 5. COUNTRY COMPARISON =====
  y = checkPage(doc, y, 180);
  y = addHeader(doc, t(lang, "5. Estonia vs. Germany vs. Ireland", "৫. এস্তোনিয়া বনাম জার্মানি বনাম আয়ারল্যান্ড"), y, PURPLE, lang, bnLoaded);

  autoTable(doc, {
    startY: y,
    head: [[t(lang, "Factor", "বিষয়"), "Estonia", t(lang, "Germany", "জার্মানি"), t(lang, "Ireland", "আয়ারল্যান্ড")]],
    body: [
      [t(lang, "Tuition (EUR/yr)", "টিউশন (ইউরো/বছর)"), t(lang, "2,500-7,200 (waiver avail.)", "২,৫০০-৭,২০০ (ওয়েভার আছে)"), t(lang, "Free + 200-500 fee", "ফ্রি + ২০০-৫০০ ফি"), "9,850-55,000"],
      [t(lang, "Living Cost (EUR/mo)", "জীবনযাত্রার খরচ (ইউরো/মাস)"), "550-850", "800-1,100", "1,000-1,500+"],
      [t(lang, "Work Hours/week", "সাপ্তাহিক কাজের ঘণ্টা"), t(lang, "Up to 40", "সর্বোচ্চ ৪০"), "20", "20"],
      [t(lang, "Part-Time Wage/hr (EUR)", "পার্ট-টাইম মজুরি/ঘণ্টা (ইউরো)"), t(lang, "5-8 basic; 12-20 IT", "৫-৮ সাধারণ; ১২-২০ আইটি"), "12.41 min; 15-25 IT", "12.70 min; 15-30 IT"],
      [t(lang, "Monthly Student Income (EUR)", "মাসিক ছাত্র আয় (ইউরো)"), "400-1,200", "800-1,100", "800-1,100"],
      [t(lang, "Post-Study Visa", "পড়াশোনা পরবর্তী ভিসা"), t(lang, "9 months", "৯ মাস"), t(lang, "18 months", "১৮ মাস"), "12-24 months"],
      [t(lang, "PR Pathway", "পিআর পথ"), t(lang, "5-8 yrs + B1 Estonian", "৫-৮ বছর + বি১ এস্তোনিয়ান"), t(lang, "2-5 yrs (Blue Card)", "২-৫ বছর (ব্লু কার্ড)"), "5 years"],
      [t(lang, "Admission Barrier", "ভর্তির বাধা"), t(lang, "Direct, DreamApply", "সরাসরি, ড্রিম-অ্যাপ্লাই"), t(lang, "Studienkolleg often required", "প্রায়ই Studienkolleg লাগে"), t(lang, "Direct but expensive", "সরাসরি কিন্তু ব্যয়বহুল")],
    ],
    styles: { fontSize: 8, cellPadding: 3, font: tableFont },
    headStyles: { fillColor: PURPLE, textColor: [255, 255, 255], font: tableFont },
    alternateRowStyles: { fillColor: [248, 243, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // ===== 6. CHECKLIST =====
  doc.addPage();
  y = 20;
  y = addHeader(doc, t(lang, "6. Application Checklist (16 Steps)", "৬. আবেদন চেকলিস্ট (১৬টি ধাপ)"), y, SUCCESS, lang, bnLoaded);

  autoTable(doc, {
    startY: y,
    head: [["#", t(lang, "Task", "কাজ"), t(lang, "Deadline", "সময়সীমা"), t(lang, "Category", "বিভাগ")]],
    body: [
      ["[ ]", t(lang, "HSC GPA 5.0", "এইচএসসি জিপিএ ৫.০"), "Jun-Aug 2026", "Academic"],
      ["[ ]", "IELTS 7.0+ (no band < 6.5)", "Sep-Dec 2026", "Academic"],
      ["[ ]", "SAT 1350+ (Math 750+)", "Jan-Mar 2027", "Academic"],
      ["[ ]", t(lang, "NID / Smart Card", "এনআইডি / স্মার্ট কার্ড"), "Jun 2026", "Documents"],
      ["[ ]", t(lang, "E-Passport", "ই-পাসপোর্ট"), "Jun-Aug 2026", "Documents"],
      ["[ ]", t(lang, "Notarized Transcripts", "নোটারাইজড ট্রান্সক্রিপ্ট"), "Sep 2027", "Documents"],
      ["[ ]", t(lang, "Technical Portfolio (GitHub)", "টেকনিক্যাল পোর্টফোলিও (গিটহাব)"), "Apr-Sep 2027", "Skills"],
      ["[ ]", t(lang, "Motivation Letters (5+ drafts)", "মোটিভেশন লেটার (৫+ খসড়া)"), "Oct 2027", "Application"],
      ["[ ]", "Apply TalTech", "Mar 15, 2028", "Application"],
      ["[ ]", "Apply Tartu", "Apr 1, 2028", "Application"],
      ["[ ]", t(lang, "Apply EUAS (safety)", "ইইউএএস-এ আবেদন (সেফটি)"), "Jun 1, 2028", "Application"],
      ["[ ]", t(lang, "Bank Statement (4,200+ EUR)", "ব্যাংক স্টেটমেন্ট (৪,২০০+ ইউরো)"), "Jan-Apr 2028", "Financial"],
      ["[ ]", t(lang, "Health Insurance", "স্বাস্থ্য বীমা"), "Jun 2028", "Financial"],
      ["[ ]", t(lang, "Indian visa for Delhi trip", "দিল্লি ভ্রমণের জন্য ভারতীয় ভিসা"), "May 2028", "Visa"],
      ["[ ]", t(lang, "D-Visa via New Delhi", "নয়াদিল্লির মাধ্যমে ডি-ভিসা"), "Jun-Jul 2028", "Visa"],
      ["[ ]", t(lang, "One-Way Flight", "ওয়ান-ওয়ে ফ্লাইট"), "Aug 2028", "Travel"],
    ],
    styles: { fontSize: 8, cellPadding: 3, font: tableFont },
    headStyles: { fillColor: SUCCESS, textColor: [255, 255, 255], font: tableFont },
    columnStyles: { 0: { cellWidth: 10 } },
    alternateRowStyles: { fillColor: [240, 255, 244] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // ===== 7. WAIVER STRATEGY =====
  y = checkPage(doc, y, 200);
  y = addHeader(doc, t(lang, "7. 100% Tuition Waiver Strategy", "৭. ১০০% টিউশন ওয়েভার কৌশল"), y, PURPLE, lang, bnLoaded);

  autoTable(doc, {
    startY: y,
    head: [[t(lang, "Step", "ধাপ"), t(lang, "Action", "করণীয়"), t(lang, "Key Details", "মূল বিবরণ")]],
    body: [
      ["1", t(lang, "Understand Merit System", "মেধা ব্যবস্থা বুঝুন"), t(lang, "Top 10-20% get waivers. Composite score.", "শীর্ষ ১০-২০% ওয়েভার পায়। যৌগিক স্কোর।")],
      ["2", t(lang, "Maximize Academics", "একাডেমিক সর্বোচ্চ করুন"), t(lang, "GPA 5.0 + SAT 1350+ + IELTS 7.0+. Math 750+ key.", "জিপিএ ৫.০ + এসএটি ১৩৫০+ + আইইএলটিএস ৭.০+। গণিত ৭৫০+ মূল।")],
      ["3", t(lang, "Strategic Motivation Letter", "কৌশলগত মোটিভেশন লেটার"), t(lang, "Specific labs, profs. Mention Tiger Leap, NATO CCDCOE.", "নির্দিষ্ট ল্যাব, অধ্যাপক। Tiger Leap, NATO CCDCOE উল্লেখ করুন।")],
      ["4", t(lang, "Apply ALL Funding", "সব ফান্ডিং-এ আবেদন"), t(lang, "TalTech + Tartu + IT Academy (240/mo) + Estonian Gov.", "টালটেক + তার্তু + IT Academy (২৪০/মাস) + এস্তোনিয়ান সরকার।")],
      ["5", t(lang, "Build Portfolio", "পোর্টফোলিও তৈরি"), t(lang, "GitHub + TryHackMe/HackTheBox + competitive programming.", "গিটহাব + TryHackMe/HackTheBox + কম্পিটিটিভ প্রোগ্রামিং।")],
      ["6", t(lang, "Submit Early (October)", "অক্টোবরে দ্রুত জমা দিন"), t(lang, "Early = priority review. Don't wait until March.", "দ্রুত = অগ্রাধিকার রিভিউ। মার্চ পর্যন্ত অপেক্ষা করবেন না।")],
    ],
    styles: { fontSize: 8, cellPadding: 3, font: tableFont },
    headStyles: { fillColor: PURPLE, textColor: [255, 255, 255], font: tableFont },
    alternateRowStyles: { fillColor: [248, 243, 255] },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  // ===== 8. VISA LOGISTICS =====
  y = checkPage(doc, y, 200);
  y = addHeader(doc, t(lang, "8. Visa Logistics (New Delhi)", "৮. ভিসা লজিস্টিক্স (নয়াদিল্লি)"), y, RED, lang, bnLoaded);

  autoTable(doc, {
    startY: y,
    head: [[t(lang, "Step", "ধাপ"), t(lang, "Action", "করণীয়"), t(lang, "Cost / Timeline", "খরচ / সময়")]],
    body: [
      ["1", t(lang, "Indian Tourist Visa (IVAC Dhaka)", "ভারতীয় টুরিস্ট ভিসা (IVAC ঢাকা)"), "~800-1,600 BDT | 3-7d"],
      ["2", t(lang, "Book VFS Global appointment", "VFS Global অ্যাপয়েন্টমেন্ট বুক"), t(lang, "6-8 weeks before departure", "প্রস্থানের ৬-৮ সপ্তাহ আগে")],
      ["3", t(lang, "Travel Dhaka -> Delhi", "ঢাকা -> দিল্লি ভ্রমণ"), t(lang, "Bus/Train ~15-25k | Flight ~30-50k", "বাস/ট্রেন ~১৫-২৫ হাজার | ফ্লাইট ~৩০-৫০ হাজার")],
      ["4", t(lang, "VFS appointment: biometrics + docs", "VFS অ্যাপয়েন্টমেন্ট: বায়োমেট্রিক + কাগজ"), "100 + 22 EUR"],
      ["5", t(lang, "Wait for processing", "প্রসেসিং-এর অপেক্ষা"), t(lang, "10-30 business days", "১০-৩০ কর্মদিবস")],
      ["6", t(lang, "Collect passport with D-Visa", "ডি-ভিসা সহ পাসপোর্ট সংগ্রহ"), t(lang, "VFS Delhi or courier", "VFS দিল্লি বা কুরিয়ার")],
    ],
    styles: { fontSize: 8, cellPadding: 3, font: tableFont },
    headStyles: { fillColor: RED, textColor: [255, 255, 255], font: tableFont },
    alternateRowStyles: { fillColor: [255, 240, 240] },
  });
  y = (doc as any).lastAutoTable.finalY + 8;

  // ===== CRITICAL WARNINGS =====
  y = checkPage(doc, y, 250);
  setBnFont(doc, lang, bnLoaded, "bold");
  doc.setFontSize(10);
  doc.setTextColor(...RED);
  doc.text(t(lang, "CRITICAL FACTS", "গুরুত্বপূর্ণ তথ্য"), 14, y);
  y += 5;
  setBnFont(doc, lang, bnLoaded, "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  const warnings = [
    t(lang,
      "• Dora Plus scholarship is Master's/PhD ONLY. Do NOT plan on it for Bachelor's.",
      "• ডোরা প্লাস স্কলারশিপ শুধুমাত্র মাস্টার্স/পিএইচডি-র জন্য। স্নাতকের জন্য পরিকল্পনা করবেন না।"),
    t(lang,
      "• SAT is recommended but NOT mandatory. Bank statement minimum: EUR 4,200.",
      "• এসএটি সুপারিশকৃত কিন্তু বাধ্যতামূলক নয়। ব্যাংক স্টেটমেন্ট ন্যূনতম: ৪,২০০ ইউরো।"),
    t(lang,
      "• Apply for Indian visa BEFORE booking Delhi trip. No Indian visa = no embassy visit.",
      "• দিল্লি ট্রিপ বুক করার আগে ভারতীয় ভিসার জন্য আবেদন করুন। ভারতীয় ভিসা ছাড়া দূতাবাস ভ্রমণ অসম্ভব।"),
  ];
  warnings.forEach((w) => {
    const lines = doc.splitTextToSize(w, 180);
    doc.text(lines, 14, y);
    y += lines.length * 4 + 2;
  });

  // ===== FOOTER =====
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    setBnFont(doc, lang, bnLoaded, "normal");
    doc.setFontSize(7);
    doc.setTextColor(150);
    doc.text(
      `Estonia Study Guide  •  ${t(lang, "Page", "পৃষ্ঠা")} ${i}/${pageCount}  •  ${
        lang === "bn" ? "বাংলা সংস্করণ" : "English Edition"
      }`,
      pw / 2,
      ph - 8,
      { align: "center" }
    );
  }

  // ===== DOWNLOAD (Blob — works on iOS Safari & mobile) =====
  const filename = lang === "bn" ? "Estonia_Study_Guide_Bangla.pdf" : "Estonia_Study_Guide.pdf";
  try {
    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch {
    doc.save(filename);
  }
};
