import { orders } from "../../../data/orders";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "Order Id is required!",
      });

    const order = orders.find((order) => order.id === Number(id));

    if (!order) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found!",
      });
    }

    return order;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
