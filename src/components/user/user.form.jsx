import { Input, Button, Modal } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';
import { showToast } from '../../utils/toast';
const UserForm = ({ loadDataTable }) => {
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = async () => {
        const response = await createUserAPI(fullName, email, password, phone);
        if (response.data) {
            showToast.success('Create user successfully.');
            resetAndCloseModal();
            await loadDataTable();
        } else {
            showToast.error(response.message);
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
        <div className='user-form' style={{ margin: '10px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Table User</h3>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    type='primary' >
                    Create User
                </Button>
                <Modal
                    title="Create User"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleClick}
                    onCancel={resetAndCloseModal}
                    okText={'Create'}
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
            </div>
        </div>
    );
}

export default UserForm;