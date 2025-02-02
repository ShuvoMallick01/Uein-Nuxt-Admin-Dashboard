import { paymentMethods } from "~/server/data/orders";

export default defineEventHandler(() => {
  try {
    return paymentMethods;
  } catch (error) {
    console.error("Error fetching payment methods:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve payment methods",
    });
  }
});
