import { Drawer } from "antd";

const UserDetail = (
    { detailUserData,
        open,
        onClose }
) => {
    return (
        <Drawer
            title="User Detail"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={open}
        >
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', fontSize: '15px' }}>
                {detailUserData ?
                    <>
                        <p>Id: {detailUserData._id}</p>
                        <p>Full name: {detailUserData.fullName}</p>
                        <p>Email: {detailUserData.email}</p>
                        <p>Phone number: {detailUserData.phone}</p>
                    </>
                    :
                    <p>No Data</p>
                }
            </div>
        </Drawer>
    )
}

export default UserDetail;