import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <Result
            status="403"
            title="Oops!"
            subTitle={error.statusText || error.message}
            extra={
                <Button type="primary">
                    <Link to='/'><span>Back to Homepage</span></Link>
                </Button>
            }
        />
    );
}

export default ErrorPage;
