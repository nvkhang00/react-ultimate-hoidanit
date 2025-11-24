import { Input, Button, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';
import toast from 'react-hot-toast';
const UserForm = () => {
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const handleClick = async () => {
        const response = await createUserAPI(fullName, email, password, phone);
        if (response.data) {
            toast.success('Create User Successfully.', {
                duration: 3000,
                position: 'top-right',
                style: {
                    minWidth: '250px'
                }
            })
        }
    }
    return (
        <div className='user-form' style={{ margin: '20px 0' }}>
            <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <Button
                        onClick={handleClick}
                        type='primary' >Create User</Button>
                </div>
            </div>
        </div>
    );
}

export default UserForm;