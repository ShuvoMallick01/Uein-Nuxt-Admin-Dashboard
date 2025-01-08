import { Post } from "@/types/Post";

const posts: Post[] = [
  {
    id: 1,
    content:
      "Look at that sky! I so want to be there.. Can we arrange a trip? Is that a possibility? Please!!!",
    likes: 30,
    thumbnail: "/images/posts/post-1.jpg",
    totalLikes: 30,
    totalShares: 4,
    totalComments: 6,
    createdAt: 29,
    user: { id: 1, name: "Marie Prohaska", image: "/images/users/01.jpg" },
  },
  {
    id: 2,
    content:
      "Hey!! I never saw this one, it was amazing.. I think I’m going to buy myself a set and try his technique at home!",
    likes: 30,
    thumbnail: "/images/posts/post-2.jpg",
    totalLikes: 30,
    totalShares: 4,
    totalComments: 6,
    createdAt: 29,
    user: { id: 2, name: "John Doe", image: "/images/users/02.jpg" },
  },
  {
    id: 3,
    content:
      "We'll put a happy little sky in here. We touch the canvas, the canvas takes what it wants. A little happy sunlight shining through there. Let's build some happy little clouds up here. I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things. This is the fun part.Isn't it great to do something you can't fail at? Little trees and bushes grow however makes them happy. Trees get lonely too, so we'll give him a little friend. There are no mistakes. You can fix anything that happens.",
    likes: 30,
    totalLikes: 30,
    totalShares: 4,
    totalComments: 6,
    createdAt: 29,
    user: { id: 3, name: "Jane Smith", image: "/images/users/03.jpg" },
  },
  {
    id: 4,
    content:
      "Hey!! I never saw this one, it was amazing.. I think I’m going to buy myself a set and try his technique at home!",
    likes: 30,
    thumbnail: "/images/posts/post-3.jpg",
    totalLikes: 30,
    totalShares: 4,
    totalComments: 6,
    createdAt: 29,
    user: { id: 4, name: "David Lee", image: "/images/users/04.jpg" },
  },
  {
    id: 5,
    content:
      "Hey!! I never saw this one, it was amazing.. I think I’m going to buy myself a set and try his technique at home!",
    likes: 30,
    thumbnail: "/images/posts/post-4.jpg",
    totalLikes: 30,
    totalShares: 4,
    totalComments: 6,
    createdAt: 29,
    user: { id: 5, name: "Sarah Wilson", image: "/images/users/05.jpg" },
  },
  {
    id: 6,
    content:
      "Hey!! I never saw this one, it was amazing.. I think I’m going to buy myself a set and try his technique at home!",
    likes: 30,
    thumbnail: "/images/posts/post-5.jpg",
    totalLikes: 30,
    totalShares: 4,
    totalComments: 6,
    createdAt: 29,
    user: { id: 6, name: "Michael Brown", image: "/images/users/06.jpg" },
  },
];

export default posts;
