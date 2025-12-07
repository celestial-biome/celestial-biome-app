"use client";

import { useQuery } from "@tanstack/react-query";

const fetchPreviewMetrics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return [
    { label: "Wine Vintages", value: 128, delta: "+6%", color: "from-cb-purple to-blue-500" },
    { label: "Coffee Discoveries", value: 96, delta: "+3%", color: "from-emerald-400 to-cb-amber" },
    { label: "Fishing Locations", value: 42, delta: "+12%", color: "from-sky-400 to-indigo-500" }
  ];
};

export function DashboardHighlights() {
  const { data, isLoading } = useQuery({
    queryKey: ["preview-metrics"],
    queryFn: fetchPreviewMetrics,
    staleTime: 1000 * 60 * 5
  });

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {(isLoading ? new Array(3).fill(null) : data)?.map((metric, index) => (
        <div key={metric?.label ?? index} className="card p-5">
          <div className="text-sm text-white/60">{metric?.label ?? "Loading"}</div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-3xl font-semibold text-white">{metric ? metric.value : "..."}</div>
            <div
              className={`rounded-full bg-gradient-to-r ${metric?.color ?? "from-cb-purple to-cb-amber"} px-3 py-1 text-xs font-semibold text-[#0b1221]`}
            >
              {metric ? metric.delta : ""}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
