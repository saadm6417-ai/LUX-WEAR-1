-- LUX WEAR admin team foundation (run in Supabase SQL Editor)
create table if not exists public.luxwear_staff_permissions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  role text not null default 'staff' check (role in ('owner','manager','staff')),
  permissions jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);
create table if not exists public.luxwear_admin_audit (
  id bigint generated always as identity primary key,
  actor uuid references auth.users(id) on delete set null,
  action text not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
alter table public.luxwear_staff_permissions enable row level security;
alter table public.luxwear_admin_audit enable row level security;
-- RLS intentionally denies direct browser access until server-side authorization policies/functions are configured.
revoke all on public.luxwear_staff_permissions from anon, authenticated;
revoke all on public.luxwear_admin_audit from anon, authenticated;
