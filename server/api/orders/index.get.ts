import { orders } from "../../data/orders";

export default defineEventHandler(async (event) => {
  try {
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve orders",
      data: { success: false, error: "Failed to retrieve orders." },
    });
  }
});
