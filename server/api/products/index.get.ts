import products from "../../data/products";

export default defineEventHandler(async (event) => {
  try {
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve products",
      data: { success: false, error: "Failed to retrieve products." },
    });
  }
});
