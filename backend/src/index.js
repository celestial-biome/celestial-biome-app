import Fastify from "fastify";

const server = Fastify({ logger: true });

server.get("/health", async () => ({ status: "ok" }));

server.get("/api/status", async () => ({
  backend: "celestial-biome",
  environment: process.env.NODE_ENV || "development",
  timestamp: new Date().toISOString(),
  features: [
    "Event ingestion",
    "Observability hooks",
    "LLM connector wiring",
    "Data lake sync pipeline"
  ]
}));

const port = Number(process.env.PORT || 4000);
const host = "0.0.0.0";

server
  .listen({ port, host })
  .then(() => {
    server.log.info(`Backend listening on ${host}:${port}`);
  })
  .catch((error) => {
    server.log.error(error, "Failed to start backend server");
    process.exit(1);
  });
