import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  try {
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retrieve users",
      data: { success: false, error: "Failed to retrieve users." },
    });
  }
});
