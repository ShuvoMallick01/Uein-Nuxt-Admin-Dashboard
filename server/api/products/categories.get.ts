import { categories } from "~/server/data/product-attributes";

export default defineEventHandler(() => {
  try {
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve categories",
    });
  }
});
