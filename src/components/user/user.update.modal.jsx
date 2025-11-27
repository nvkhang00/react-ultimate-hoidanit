import { Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { updateUserAPI } from '../../services/api.service';
import { showToast } from '../../utils/toast';

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
            showToast.success('Update user successfully.');
            resetAndCloseModal();
            await loadDataTable();
        } else {
            showToast.error(response.message);
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