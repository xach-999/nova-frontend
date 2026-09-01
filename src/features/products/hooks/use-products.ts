"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@/src/features/products/api/products";

type UseProductsParams = {
  page: string;
  limit: string;
  category?: string;
  gender?: string;
  sale?: string;
  sort?: string;
};

export function useProducts(params: UseProductsParams) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
  });
}
