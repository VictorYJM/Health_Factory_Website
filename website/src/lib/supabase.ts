import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

let supabase: SupabaseClient | undefined;

if (url && key) { supabase = createClient(url, key); }
else { console.error("Missing supabase credentials!"); }

export default supabase;