import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { ids } = body;

    if (!Array.isArray(ids) || ids.length === 0)
      throw createError({
        statusCode: 400,
        statusMessage: "At least one User ID is required!",
      });

    const filteredUsers = users.filter((user) => !ids.includes(user.id));
    if (filteredUsers.length === 0)
      throw createError({ statusCode: 404, statusMessage: "User not found" });

    return filteredUsers;
  } catch (error) {
    if (error instanceof Error) {
      return sendError(event, error);
    }
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Internal Server Error" })
    );
  }
});
