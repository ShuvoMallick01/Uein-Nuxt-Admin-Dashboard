import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);
  const { id } = event.context.params;

  if (!id) return { error: "User ID is required" };

  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) return { error: "User not found" };

  if (method === "PUT") {
    const body = await readBody(event);
    users[userIndex] = { ...users[userIndex], ...body };
    return { user: users[userIndex] };
  }

  if (method === "DELETE") {
    const deletedUser = users.splice(userIndex, 1);
    return { user: deletedUser };
  }

  return { error: "Invalid request method" };
});
