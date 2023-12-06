import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/UsersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./thunks/fetchUsers.js";
export * from "./thunks/addUser.js";
export * from "./thunks/removeUser.js";
