import { colors } from "~/server/data/product-attributes";

export default defineEventHandler(() => {
  try {
    return colors;
  } catch (error) {
    console.error("Error fetching colors:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve colors",
    });
  }
});
