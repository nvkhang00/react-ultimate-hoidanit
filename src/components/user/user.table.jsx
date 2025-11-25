import { Table } from 'antd';
import { useState } from 'react';
import { fetchAllUser } from '../../services/api.service';
const UserTable = () => {
    const [dataTable, setDataTable] = useState([
    ]);
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

    const loadDataTable = async () => {
        const response = await fetchAllUser();
        // setDataTable(response.data)
    }

    loadDataTable();
    console.log('run')
    return (
        <Table columns={columns} dataSource={dataTable} rowKey={'_id'} />
    );
}

export default UserTable;