import invoices from "../../data/invoices";

export default defineEventHandler(async (event) => {
  try {
    return invoices;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve invoices",
      data: { success: false, error: "Failed to retrieve invoices." },
    });
  }
});
