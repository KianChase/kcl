export interface Product {
  name: string;
  description: string;
  features: string[];
  image: string;
  dimensions?: {
    width: string;
    depth: string;
    height: string;
  };
  specifications?: {
    [key: string]: string;
  };
  priceRange: string;
  leadTime: string;
}

export interface Category {
  title: string;
  description: string;
  image: string;
  products: Product[];
} 