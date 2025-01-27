import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  async function getUsers() {
    try {
      return users;
    } catch (error) {
      console.error("Error creating user:", error);
      return { error: "Failed to get users" };
    }
  }

  async function createUser(event) {
    try {
      const body = await readBody(event);
      console.log("Test Create User");
      const newUser = {
        id: users.length + 1,
        ...body,
        createdAt: new Date().toDateString(),
      };
      console.log(newUser);
      users.push(newUser);

      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      return { error: "Failed to create user" };
    }
  }

  async function deleteUser(event) {
    const body = await readBody(event);
    const { ids } = body;
    try {
      const filteredUsers = users.filter((user) => !ids.includes(user.id));
      return filteredUsers;
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "GET") {
    return await getUsers();
  }

  if (method === "POST") {
    return await createUser(event);
  }

  if (method === "DELETE") {
    return await deleteUser(event);
  }

  return { error: "Invalid request method" };
});
