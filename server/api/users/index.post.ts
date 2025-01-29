import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
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
});
