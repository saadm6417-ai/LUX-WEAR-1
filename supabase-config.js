(function () {
  const SUPABASE_URL = "https://hxyxwvpipnlxjyyoptyb.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable__jpC6S1gt3PYgGa-CLn_FA_1WdtqakK";

  if (!window.supabase || !window.supabase.createClient) {
    console.error("Supabase library not loaded");
    return;
  }

  window.luxwearSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
})();
