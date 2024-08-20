import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
export const AdminLogin = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-center items-center">
      <section className="form w-max h-[80%] flex flex-col gap-5 items-center justify-center bg-white p-10 shadow-lg">
        <h3 className="text-2xl font-semibold">Admin Panel</h3>
        <Form name="login" style={{ width: 360 }} onFinish="">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input prefix={<LockOutlined />} placeholder="password" />
          </Form.Item>
          <Form.Item name="submit">
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default AdminLogin;
