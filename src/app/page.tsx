const highlights = [
  "Next.js + TypeScript alap",
  "Prisma + PostgreSQL kapcsolat",
  "Coolifyhoz kész Docker build",
  "Készen áll a további oldalrészekre"
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Induló weboldal scaffold</p>
        <h1>Gyorsan fejleszthető Node.js weboldal Coolify és adatbázis támogatással.</h1>
        <p className="lead">
          Ez az alap már tartalmazza a szükséges szerkezetet a folytatáshoz: modern frontend,
          külön health endpoint, és egy Prisma-alapú PostgreSQL réteg.
        </p>

        <div className="feature-grid">
          {highlights.map((item) => (
            <div key={item} className="feature-item">
              {item}
            </div>
          ))}
        </div>

        <div className="cta-row">
          <a className="primary-link" href="/api/health">
            Health check
          </a>
          <span className="secondary-text">Kezdésnek futtasd a migrációkat és állítsd be a DATABASE_URL-t.</span>
        </div>
      </section>
    </main>
  );
}
