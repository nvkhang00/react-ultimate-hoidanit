import { Table } from 'antd'
const UserTable = ({ dataTable }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
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
    ];
    return (
        <Table columns={columns} dataSource={dataTable} rowKey={'_id'} />
    );
}

export default UserTable;