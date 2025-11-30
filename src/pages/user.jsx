import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUser } from "../services/api.service";

const UserPage = () => {
    const [dataTable, setDataTable] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadDataTable();
    }, []);

    const loadDataTable = async () => {
        const response = await fetchAllUser(current, pageSize);
        if (response.data) {
            setCurrent(response.data.meta.current);
            setPageSize(response.data.meta.pageSize);
            setTotal(response.data.meta.total);
            setDataTable(response.data.result);
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <UserForm loadDataTable={loadDataTable} />
            <UserTable
                dataTable={dataTable}
                loadDataTable={loadDataTable}
                current={current}
                pageSize={pageSize}
                total={total}
            />
        </div>
    );
}

export default UserPage;