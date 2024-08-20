import { configureStore } from "@reduxjs/toolkit";
import { CoursesApi } from "../Services/CoursesApi";
import { UserAuth } from "../Services/UserAuth";
export const store = configureStore({
  reducer: {
    [CoursesApi.reducerPath]: CoursesApi.reducer,
    User: UserAuth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CoursesApi.middleware),
});

export default store;
