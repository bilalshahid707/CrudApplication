import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logUser, logAdmin } from "../Services/UserAuth";
export const Header = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.User.Admin);
  const logged = useSelector((state) => state.User.Logged);
  const LogOut = () => {
    dispatch(logAdmin(false));
    dispatch(logUser(false));
  };

  return (
    <header className="h-16 bg-blue-600 flex items-center justify-end px-5">
      <ul className="nav-items flex gap-4">
        {admin ? (
          <>
            <NavLink to="/add">
              <Button type="default">Create Course</Button>
            </NavLink>
            <NavLink to="/allcourses">
              <Button type="default">View Courses</Button>
            </NavLink>
          </>
        ) : (
          ""
        )}
        {logged ? (
          <NavLink onClick={LogOut} to="/">
            <Button type="default">Log Out</Button>
          </NavLink>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
};

export default Header;
