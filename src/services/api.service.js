import axios from "./axios.customize";
const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = { fullName, email, password, phone };
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = (_id, fullName, phone, avatar) => {
    const URL_BACKEND = '/api/v1/user';
    const data = { _id, fullName, phone, ...(avatar && { avatar }) };
    return axios.put(URL_BACKEND, data);
}

const fetchAllUser = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND);
}

const deleteUserAPI = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`;
    return axios.delete(URL_BACKEND);
}

const uploadAvatarAPI = (fileImg) => {
    const URL_BACKEND = '/api/v1/file/upload'
    const config = {
        headers: {
            'upload-type': 'avatar',
            'Content-Type': 'multipart/form-data'
        }
    }
    const formData = new FormData();
    formData.append('fileImg', fileImg);
    return axios.post(URL_BACKEND, formData, config);
}

export {
    createUserAPI,
    updateUserAPI,
    fetchAllUser,
    deleteUserAPI,
    uploadAvatarAPI
}