import { users } from "../../../data/users";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) throw new Error("User ID is required");

  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) throw new Error("User not found");

  const deleteUser = users.splice(userIndex, 1);
  return deleteUser;
});
