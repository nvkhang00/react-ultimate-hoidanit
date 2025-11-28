import { Drawer } from "antd";

const UserDetail = (
    { detailUserData,
        open,
        onClose }
) => {
    return (
        <Drawer
            width={'40vw'}
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
                        <p>Avatar:</p>
                        <div style={{ width: '300px', height: '250px' }}>
                            <img
                                src={`${import.meta.env.VITE_BASE_ULR}/images/avatar/${detailUserData.avatar}`}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    display: 'block',
                                    width: 'fit-content',
                                    height: '30px',
                                    backgroundColor: 'orange',
                                    padding: '8px 15px',
                                    marginTop: '10px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                }}
                                htmlFor='btnUpload'
                            >
                                Upload Avatar
                            </label>
                            <input type="file" id='btnUpload' hidden />
                        </div>
                    </>
                    :
                    <p>No Data</p>
                }
            </div>
        </Drawer>
    )
}

export default UserDetail;