import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  try {
    return users;
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "Failed to get users" };
  }
});
