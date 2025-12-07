interface SupabaseStatusCardProps {
  configured: boolean;
}

export function SupabaseStatusCard({ configured }: SupabaseStatusCardProps) {
  return (
    <div className="card" id="admin">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="section-title">Platform Checklist</div>
        <p className="mt-1 text-sm text-white/60">Runtime configuration for the Next.js + Supabase front-end.</p>
      </div>
      <div className="space-y-4 px-5 py-4 text-sm text-white/80">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div>
            <div className="font-semibold">Supabase client</div>
            <p className="text-white/60">NEXT_PUBLIC_SUPABASE_URL &amp; NEXT_PUBLIC_SUPABASE_ANON_KEY</p>
          </div>
          <span
            className={`badge ${configured ? "bg-emerald-400/20 text-emerald-200" : "bg-orange-400/10 text-orange-200"}`}
          >
            {configured ? "Configured" : "Pending"}
          </span>
        </div>
        <p className="text-xs text-white/50">
          The UI is wired for TanStack Query and Supabase Auth helpers. Add your environment variables, run
          <code className="mx-1 rounded bg-black/40 px-2 py-1">npm run dev</code>, and the dashboard cards will start
          streaming real data.
        </p>
      </div>
    </div>
  );
}
