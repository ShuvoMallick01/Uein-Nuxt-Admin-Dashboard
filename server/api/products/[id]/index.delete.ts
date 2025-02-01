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

    const deleteProduct = products.splice(productIndex, 1);
    return deleteProduct;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
