import { orders } from "../../data/orders";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const id = orders[orders.length - 1].id + 1;

    const newOrder = { id: id, ...body };
    console.log("New Product:", newOrder);
    orders.push(newOrder);
    return { success: true, data: body };
  } catch (error) {
    console.error("Error creating product:", error);
    return sendError(event, error as Error);
  }
});
