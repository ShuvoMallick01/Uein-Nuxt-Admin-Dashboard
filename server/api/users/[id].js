import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  const { id } = event.context.params;
  if (!id) throw new Error("User ID is required");

  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) throw new Error("User not found");

  // GET USER
  const getUser = async (event) => {
    try {
      return users[userIndex];
    } catch (error) {
      console.log("data Not Found", error);
    }
  };

  // UPDATE USER
  const updateUser = async (event) => {
    const body = await readBody(event);
    console.log(body);
    users[userIndex] = { ...users[userIndex], ...body };
    return users[userIndex];
  };

  // DELETE USER
  const deleteUser = async () => {
    const deleteUser = users.splice(userIndex, 1);
    return deleteUser;
  };

  if (method === "GET") {
    return await getUser(event);
  }

  if (method === "PUT") {
    return await updateUser(event);
  }

  if (method === "DELETE") {
    return await deleteUser();
  }

  return { error: "Invalid request method" };
});
