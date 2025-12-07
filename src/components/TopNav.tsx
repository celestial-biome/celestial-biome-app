import Link from "next/link";

const navItems = [
  { href: "#logs", label: "Logs" },
  { href: "#dashboards", label: "Dashboards" },
  { href: "#ai", label: "AI Ops" },
  { href: "#admin", label: "Admin" }
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1221]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cb-purple to-cb-amber text-lg font-bold text-white shadow-lg shadow-cb-purple/30">
            CB
          </div>
          <div className="leading-tight">
            <div className="text-sm text-white/60">Celestial Biome</div>
            <div className="text-lg font-semibold text-white">Unified Ops Console</div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white hover:border-white/20">
            Login
          </button>
          <button className="rounded-full bg-gradient-to-r from-cb-purple to-cb-amber px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cb-purple/30">
            New Log
          </button>
        </div>
      </div>
    </header>
  );
}
