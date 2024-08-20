import React from "react";
import { useAddCourseMutation } from "../Services/CoursesApi";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
export const AddCourse = () => {
  const [form] = useForm();
  const [addCourse, { isSuccess, isError }] = useAddCourseMutation();

  // HANDLING FORM SUBMISSION
  const SubmitForm = (values) => {
    const { name, description, duration, instructor } = values;
    const course = {
      name: name,
      description: description,
      duration: duration,
      instructor: instructor,
    };
    addCourse(course);
  };
  if (isSuccess) {
    form.resetFields();
    alert("Course Added");
  } else if (isError) {
    alert("Error Adding Course");
  }

  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-center items-center">
      <section className="form w-max h-[80%] flex flex-col gap-5 items-center justify-center bg-white p-10 shadow-lg">
        <h3 className="text-2xl font-semibold">Add New Course</h3>
        <Form
          form={form}
          name="course"
          style={{ width: 360 }}
          onFinish={SubmitForm}
        >
          <Form.Item
            id="name"
            name="name"
            rules={[{ required: true, message: "Please Enter Course Name" }]}
          >
            <Input placeholder="name" type="text" />
          </Form.Item>
          <Form.Item
            id="description"
            name="description"
            rules={[{ required: true, message: "Please Enter Description" }]}
          >
            <Input.TextArea placeholder="description" type="text" />
          </Form.Item>
          <Form.Item
            id="duration"
            name="duration"
            rules={[{ required: true, message: "Please Enter Duration" }]}
          >
            <Input placeholder="duration" type="text" />
          </Form.Item>
          <Form.Item
            id="instructor"
            name="instructor"
            rules={[
              { required: true, message: "Please Enter Instructor Name" },
            ]}
          >
            <Input placeholder="instructor" type="text" />
          </Form.Item>
          <Form.Item name="submit">
            <Button block type="primary" htmlType="submit">
              Add Course
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default AddCourse;
