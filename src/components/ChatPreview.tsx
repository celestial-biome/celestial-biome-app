const messages = [
  { role: "system", text: "Gemini is watching your fermentation telemetry." },
  { role: "user", text: "Any off-profile batches today?" },
  { role: "assistant", text: "Batch #87 deviated by +1.2°C for 12 minutes. Suggest checking cooling valve." }
];

export function ChatPreview() {
  return (
    <div className="card" id="ai">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="section-title">AI Console</div>
        <p className="mt-1 text-sm text-white/60">Vertex AI / Gemini powered copilots plugged into your datasets.</p>
      </div>
      <div className="space-y-4 px-5 py-4 text-sm text-white/80">
        {messages.map((message, idx) => (
          <div key={idx} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="mb-1 text-xs uppercase tracking-wide text-white/60">{message.role}</div>
            <div className="leading-relaxed text-white/90">{message.text}</div>
          </div>
        ))}
        <button className="w-full rounded-xl border border-white/10 bg-gradient-to-r from-cb-purple to-cb-amber px-4 py-3 text-center text-sm font-semibold text-[#0b1221] shadow-lg shadow-cb-purple/30">
          Open Chat Workspace
        </button>
      </div>
    </div>
  );
}
