import invoices from "../../../data/invoices";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "Product ID is required!",
      });

    const invoiceIndex = invoices.findIndex((invoice) => invoice.id === id);
    if (invoiceIndex === -1)
      throw createError({
        statusCode: 404,
        statusMessage: "Invoice not found",
      });

    const deleteInvoice = invoices.splice(invoiceIndex, 1);
    return deleteInvoice;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
