import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("user/remove", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  //DEV ONLY
  await pause(1000);

  // Fixed !!!
  return user;
});

//DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { removeUser };
