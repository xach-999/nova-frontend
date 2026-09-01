import { ProductShowcase } from "@/src/features/home/components/product-showcase";
import type { Product } from "@/src/features/products/types/product";

const bestSellerProducts: Product[] = [
  {
    id: "relaxed-coat",
    slug: "relaxed-coat",
    name: "Relaxed Wool Coat",
    category: "Coats",
    price: 149,
    compareAtPrice: 189,
    colors: ["Charcoal", "Stone"],
    isBestSeller: true,
  },
  {
    id: "daily-runner",
    slug: "daily-runner",
    name: "Daily Runner Sneaker",
    category: "Shoes",
    price: 96,
    colors: ["White", "Black"],
    isBestSeller: true,
  },
  {
    id: "wide-leg-pants",
    slug: "wide-leg-pants",
    name: "Wide-Leg Cotton Pants",
    category: "Pants",
    price: 74,
    compareAtPrice: 92,
    colors: ["Black", "Olive"],
    isBestSeller: true,
  },
  {
    id: "everyday-cap",
    slug: "everyday-cap",
    name: "Everyday Cotton Cap",
    category: "Accessories",
    price: 28,
    colors: ["Navy", "Cream"],
    isBestSeller: true,
  },
];

export function BestSellers() {
  return (
    <ProductShowcase
      eyebrow="Best sellers"
      title="Most-worn pieces from the shop."
      href="/products?sort=best-sellers"
      linkLabel="Shop best sellers"
      products={bestSellerProducts}
      surface="background"
    />
  );
}
