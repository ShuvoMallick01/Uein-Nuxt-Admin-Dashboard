import reviews from "~/server/data/reviews";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");

    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "Product ID is required!",
      });
    }

    // Filter reviews by id
    // const productReviews = reviews.filter(
    //   (review) => review.id === Number(id)
    // );

    return reviews;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
