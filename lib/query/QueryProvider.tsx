"use client";

import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let queryClient: QueryClient | undefined;

function getQueryClient() {
  if (typeof window === "undefined") return new QueryClient();

  queryClient ??= new QueryClient();
  return queryClient;
}

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      {children}
    </QueryClientProvider>
  );
}
