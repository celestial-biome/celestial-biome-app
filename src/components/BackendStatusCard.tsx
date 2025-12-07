"use client";

import { useQuery } from "@tanstack/react-query";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

type BackendStatus = {
  backend: string;
  environment: string;
  timestamp: string;
  features: string[];
};

async function fetchBackendStatus(): Promise<BackendStatus> {
  const response = await fetch(`${apiBaseUrl}/api/status`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Backend request failed: ${response.status}`);
  }

  return response.json();
}

export function BackendStatusCard() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["backend-status"],
    queryFn: fetchBackendStatus,
    staleTime: 30_000,
  });

  return (
    <div className="card space-y-3 p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm uppercase tracking-wide text-white/60">Backend status</div>
          <p className="text-sm text-white/70">Fastify service with health and platform metadata.</p>
        </div>
        <span className="badge">Port 4000</span>
      </div>

      {isLoading && <p className="text-sm text-white/60">Checking service...</p>}

      {isError && (
        <div className="rounded-lg border border-cb-amber/40 bg-cb-amber/10 p-3 text-sm text-cb-amber">
          {error instanceof Error ? error.message : "Unable to reach backend"}
        </div>
      )}

      {data && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden />
            <span>
              {data.backend} · {data.environment}
            </span>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="text-xs uppercase tracking-wide text-white/60">Features</div>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-white/80">
              {data.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-white/50">Updated: {new Date(data.timestamp).toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
