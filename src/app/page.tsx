import { DashboardHighlights } from "@/components/DashboardHighlights";
import { ChatPreview } from "@/components/ChatPreview";
import { LogPanels } from "@/components/LogPanels";
import { SupabaseStatusCard } from "@/components/SupabaseStatusCard";
import { TimelineCard } from "@/components/TimelineCard";

const supabaseConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const insights = [
  {
    title: "Vintage Health",
    detail: "Gemini flagged 3 batches with temp variance beyond ±1.5°C.",
    action: "Review cooling valves"
  },
  {
    title: "Coffee Scores",
    detail: "Average cupping score sits at 87.3 (+0.6 WoW).",
    action: "Publish tasting notes"
  },
  {
    title: "Field Ops",
    detail: "Rain expected across 2 fishing locations tomorrow.",
    action: "Reschedule night runs"
  }
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="card p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-white/60">Celestial Biome</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-white">Unified exploration console</h1>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                Next.js + Tailwind starter wired for Supabase Auth and TanStack Query. The layout mirrors the initial UX
                sketches: dashboards for wine, coffee, and fishing logs, plus AI assistants powered by Vertex AI (Gemini).
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
              React 18 · Next.js 14 · Tailwind 3
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <DashboardHighlights />
            <div className="grid gap-4 md:grid-cols-3">
              {insights.map((insight) => (
                <div key={insight.title} className="card p-5">
                  <div className="text-sm uppercase tracking-wide text-cb-purple">{insight.title}</div>
                  <p className="mt-2 text-sm text-white/80">{insight.detail}</p>
                  <button className="mt-3 text-sm font-semibold text-cb-amber">{insight.action}</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <ChatPreview />
          <SupabaseStatusCard configured={supabaseConfigured} />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3" id="dashboards">
        <div className="lg:col-span-2">
          <TimelineCard />
        </div>
        <div className="card p-5">
          <div className="section-title">Admin Dashboard</div>
          <p className="mt-1 text-sm text-white/60">Quick links into transactional and analytical surfaces.</p>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <div className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2">
              <span>Transactional DB (Cloud SQL)</span>
              <span className="badge">PostgreSQL</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2">
              <span>Data Lakehouse (BigQuery)</span>
              <span className="badge">Batch + Sync</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2">
              <span>LLM Context (Gemini)</span>
              <span className="badge">Vertex AI</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2">
              <span>IaC</span>
              <span className="badge">Terraform</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-wide text-white/60">Operational views</div>
            <h2 className="text-2xl font-semibold text-white">Logs preview</h2>
          </div>
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:border-white/20">
            Configure data sources
          </button>
        </div>
        <LogPanels />
      </section>
    </div>
  );
}
