import { Input, Modal } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';
import toast from 'react-hot-toast';

const UpdateUserModal = () => {
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);
    const formatErrorMessage = (message) => {
        if (Array.isArray(message)) {
            return (
                <ul style={{ backgroundColor: 'white', listStyle: 'inherit', paddingLeft: '20px', marginTop: '-5px' }}>
                    {message.map((item, index) => (
                        <li key={`${item}-${index}`}>{item}</li>
                    ))}
                </ul>
            );
        }
        return message;
    };

    const handleClick = async () => {
        const response = await createUserAPI(fullName, email, password, phone);
        if (response.data) {
            toast.success('Create User Successfully.', {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between'
                }
            });
            resetAndCloseModal();
            // await loadDataTable();
        } else {
            toast.error(formatErrorMessage(response.message), {
                duration: 2000,
                position: 'top-right',
                style: {
                    maxWidth: '250px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }
            });
        }
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullname('');
        setEmail('');
        setPassword('');
        setPhone('');
    }

    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleClick}
            onCancel={resetAndCloseModal}
            okText={'Save'}
            maskClosable={false}
        >
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
            </div>
        </Modal>
    )
}

export default UpdateUserModal;