export type Product = {
  id: string;
  slug?: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  colors: string[];
  imageUrl?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
};
