import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);

  if (method === "GET") {
    const query = getQuery(event);

    if (query && query.id) {
      // Fetch User by ID
      const user = users.find((user) => user.id === parseInt(query.id));
      if (!user) return { error: "User not found" };
      return user;
    }

    // Return all users
    return users;
  }

  if (method === "POST") {
    const body = await readBody(event);
    const newUser = {
      id: users.length + 1,
      ...body,
      createAt: new Data().toDateString(),
    };
    users.push(newUser);
    return { user: newUser };
  }

  return { error: "Invalid request method" };
});
