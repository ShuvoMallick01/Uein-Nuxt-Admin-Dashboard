import products from "../../../data/products";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "Product ID is required!",
      });

    const productIndex = products.findIndex(
      (product) => product.id === Number(id)
    );
    if (productIndex === -1)
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      });

    const body = await readBody(event);
    products[productIndex] = { ...products[productIndex], ...body };

    return products[productIndex];
  } catch (error) {
    return sendError(event, error as Error);
  }
});
