import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const newUser = {
      id: users.length + 1,
      ...body,
      createdAt: new Date().toDateString(),
    };
    console.log("New User:", newUser);
    users.push(newUser);

    return { success: true, data: newUser };
  } catch (error) {
    console.error("Error creating user:", error);
    return sendError(event, error as Error);
  }
});
