export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: Date;
  readingTime: string;
  tags: string[];
}

export type BlogCategory = {
  name: string;
  slug: string;
  description: string;
  count: number;
}; 