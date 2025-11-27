import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
const Header = () => {
    const { pathname } = useLocation();
    const current = pathname.replace('/', '') || 'home';

    const items = [
        {
            label: <Link to={'/'}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={'/users'}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={'/books'}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },
    ];
    return (
        <Menu
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
}

export default Header;