import { orderHistories } from "~/server/data/orders";

export default defineEventHandler(() => {
  try {
    return orderHistories;
  } catch (error) {
    console.error("Error fetching order histories:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve order histories",
    });
  }
});
