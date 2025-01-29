import { users } from "../../../data/users";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) throw createError("User ID is required");

  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) throw new Error("User not found");

  const body = await readBody(event);
  users[userIndex] = { ...users[userIndex], ...body };
  return users[userIndex];
});
