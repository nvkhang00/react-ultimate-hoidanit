import { Drawer } from "antd";
import { useEffect, useState } from "react";

const UserDetail = (
    { detailUserData,
        open,
        onClose }
) => {
    const [selectedFile, setSelectedFile] = useState();
    const [imgPreview, setImgPreview] = useState();

    useEffect(() => {
        if (!selectedFile) {
            setImgPreview(undefined);
            return;
        }
        const url = URL.createObjectURL(selectedFile);
        setImgPreview(url);

        return () => {
            URL.revokeObjectURL(url);
        }
    }, [selectedFile])

    const handleOnChangImg = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(files[0]);
    }

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
                        <div style={{
                            width: '150px',
                            height: '100px',
                            border: '1px solid #ccc'
                        }}>
                            <img
                                src={`${import.meta.env.VITE_BASE_ULR}/images/avatar/${detailUserData.avatar}`}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    display: 'block',
                                    width: 'fit-content',
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
                            <input
                                onChange={handleOnChangImg}
                                type="file" id='btnUpload'
                                hidden
                            />
                        </div>
                        {imgPreview &&
                            <div style={{
                                width: '150px',
                                height: '100px',
                                border: '1px solid #ccc'
                            }}>
                                <img
                                    src={imgPreview}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        }
                    </>
                    :
                    <p>No Data</p>
                }
            </div>
        </Drawer>
    )
}

export default UserDetail;