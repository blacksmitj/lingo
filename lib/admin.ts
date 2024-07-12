import { auth } from "@clerk/nextjs";

const adminIds = ["user_2fhBkUH45BSrWqtU1m6YJydk0Du"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
