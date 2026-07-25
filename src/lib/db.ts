import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let client: NeonQueryFunction<false, false> | null = null;
let schemaReady: Promise<void> | null = null;

export function isDbConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

function getClient() {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    client = neon(url);
  }
  return client;
}

const DDL = [
  `create table if not exists profile (
     id integer primary key default 1,
     name text not null default '',
     headline text not null default '',
     location text default '',
     email text default '',
     phone text default '',
     bio text default '',
     objective text default '',
     github_url text default '',
     linkedin_url text default '',
     avatar_url text default '',
     updated_at timestamptz not null default now(),
     constraint profile_singleton check (id = 1)
   )`,
  `create table if not exists projects (
     id serial primary key,
     title text not null,
     summary text default '',
     description text default '',
     tech text[] not null default '{}',
     live_url text default '',
     repo_url text default '',
     image_url text default '',
     featured boolean not null default false,
     sort_order integer not null default 0,
     created_at timestamptz not null default now()
   )`,
  `create table if not exists experience (
     id serial primary key,
     role text not null,
     company text not null,
     location text default '',
     period text default '',
     description text default '',
     sort_order integer not null default 0
   )`,
  `create table if not exists education (
     id serial primary key,
     institution text not null,
     degree text default '',
     location text default '',
     period text default '',
     sort_order integer not null default 0
   )`,
  `create table if not exists skills (
     id serial primary key,
     name text not null,
     category text default 'General',
     sort_order integer not null default 0
   )`,
  // added after the first release — the project cards grew a subtitle, year and highlight list
  `alter table projects add column if not exists subtitle text default ''`,
  `alter table projects add column if not exists year text default ''`,
  `alter table projects add column if not exists highlights text[] not null default '{}'`,
  `create table if not exists resume (
     id integer primary key default 1,
     filename text not null default 'resume.pdf',
     content_type text not null default 'application/pdf',
     data bytea,
     external_url text default '',
     updated_at timestamptz not null default now(),
     constraint resume_singleton check (id = 1)
   )`,
];

/**
 * Applies the schema once per server instance. Every statement is
 * idempotent, so concurrent cold starts are safe.
 */
export async function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getClient();
      for (const statement of DDL) {
        await sql.query(statement);
      }
    })().catch((err) => {
      schemaReady = null;
      throw err;
    });
  }
  return schemaReady;
}

/** Runs a parameterised query, applying the schema first. */
export async function query<T = Record<string, unknown>>(
  text: string,
  params: unknown[] = [],
): Promise<T[]> {
  await ensureSchema();
  const sql = getClient();
  return (await sql.query(text, params)) as T[];
}
