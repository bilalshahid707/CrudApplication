import React, { useState } from "react";
import {
  useUpdateCourseMutation,
  useGetCourseQuery,
} from "../Services/CoursesApi";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useParams } from "react-router-dom";

export const Edit = () => {
  const [form] = useForm();
  const { id } = useParams();
  let { data: course, isLoading } = useGetCourseQuery(id);
  const [updateCourse, { isSuccess }] = useUpdateCourseMutation();

  const [name, setName] = useState("");
  const [description, setDecription] = useState("");
  const [duration, setDuration] = useState("");
  const [instructor, setInstructor] = useState("");

  // HANDLING FORM SUBMISSION
  const handleSubmit = (values) => {
    updateCourse({
      id,
      name: name ? name : course.name,
      description: description ? description : course.description,
      duration: duration ? duration : course.duration,
      instructor: instructor ? instructor : course.instructor,
    });
  };
  if (isSuccess) {
    form.resetFields();
    alert("Course Updated");
  }

  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-center items-center">
      {isLoading ? (
        "Loading"
      ) : (
        <section className="form w-max h-[80%] flex flex-col gap-5 items-center justify-center bg-white p-10 shadow-lg">
          <h3 className="text-2xl font-semibold">Update Course</h3>
          <Form
            form={form}
            name="course"
            style={{ width: 360 }}
            onFinish={handleSubmit}
          >
            <Form.Item
              initialValue={course && course.name}
              id="name"
              name="name"
              rules={[{ required: true, message: "Please Enter Course Name" }]}
            >
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                type="text"
              />
            </Form.Item>
            <Form.Item
              initialValue={course && course.description}
              id="description"
              name="description"
              rules={[{ required: true, message: "Please Enter Description" }]}
            >
              <Input.TextArea
                onChange={(e) => setDecription(e.target.value)}
                placeholder="description"
                type="text"
              />
            </Form.Item>
            <Form.Item
              initialValue={course && course.duration}
              id="duration"
              name="duration"
              rules={[{ required: true, message: "Please Enter Duration" }]}
            >
              <Input
                onChange={(e) => setDuration(e.target.value)}
                placeholder="duration"
                type="text"
              />
            </Form.Item>
            <Form.Item
              initialValue={course && course.instructor}
              id="instructor"
              name="instructor"
              rules={[
                { required: true, message: "Please Enter Instructor Name" },
              ]}
            >
              <Input
                onChange={(e) => setInstructor(e.target.value)}
                placeholder="instructor"
                type="text"
              />
            </Form.Item>
            <Form.Item name="submit">
              <Button block type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </section>
      )}
    </div>
  );
};

export default Edit;
