export interface Product {
  id: number;
  code: string;
  title: string;
  category: string;
  featureImage: string;
  createdAt: string;
  totalReviews: number;
  rating: number;
  price: number;
  discount: number;
  sizes?: string[];
  images: string[];
  colors?: string[];
  stock: number;
  offers: string[];
  description: string;
  status: "Draft" | "Published";
  features: { name: string; value: string }[];
}

export interface Review {
  id: number;
  rating: number;
  review: string;
  createdAt: string;
  productId: number;
  user: { id: number; name: string; image: string };
}

export interface ProductPayload {
  code: string;
  title: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  description: string;
  status: boolean;
  features: { name: string; value: string }[];
}
