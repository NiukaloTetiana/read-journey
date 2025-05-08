export const statusesBook = {
  IN_PROGRESS: "in-progress",
  UNREAD: "unread",
  COMPLETED: "completed",
} as const;

export type statusesBook = keyof typeof statusesBook;
