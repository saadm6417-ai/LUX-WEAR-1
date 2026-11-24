
(function () {
  const SUPABASE_URL = "https://hxyxwvpipnlxjyyoptyb.supabase.co";

  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eXh3dnBpcG5seGp5eW9wdHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUyODkwMDEsImV4cCI6MjExMDg2NTAwMX0.zU2xBadDHV2Y-mZHjDVsswqutvcotiQiVjpEhF61Ag4";

  if (!window.supabase || !window.supabase.createClient) {
    console.error("Supabase library not loaded");
    return;
  }

  window.luxwearSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
})();
