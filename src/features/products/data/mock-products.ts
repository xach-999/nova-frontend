import type { Product } from "@/src/features/products/types/product";

export const mockProducts: Product[] = [
  {
    id: "minimal-linen-jacket",
    name: "Minimal Linen Jacket",
    category: "Outerwear",
    price: 148,
    colors: ["Teal", "Sand"],
    isNew: true,
  },
  {
    id: "structured-cotton-shirt",
    name: "Structured Cotton Shirt",
    category: "Shirts",
    price: 86,
    colors: ["White", "Slate"],
  },
  {
    id: "everyday-canvas-tote",
    name: "Everyday Canvas Tote",
    category: "Bags",
    price: 64,
    colors: ["Natural", "Black"],
    isNew: true,
  },
  {
    id: "soft-knit-sweater",
    name: "Soft Knit Sweater",
    category: "Knitwear",
    price: 118,
    colors: ["Gray", "Cream"],
  },
  {
    id: "tailored-wide-leg-pants",
    name: "Tailored Wide-Leg Pants",
    category: "Pants",
    price: 132,
    colors: ["Black", "Olive"],
  },
  {
    id: "compact-crossbody-bag",
    name: "Compact Crossbody Bag",
    category: "Bags",
    price: 92,
    colors: ["Brown", "Black"],
  },
];
