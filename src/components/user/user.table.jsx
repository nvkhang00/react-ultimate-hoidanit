import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../../services/api.service';
const UserTable = () => {
    const [dataTable, setDataTable] = useState([
    ]);

    useEffect(() => {
        console.log('>>>>Run 1');
        loadDataTable();
    }, [])
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
        setDataTable(response.data)
    }

    console.log('>>>>Run 0');
    return (
        <Table columns={columns} dataSource={dataTable} rowKey={'_id'} />
    );
}

export default UserTable;