export interface Post {
  id: number;
  likes: number;
  content: string;
  thumbnail?: string;
  totalLikes: number;
  totalShares: number;
  totalComments: number;
  createdAt: number;
  user: User;
}

interface User {
  id: number;
  name: string;
  image: string;
}
