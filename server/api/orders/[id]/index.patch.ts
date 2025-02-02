import { orders } from "../../../data/orders";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "Order ID is required!",
      });

    const orderIndex = orders.findIndex((order) => order.id === Number(id));
    if (orderIndex === -1)
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found",
      });

    const body = await readBody(event);
    orders[orderIndex] = { ...orders[orderIndex], ...body };

    return orders[orderIndex];
  } catch (error) {
    return sendError(event, error as Error);
  }
});
