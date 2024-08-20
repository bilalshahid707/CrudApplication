import React from "react";
import { useDeleteCourseMutation } from "../Services/CoursesApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const CourseCard = ({ name, description, duration, instructor, id }) => {
  const admin = useSelector((state) => state.User.Admin);
  const [deleteCourse] = useDeleteCourseMutation();
  const handleClick = (id) => {
    deleteCourse(id);
  };

  return (
    <div className="max-w-xs w-full text-white flex flex-col gap-3 p-5 bg-blue-600 shadow-lg">
      <h3 className="font-bold text-xl">{name}</h3>
      <p>{description}</p>
      <span>Duration: {duration}</span>
      <span>Intructor: {instructor}</span>
      <div className="flex gap-3">
        {admin ? (
          <>
            <i
              onClick={() => {
                handleClick(id);
              }}
              className="bi bi-trash text-white cursor-pointer"
            ></i>
            <Link to={`/edit/${id}`}>
              <i className="bi bi-pencil-square text-white cursor-pointer"></i>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CourseCard;
