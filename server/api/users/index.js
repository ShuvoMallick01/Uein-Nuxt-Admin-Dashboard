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

      const newUser = {
        id: users.length + 1,
        ...body,
        createdAt: new Date().toDateString(),
      };

      users.push(newUser);
      return users;
    } catch (error) {
      console.error("Error creating user:", error);
      return { error: "Failed to create user" };
    }
  }

  if (method === "GET") {
    return await getUsers();
  }

  if (method === "POST") {
    return await createUser(event);
  }

  return { error: "Invalid request method" };
});
