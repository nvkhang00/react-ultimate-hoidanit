import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
import { useState } from 'react';
const Header = () => {
    const location = useLocation();
    const value = location.pathname.replace('/', '') || 'home';
    const [current, setCurrent] = useState('home');
    if (current !== value) setCurrent(value);
    const onClick = e => {
        setCurrent(e.key);
    };
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
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
}

export default Header;