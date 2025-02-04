import invoices from "../../../data/invoices";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "Invoice ID is required!",
      });

    const invoiceIndex = invoices.findIndex((invoice) => invoice.id === id);
    if (invoiceIndex === -1)
      throw createError({
        statusCode: 404,
        statusMessage: "Invoice not found",
      });

    const body = await readBody(event);
    invoices[invoiceIndex] = { ...invoices[invoiceIndex], ...body };

    return invoices[invoiceIndex];
  } catch (error) {
    return sendError(event, error as Error);
  }
});
