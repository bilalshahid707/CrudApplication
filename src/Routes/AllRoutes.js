import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AllCourses,
  Login,
  Registration,
  AddNew,
  Edit,
  AdminLogin,
  PageNotFound,
} from "../imports";
import { useSelector } from "react-redux";
export const AllRoutes = () => {
  const userLogged = useSelector((state) => state.User.Logged);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/allcourses"
          element={userLogged ? <AllCourses /> : <Login />}
        />
        <Route path="/edit/:id" element={userLogged ? <Edit /> : <Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
