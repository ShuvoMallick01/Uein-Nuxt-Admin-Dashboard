import invoices from "../../data/invoices";
import users from "~/pages/practice/users2.vue";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const user = users[Math.floor(Math.random() * users.length)];
    const newInvoice = {
      id: invoices[invoices.length - 1].id + 1,
      ...body,
      customer: { id: user.id, name: user.name, image: user.image },
    };

    invoices.push(newInvoice);
    console.log("New Product:", newInvoice);

    return { success: true, data: newInvoice };
  } catch (error) {
    console.error("Error creating invoice:", error);
    return sendError(event, error as Error);
  }
});
