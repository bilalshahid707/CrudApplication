import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLoginUserMutation } from "../Services/CoursesApi";
import { logUser, logAdmin } from "../Services/UserAuth";

export const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // FORM SUBMISSION
  const SubmitForm = async () => {
    const user = {
      email: form.getFieldValue([["email"]]),
      password: form.getFieldValue([["password"]]),
    };
    const result = await loginUser(user);
    if (result.data) {
      dispatch(logUser(true));
      navigate("/allcourses");
      if (result.data.user.admin) {
        dispatch(logAdmin(true));
      } else {
        dispatch(logAdmin(false));
      }
    } else {
      alert(result.error.data);
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-center items-center">
      <section className="form w-max h-[80%] flex flex-col gap-5 items-center justify-center bg-white p-10 shadow-lg">
        <h3 className="text-2xl font-semibold">Welcome</h3>
        <Form
          name="login"
          style={{ width: 360 }}
          onFinish={SubmitForm}
          form={form}
        >
          <Form.Item
            id="email"
            name="email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="email" type="email" />
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
              Log in
            </Button>
          </Form.Item>
          <span>or </span>
          <Link className="text-sm text-blue-600 " to="/register">
            Register Now
          </Link>
        </Form>
      </section>
    </div>
  );
};

export default Login;
