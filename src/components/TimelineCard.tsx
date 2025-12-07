const timeline = [
  { time: "08:12", title: "Gemini summary", detail: "3 new anomalies in fermentation batch #87" },
  { time: "10:45", title: "Fishing log", detail: "Lake Shikotsu • Rainbow Trout (2)" },
  { time: "12:30", title: "Coffee cupping", detail: "Ethiopia Guji scored 88.5" },
  { time: "14:00", title: "Wine vintage", detail: "Cabernet 2019 tasting notes updated" }
];

export function TimelineCard() {
  return (
    <div className="card" id="logs">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="section-title">Activity Timeline</div>
        <p className="mt-1 text-sm text-white/60">Stream of recent observations synced from field teams.</p>
      </div>
      <div className="divide-y divide-white/10">
        {timeline.map((item) => (
          <div key={item.time} className="flex items-start gap-4 px-5 py-4">
            <div className="mt-1 h-2 w-2 rounded-full bg-cb-purple"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="font-semibold text-white">{item.title}</span>
                <span className="text-xs text-white/50">{item.time}</span>
              </div>
              <p className="text-sm text-white/60">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
