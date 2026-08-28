import type { Product } from "@/src/features/products/types/product";

type ApiProduct = {
  id: string;
  name: string;
  basePrice: string;
  isFeatured: boolean;
  category?: {
    name: string;
  } | null;
  images?: {
    url?: string | null;
    imageUrl?: string | null;
  }[];
  variants?: {
    color?: {
      name: string;
    } | null;
  }[];
};

export type ProductsResponse = {
  items: ApiProduct[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export type ProductListResult = {
  products: Product[];
  meta: ProductsResponse["meta"];
};

function toProduct(product: ApiProduct): Product {
  const colors = [
    ...new Set(
      product.variants
        ?.map((variant) => variant.color?.name)
        .filter((color): color is string => Boolean(color)) ?? [],
    ),
  ];

  return {
    id: product.id,
    name: product.name,
    category: product.category?.name ?? "Uncategorized",
    price: Number(product.basePrice),
    colors: colors.length > 0 ? colors : ["Default"],
    imageUrl: product.images?.[0]?.url ?? product.images?.[0]?.imageUrl ?? undefined,
    isNew: product.isFeatured,
  };
}

export async function fetchProducts({
  page,
  limit,
}: {
  page: string;
  limit: string;
}): Promise<ProductListResult> {
  const url = new URL("/api/products", window.location.origin);
  url.searchParams.set("page", page);
  url.searchParams.set("limit", limit);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to load products right now.");
  }

  const data = (await response.json()) as ProductsResponse;

  return {
    products: data.items.map(toProduct),
    meta: data.meta,
  };
}
