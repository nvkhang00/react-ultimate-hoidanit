import { Space, Table } from 'antd'
import UpdateUserModal from './user.update.modal';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
const UserTable = ({ dataTable, loadDataTable }) => {
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) =>
                <a href='#'>{record._id}</a>
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
                    <DeleteOutlined style={{ color: 'red', cursor: 'pointer', fontSize: '1.3em' }} />
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
        </>
    );
}

export default UserTable;