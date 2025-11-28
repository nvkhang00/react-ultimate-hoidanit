import { Popconfirm, Space, Table } from 'antd'
import UpdateUserModal from './user.update.modal';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
import UserDetail from './user.view.detail';
import { deleteUserAPI } from '../../services/api.service';
import { showToast } from '../../utils/toast';
const UserTable = ({ dataTable, loadDataTable }) => {
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [open, setOpen] = useState(false);
    const [detailUserData, setDetailUserData] = useState(null);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        setDetailUserData(null);
    };
    const handleDelete = async (id) => {
        const response = await deleteUserAPI(id);
        if (response.data) {
            showToast.success('Delete user successfully.');
            await loadDataTable();
        } else {
            showToast.error(response.message);
        }
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) =>
                <a onClick={() => {
                    showDrawer();
                    setDetailUserData(record)
                }}>
                    {record._id}
                </a>
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) =>
                <Space size={'middle'}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{ color: 'orange', cursor: 'pointer', fontSize: '1.3em' }}
                    />
                    <Popconfirm
                        title="Delete user"
                        description="Are you sure to delete this user?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined style={{ color: 'red', cursor: 'pointer', fontSize: '1.3em' }} />
                    </Popconfirm>
                </Space>
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataTable} rowKey={'_id'} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadDataTable={loadDataTable}
            />
            <UserDetail
                detailUserData={detailUserData}
                open={open}
                onClose={onClose}
            />
        </>
    );
}

export default UserTable;