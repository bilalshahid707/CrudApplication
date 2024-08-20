import React from "react";

import { useForm } from "antd/es/form/Form";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { logUser } from "../Services/UserAuth";
import { useRegisterUserMutation } from "../Services/CoursesApi";

import { useDispatch } from "react-redux";

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registeruser] = useRegisterUserMutation();
  const [form] = useForm();

  // FORM SUBMISSION
  const SubmitForm = async () => {
    const user = {
      email: form.getFieldValue([["email"]]),
      password: form.getFieldValue([["password"]]),
      admin: false,
    };
    const result = await registeruser(user);
    if (result.data) {
      dispatch(logUser(true));
      navigate("/allcourses");
    } else {
      alert(result.error.data);
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-center items-center">
      <section className="form w-max h-[80%] flex flex-col gap-5 items-center justify-center bg-white p-10 shadow-lg">
        <h3 className="text-2xl font-semibold">Register Now</h3>
        <Form
          form={form}
          name="register"
          style={{ width: 360 }}
          onFinish={SubmitForm}
        >
          <Form.Item
            id="email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="email" type="email" />
          </Form.Item>
          <Form.Item
            id="password"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              placeholder="password"
              type="password"
            />
          </Form.Item>
          <Form.Item name="submit">
            <Button block type="primary" htmlType="submit">
              Register Now
            </Button>
          </Form.Item>
          <span>or </span>
          <Link className="text-sm text-blue-600 " to="/">
            Login
          </Link>
        </Form>
      </section>
    </div>
  );
};

export default Registration;
