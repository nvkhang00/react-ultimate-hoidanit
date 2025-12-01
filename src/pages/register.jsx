import { Button, Form, Input } from "antd";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const onFinish = values => {
        console.log(values);
    };
    return (
        <div style={{ margin: '30px' }}>
            <Form
                layout='vertical'
                form={form}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete='off'
            >
                <Form.Item
                    label="Full Name:"
                    name="fullName"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email:"
                    name="email"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password:"
                    name="password"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone Number:"
                    name="phone"
                >
                    <Input />
                </Form.Item>
                <div>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default RegisterPage;