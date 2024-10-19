// server/api/stars.ts
import { cachedGHStars } from "~/utils/github";
import { getQuery, createError } from "h3";

export default defineEventHandler(async (event) => {
  const { repo } = getQuery(event); // Extracts the 'repo' parameter from URL
  console.log(event);
  if (!repo) {
    throw createError({
      statusCode: 400,
      statusMessage: "Repository name is required",
    });
  }

  try {
    const stars = await cachedGHStars(repo as string);
    return { repo, stars }; // Return the data
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch GitHub stars",
    });
  }
});
