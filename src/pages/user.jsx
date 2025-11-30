import { useCallback, useEffect, useRef, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUser } from "../services/api.service";

const UserPage = () => {
    const [dataTable, setDataTable] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const initialPageSize = useRef(pageSize);
    const [total, setTotal] = useState(0);

    const loadDataTable = useCallback(async () => {
        const response = await fetchAllUser(current, pageSize);
        if (response.data && response.data.result) {
            const result = response.data.result;
            setCurrent(result.length ? response.data.meta.current : (response.data.meta.current ? response.data.meta.current - 1 : 1));
            setPageSize(response.data.meta.pageSize);
            setTotal(response.data.meta.total);
            setDataTable(result);
        }
    }, [current, pageSize]);

    useEffect(() => {
        loadDataTable();
    }, [loadDataTable]);

    return (
        <div style={{ padding: '20px' }}>
            <UserForm loadDataTable={loadDataTable} />
            <UserTable
                dataTable={dataTable}
                loadDataTable={loadDataTable}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                initialPageSize={initialPageSize}
            />
        </div>
    );
}

export default UserPage;