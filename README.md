# Balogh Krisztian Weboldal

Node.js alapú, Coolifyra kész weboldal scaffold Next.js, TypeScript, Prisma és PostgreSQL támogatással.

## Mi van benne

- Next.js App Router alap
- Prisma kliens és PostgreSQL séma
- Dockerfile a production buildhez
- docker-compose helyi fejlesztéshez
- Health endpoint: `/api/health`

## Indítás helyben

1. Másold az env fájlt:

   ```bash
   cp .env.example .env
   ```

2. Állítsd be a `DATABASE_URL` értéket.
3. Telepítsd a függőségeket:

   ```bash
   npm install
   ```

4. Hozd létre az adatbázis sémát:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Indítsd el a fejlesztői szervert:

   ```bash
   npm run dev
   ```

## Coolify deploy

### Beállítások a Coolify-ban:
- **Repo build root**: a projekt gyökere (`.`)
- **Build command**: `npm run build`
- **Start command**: `npm run start`
- **Port**: `3000`
- **Environment variables**: 
  - `DATABASE_URL` (PostgreSQL connection string, pl: `postgresql://user:pass@host:5432/dbname?schema=public`)
  - `NEXT_PUBLIC_APP_NAME` (opcional, app neve)
  - `NODE_ENV=production`

### Docker-hez szükséges:
- A Dockerfile már optimalizált multi-stage build-del
- PostgreSQL adatbázis külön containerben vagy externa service-ben

### Migrációk első deploykor:
Ha ezt elsőizben deployolod és üres az adatbázis:
```bash
npx prisma migrate deploy
```
Ezt a futtatható workflow-ként/init script-ként kell egy lépésben futtatni a Coolify-ban, vagy a start előtt futtatni.

## Adatbázis

A Prisma séma a következő modelleket tartalmazza:

- `SiteSetting`
- `ContactMessage`

Ezeket később bővítheted a saját üzleti logikád szerint.

## Következő lépések

- kezdeti oldalrészek felépítése
- kapcsolatfelvételi űrlap
- admin felület vagy CMS integráció
- seed adatok és validációk
