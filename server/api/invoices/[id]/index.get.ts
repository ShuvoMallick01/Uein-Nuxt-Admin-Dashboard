import invoices from "../../../data/invoices";

export default defineEventHandler(async (event) => {
  console.log("testing...", event);
  return event;
  try {
    const id = getRouterParam(event, "id");
    console.log("Testing...", id);
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "Invoice ID is required!",
      });

    const invoice = invoices.find((invoice) => invoice.id === id);

    if (!invoice) {
      throw createError({
        statusCode: 404,
        statusMessage: "Invoice not found!",
      });
    }
    console.log(invoice);
    return invoice;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
