import { statuses } from "~/server/data/orders";

export default defineEventHandler(() => {
  try {
    return statuses;
  } catch (error) {
    console.error("Error fetching statuses:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve statuses",
    });
  }
});
