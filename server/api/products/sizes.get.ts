import { sizes } from "~/server/data/product-attributes";

export default defineEventHandler(() => {
  try {
    return sizes;
  } catch (error) {
    console.error("Error fetching sizes:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve sizes",
    });
  }
});
