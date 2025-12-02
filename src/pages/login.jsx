import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const onFinish = values => {
        console.log(values);
    };
    return (
        <Row justify={'center'} style={{ marginTop: '30px' }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: '15px',
                    margin: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '8px'

                }}>
                    <legend>Login</legend>
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                        validateTrigger='onBlur'
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your username!' },
                                {
                                    type: 'email',
                                    message: 'Wrong format email!'
                                }
                            ]}
                            validateTrigger={['onBlur', 'onChange']}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'

                        }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Link to={'/'}>Go to home page <ArrowRightOutlined /></Link>
                        </div>
                        <Divider />
                        <div style={{ textAlign: 'center' }}>
                            Do not have account? <Link to={'/register'}>Register here</Link>
                        </div>
                    </Form>
                </fieldset>
            </Col>
        </Row >
    );
}

export default LoginPage;