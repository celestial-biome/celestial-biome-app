const logSections = [
  {
    title: "Wine Logs",
    badge: "Vintage",
    items: [
      "Batch #87 • 2019 Cabernet Franc • +1.2°C",
      "Batch #63 • 2021 Pinot Noir • Barrel aging",
      "Batch #44 • 2018 Riesling • Ready for bottling"
    ]
  },
  {
    title: "Coffee Logs",
    badge: "Cupping",
    items: [
      "Ethiopia Guji • Floral, bergamot • Score 88.5",
      "Kenya AA • Currant, citrus • Score 87.0",
      "Colombia Huila • Caramel, plum • Score 86.2"
    ]
  },
  {
    title: "Fishing Logs",
    badge: "Field",
    items: [
      "Hokkaido • Rainbow Trout (2) • 12°C",
      "Great Lakes • Coho Salmon (1) • 8°C",
      "Lake Tahoe • Kokanee (3) • 10°C"
    ]
  }
];

export function LogPanels() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {logSections.map((section) => (
        <div key={section.title} className="card p-5">
          <div className="flex items-center justify-between">
            <div className="section-title">{section.title}</div>
            <span className="badge">{section.badge}</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {section.items.map((item) => (
              <li key={item} className="rounded-lg border border-white/5 bg-white/5 px-3 py-2">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
