import { Link, useLocation } from "react-router-dom";
import { Home, Sparkles, Plane, Compass, Wallet } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const BottomNav = () => {
  const { pathname } = useLocation();
  const { t } = useLang();

  const items = [
    { to: "/", icon: Home, label: t("Home", "হোম") },
    { to: "/discover-estonia", icon: Compass, label: t("Discover", "আবিষ্কার") },
    { to: "/scholarship-strategy", icon: Sparkles, label: t("Waiver", "ওয়েভার") },
    { to: "/visa-logistics", icon: Plane, label: t("Visa", "ভিসা") },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border/50 pb-[env(safe-area-inset-bottom)]"
      aria-label="Mobile bottom navigation"
    >
      <ul className="flex justify-around items-stretch h-16">
        {items.map(({ to, icon: Icon, label }) => {
          const active = pathname === to;
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className={`flex flex-col items-center justify-center h-full gap-0.5 transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? "scale-110" : ""} transition-transform`} />
                <span className="text-[10px] font-medium">{label}</span>
                {active && <span className="absolute top-0 h-0.5 w-8 bg-primary rounded-b-full" />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
