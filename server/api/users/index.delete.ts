import { users } from "../../data/users";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { ids } = body;
  try {
    const filteredUsers = users.filter((user) => !ids.includes(user.id));
    return filteredUsers;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong. Unable to delete the item");
  }
});
