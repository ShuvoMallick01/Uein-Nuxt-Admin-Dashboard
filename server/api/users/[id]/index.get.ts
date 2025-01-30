import { users } from "../../../data/users";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "User ID is required!",
      });

    const user = users.find((user) => user.id === Number(id));
    if (!user)
      throw createError({ statusCode: 404, statusMessage: "User not found" });

    return user;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
