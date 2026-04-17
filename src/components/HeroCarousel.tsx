import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import tallinnImg from "@/assets/tallinn-city.jpg";
import tartuImg from "@/assets/hero-tartu.jpg";
import natureImg from "@/assets/hero-nature.jpg";
import skylineImg from "@/assets/hero-tallinn-skyline.jpg";
import taltechImg from "@/assets/taltech-campus.jpg";

export const HeroCarousel = () => {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);

  const slides = [
    {
      src: tallinnImg,
      title: t("Your Strategic Gateway to Europe", "ইউরোপে আপনার কৌশলগত প্রবেশদ্বার"),
      sub: t("Tallinn Old Town — EU & Schengen, e-governance pioneer", "তালিন পুরান শহর — EU ও শেনজেন, ই-গভর্নেন্স পথিকৃৎ"),
    },
    {
      src: tartuImg,
      title: t("University of Tartu — 1632", "তার্তু বিশ্ববিদ্যালয় — ১৬৩২"),
      sub: t("Top-ranked research university in the Baltics", "বাল্টিক অঞ্চলের শীর্ষ গবেষণা বিশ্ববিদ্যালয়"),
    },
    {
      src: taltechImg,
      title: t("TalTech — Tallinn University of Technology", "টালটেক — তালিন প্রযুক্তি বিশ্ববিদ্যালয়"),
      sub: t("Estonia's premier hub for Cybersecurity & AI", "এস্তোনিয়ার সাইবারসিকিউরিটি ও AI-এর প্রধান কেন্দ্র"),
    },
    {
      src: skylineImg,
      title: t("Digital Capital of the World", "বিশ্বের ডিজিটাল রাজধানী"),
      sub: t("99% of public services online — fastest path to PR in Northern EU", "৯৯% সরকারি সেবা অনলাইনে — উত্তর ইউরোপে দ্রুততম PR পথ"),
    },
    {
      src: natureImg,
      title: t("Pristine Nature, Clean Air", "নির্মল প্রকৃতি, বিশুদ্ধ বাতাস"),
      sub: t("50% forest cover, lowest pollution in EU", "৫০% বনভূমি, EU-এর সর্বনিম্ন দূষণ"),
    },
  ];

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="rounded-2xl overflow-hidden relative h-44 md:h-72 lg:h-80 bg-muted">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.title}
            width={1600}
            height={900}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === idx ? "opacity-100 animate-[kenburns_8s_ease-out_forwards]" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 right-6 z-10">
          <h2 className="text-xl md:text-3xl font-extrabold text-card-foreground drop-shadow-lg">
            {slides[idx].title}
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground drop-shadow mt-1">
            {slides[idx].sub}
          </p>
        </div>
        <div className="absolute bottom-3 right-4 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
