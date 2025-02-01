import products from "../../data/products";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { ids } = body;

    if (!Array.isArray(ids) || ids.length === 0)
      throw createError({
        statusCode: 400,
        statusMessage: "At least one Product ID is required!",
      });

    const filteredProducts = products.filter(
      (product) => !ids.includes(product.id)
    );
    if (filteredProducts.length === 0)
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      });

    return filteredProducts;
  } catch (error) {
    if (error instanceof Error) {
      return sendError(event, error);
    }
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Internal Server Error" })
    );
  }
});
