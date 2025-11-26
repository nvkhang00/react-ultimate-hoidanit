import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUser } from "../services/api.service";

const UserPage = () => {
    const [dataTable, setDataTable] = useState([
    ]);

    useEffect(() => {
        loadDataTable();
    }, []);

    const loadDataTable = async () => {
        const response = await fetchAllUser();
        setDataTable(response.data)
    }

    return (
        <div style={{ padding: '20px' }}>
            <UserForm loadDataTable={loadDataTable} />
            <UserTable
                dataTable={dataTable}
                loadDataTable={loadDataTable}
            />
        </div>
    );
}

export default UserPage;