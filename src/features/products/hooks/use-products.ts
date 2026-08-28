"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@/src/features/products/api/products";

export function useProducts({ page, limit }: { page: string; limit: string }) {
  return useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts({ page, limit }),
  });
}
