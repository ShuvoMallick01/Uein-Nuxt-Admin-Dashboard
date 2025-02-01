import products from "../../data/products";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // const newProduct = {
    //   id: products.length + 1,
    //   ...body,
    //   createdAt: new Date().toDateString(),
    // };
    console.log("New Product:", body);
    products.push(body);

    return { success: true, data: body };
  } catch (error) {
    console.error("Error creating product:", error);
    return sendError(event, error as Error);
  }
});
