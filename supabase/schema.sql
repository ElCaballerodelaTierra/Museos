create table if not exists public.user_museum_markers (
  user_id uuid not null references auth.users (id) on delete cascade,
  museum_id text not null,
  marker_type text not null check (marker_type in ('favorite', 'visited')),
  created_at timestamptz not null default now(),
  primary key (user_id, museum_id, marker_type)
);

alter table public.user_museum_markers enable row level security;

grant select, insert, update, delete on public.user_museum_markers to authenticated;

drop policy if exists "Users can read their own museum markers" on public.user_museum_markers;
create policy "Users can read their own museum markers"
  on public.user_museum_markers
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can add their own museum markers" on public.user_museum_markers;
create policy "Users can add their own museum markers"
  on public.user_museum_markers
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own museum markers" on public.user_museum_markers;
create policy "Users can update their own museum markers"
  on public.user_museum_markers
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can remove their own museum markers" on public.user_museum_markers;
create policy "Users can remove their own museum markers"
  on public.user_museum_markers
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);
