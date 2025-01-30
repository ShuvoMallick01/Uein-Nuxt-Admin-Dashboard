import { statuses } from "../../data/users";

export default defineEventHandler((event) => {
  try {
    return statuses;
  } catch (error) {
    return sendError(event, error as Error);
  }
});
