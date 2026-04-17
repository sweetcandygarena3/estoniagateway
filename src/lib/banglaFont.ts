/**
 * Lazy-loads Hind Siliguri (Bangla) font as base64 and registers it with jsPDF.
 * The font file is fetched from Google Fonts CDN and converted at runtime,
 * so it never bloats the main bundle.
 */
import type jsPDF from "jspdf";

let cachedFontBase64: string | null = null;

const FONT_URL =
  "https://cdn.jsdelivr.net/gh/google/fonts/ofl/hindsiliguri/HindSiliguri-Regular.ttf";
const FONT_BOLD_URL =
  "https://cdn.jsdelivr.net/gh/google/fonts/ofl/hindsiliguri/HindSiliguri-Bold.ttf";

const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(
      null,
      Array.from(bytes.subarray(i, i + chunk)) as unknown as number[]
    );
  }
  return btoa(binary);
};

const fetchFont = async (url: string): Promise<string> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font fetch failed: ${res.status}`);
  const buf = await res.arrayBuffer();
  return arrayBufferToBase64(buf);
};

export const registerBanglaFont = async (doc: jsPDF): Promise<boolean> => {
  try {
    if (!cachedFontBase64) {
      const [reg, bold] = await Promise.all([fetchFont(FONT_URL), fetchFont(FONT_BOLD_URL)]);
      cachedFontBase64 = reg;
      doc.addFileToVFS("HindSiliguri-Regular.ttf", reg);
      doc.addFont("HindSiliguri-Regular.ttf", "HindSiliguri", "normal");
      doc.addFileToVFS("HindSiliguri-Bold.ttf", bold);
      doc.addFont("HindSiliguri-Bold.ttf", "HindSiliguri", "bold");
    } else {
      doc.addFileToVFS("HindSiliguri-Regular.ttf", cachedFontBase64);
      doc.addFont("HindSiliguri-Regular.ttf", "HindSiliguri", "normal");
    }
    doc.setFont("HindSiliguri", "normal");
    return true;
  } catch (err) {
    console.error("Bangla font load failed, falling back to Latin transliteration", err);
    return false;
  }
};
