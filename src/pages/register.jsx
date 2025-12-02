import { Button, Col, Form, Input, Row, Space } from "antd";
import { registerAPI } from "../services/api.service";
import { showToast } from "../utils/toast";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async values => {
        if (values) {
            const { fullName, email, password, phone } = values;
            const response = await registerAPI(fullName, email, password, phone);
            if (response.data) {
                showToast.success('Register successfully.');
                navigate('/login');
            } else {
                showToast.error(response.message);
            }
        }
    };
    return (
        <div style={{ margin: '30px' }}>
            <Form
                layout='vertical'
                form={form}
                onFinish={onFinish}
                validateTrigger='onBlur'
                // onFinishFailed={onFinishFailed}
                autoComplete='off'
            >
                <Row justify={'center'}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label="Full Name:"
                            name="fullName"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: 'Please input full name.'
                                    }
                                ]
                            }
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label="Email:"
                            name="email"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: 'Please input email.'
                                    },
                                    {
                                        type: 'email',
                                        message: 'Not valid email'
                                    }
                                ]
                            }
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Col xs={24} md={8}>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            validateTrigger='onBlur'
                            label="Password:"
                            name="password"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: 'Please input password.'
                                    },
                                ]
                            }
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label="Phone Number:"
                            name="phone"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: 'Please input phone number.'
                                    },
                                    {
                                        pattern: /^\d+$/g,
                                        message: 'Wrong format!'
                                    }
                                ]
                            }
                            validateTrigger='onChange'
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Col xs={24} md={8}>
                        <div>
                            {/* <Space size={'middle'}> */}
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Register
                            </Button>
                            {/* <Button onClick={() => {
                            // get
                            // console.log('Check get only field:', form.getFieldValue('fullName'));
                            // console.log('Check get 1 or more fields:', form.getFieldsValue(['fullName', 'email']));
                            // console.log('Check get all fields:', form.getFieldsValue());
                            // form.setFieldValue('fullName', 'test set')
                            form.setFieldsValue({
                                fullName: 'test',
                                email: 'test@gmail.com  '
                            })
                        }}>
                            Test
                        </Button> */}
                            {/* </Space> */}
                        </div>
                    </Col>
                </Row>
            </Form >
        </div >
    );
}

export default RegisterPage;