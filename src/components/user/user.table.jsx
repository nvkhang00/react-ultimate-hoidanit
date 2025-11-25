import { Space, Table } from 'antd'
import UpdateUserModal from './user.update.modal';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const UserTable = ({ dataTable }) => {
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
            render: () =>
                <Space size={'middle'}>
                    <EditOutlined style={{ color: 'orange', cursor: 'pointer', fontSize: '1.3em' }} />
                    <DeleteOutlined style={{ color: 'red', cursor: 'pointer', fontSize: '1.3em' }} />
                </Space>
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataTable} rowKey={'_id'} />
            <UpdateUserModal />
        </>
    );
}

export default UserTable;