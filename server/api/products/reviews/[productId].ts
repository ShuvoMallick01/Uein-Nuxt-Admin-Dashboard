import reviews from "~/server/data/reviews";

export default defineEventHandler(async (event) => {
  try {
    const productId = getRouterParam(event, "productId");

    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Product ID is required!",
      });
    }

    // Filter reviews by productId
    // const productReviews = reviews.filter(
    //   (review) => review.productId === Number(productId)
    // );

    return reviews;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
