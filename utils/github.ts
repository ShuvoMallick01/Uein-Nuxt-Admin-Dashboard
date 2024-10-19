// utils/github.ts
import { defineCachedFunction } from "#nitro";

export const cachedGHStars = defineCachedFunction(
  async (repo: string) => {
    const data: any = await $fetch(`https://api.github.com/repos/${repo}`);
    return data.stargazers_count;
  },
  {
    maxAge: 60 * 60, // Cache for 1 hour
    name: "ghStars", // Cache name
    getKey: (repo: string) => repo, // Key for caching based on repo name
  }
);
