import React, { useEffect } from 'react'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import './index.less'
import { Card, Form, Input, Button, Space } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login: React.FunctionComponent<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const onFinish = (values: any) => {
    logging.info(values)
  }

  return (
    <div className="login">
      <div className="login-card">
        <Card
          title="登录"
          style={{width: 444}}
          bordered={false}
        >
          <Form
            name="normal_login"
            initialValues={{remember: true}}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{required: true, message: '请输入用户名!'}]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{required: true, message: '请输入密码!'}]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </Button>
                <Button
                  htmlType="reset"
                >
                  重置
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Login