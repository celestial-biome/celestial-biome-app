import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

export type SupabaseBrowserClient = SupabaseClient | null;

export const SupabaseContext = createContext<SupabaseBrowserClient>(null);

export const createSupabaseBrowserClient = (): SupabaseBrowserClient => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Supabase environment variables are not set. Client features will be disabled.");
    }
    return null;
  }

  return createClient(url, anonKey);
};

export const useSupabase = () => useContext(SupabaseContext);
