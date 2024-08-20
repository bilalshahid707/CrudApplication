import React from "react";
import { CourseCard } from "../imports";
import { useGetCoursesQuery } from "../Services/CoursesApi";
export const AllCourses = () => {
  const { data: courses } = useGetCoursesQuery();

  return (
    <section>
      <h3 className="text-center text-3xl mt-5">All Courses</h3>
      <div className="max-w-7xl p-20 flex gap-5 flex-wrap mx-auto justify-center items-stretch">
        {courses &&
          courses.map((course) => (
            <CourseCard
              key={course.id}
              name={course.name}
              description={course.description}
              duration={course.duration}
              instructor={course.instructor}
              id={course.id}
            />
          ))}
      </div>
    </section>
  );
};

export default AllCourses;
