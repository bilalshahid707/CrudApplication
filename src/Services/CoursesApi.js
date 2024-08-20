import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CoursesApi = createApi({
  reducerPath: "CoursesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Courses"],

  // COURSES ENDPOINTS
  endpoints: (build) => ({
    // ALL COURSES
    getCourses: build.query({
      query: () => ({ url: "/courses" }),
      providesTags: ["Courses"],
    }),

    // INDIVIDUAL COURSE
    getCourse: build.query({
      query: (id) => ({ url: `/courses/${id}` }),
      providesTags: ["Courses"],
    }),

    // ADD COURSE
    addCourse: build.mutation({
      query: (course) => ({
        url: `/courses`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      }),
      invalidatesTags: ["Courses"],
    }),

    // UPDATE COURSE
    updateCourse: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `/courses/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patch),
      }),
      invalidatesTags: ["Courses"],
    }),

    // DELETE COURSE
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),

    // NEW USER REGISTRATION ENDPOINT
    registerUser: build.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }),
    }),

    // USER LOGIN ENDPOINT
    loginUser: build.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }),
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useDeleteCourseMutation,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useGetCourseQuery,
} = CoursesApi;
export default CoursesApi;
