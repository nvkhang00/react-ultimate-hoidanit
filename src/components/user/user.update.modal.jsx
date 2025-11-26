import { Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { updateUserAPI } from '../../services/api.service';
import toast from 'react-hot-toast';

const UpdateUserModal = ({ isModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
    loadDataTable }) => {
    const [id, setId] = useState('')
    const [fullName, setFullname] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        fillDataUpdate();
    }, [dataUpdate]);

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

    const fillDataUpdate = () => {
        if (dataUpdate) {
            const { _id, fullName, phone } = dataUpdate;
            setId(_id);
            setFullname(fullName);
            setPhone(phone);
        }
    }

    const handleClick = async () => {
        const response = await updateUserAPI(id, fullName, phone);
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
            await loadDataTable();
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
        setIsModalUpdateOpen(false);
        setId('');
        setFullname('');
        setPhone('');
        setDataUpdate(null);
    }

    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={handleClick}
            onCancel={resetAndCloseModal}
            okText={'Save'}
            maskClosable={false}
        >
            <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                <div>
                    <span>ID</span>
                    <Input
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        disabled={true}
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
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