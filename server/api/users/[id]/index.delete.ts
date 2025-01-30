import { users } from "../../../data/users";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id)
      throw createError({
        statusCode: 400,
        statusMessage: "User ID is required!",
      });

    const userIndex = users.findIndex((user) => user.id === Number(id));
    if (userIndex === -1)
      throw createError({ statusCode: 404, statusMessage: "User not found" });

    const deleteUser = users.splice(userIndex, 1);
    return deleteUser;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
