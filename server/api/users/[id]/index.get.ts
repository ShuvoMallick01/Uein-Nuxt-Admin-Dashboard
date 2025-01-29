import { users } from "../../../data/users";

export default defineEventHandler(async (event) => {
  console.log("Testing....", parseCookies(event));
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
    return sendError(event, error);
  }

  //   const { id } = event.context.params as { id?: string };
  //   if (!id) throw new Error("User ID is required");

  //   const userIndex = users.findIndex((user) => user.id === parseInt(id));
  //   if (userIndex === -1) throw new Error("User not found");

  //   return users[userIndex];
});
