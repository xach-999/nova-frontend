import { ProductShowcase } from "@/src/features/home/components/product-showcase";
import type { Product } from "@/src/features/products/types/product";

const products: Product[] = [
  {
    id: "classic-white-t-shirt",
    slug: "classic-white-t-shirt",
    name: "Classic White T-Shirt",
    category: "T-Shirts",
    price: 29.99,
    compareAtPrice: 39.99,
    colors: ["White", "Black"],
    isNew: true,
  },
  {
    id: "classic-cotton-hoodie",
    slug: "classic-cotton-hoodie",
    name: "Classic Cotton Hoodie",
    category: "Hoodies",
    price: 59.99,
    compareAtPrice: 79.99,
    colors: ["Black", "Gray"],
    isNew: true,
  },
  {
    id: "everyday-canvas-tote",
    slug: "everyday-canvas-tote",
    name: "Everyday Canvas Tote",
    category: "Accessories",
    price: 64,
    colors: ["Natural", "Black"],
  },
  {
    id: "soft-knit-sweater",
    slug: "soft-knit-sweater",
    name: "Soft Knit Sweater",
    category: "Layers",
    price: 118,
    colors: ["Gray", "Cream"],
  },
];

export function FeaturedProducts() {
  return (
    <ProductShowcase
      eyebrow="New arrivals"
      title="Fresh pieces for the season."
      href="/products?sort=newest"
      linkLabel="Shop new arrivals"
      products={products}
    />
  );
}
