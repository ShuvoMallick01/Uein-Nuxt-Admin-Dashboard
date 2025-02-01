import products from "../../../data/products";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "User ID is required!",
      });

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found!",
      });
    }

    return product;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
