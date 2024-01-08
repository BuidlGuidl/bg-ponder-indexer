# BG Indexer (powered by Ponder)

## Setup

1. Clone
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill the RPCs (mainnet/op). Database can be null locally (but see below for local DB setup).
4. `npm run dev`

Open the GraqhQL playground at http://localhost:42069. GraphQL explorer (third icon) is useful to see what queries are available.


### Local PostgreSQL Database

You can create a local PostgreSQL database with the provided `docker-compose.yml` file. Run:

```
docker-compose up -d
```
