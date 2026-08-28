export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  colors: string[];
  imageUrl?: string;
  isNew?: boolean;
};
