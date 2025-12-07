"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useMemo, useState } from "react";
import { SupabaseContext, createSupabaseBrowserClient } from "@/lib/supabaseClient";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  return (
    <SupabaseContext.Provider value={supabase}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SupabaseContext.Provider>
  );
}
