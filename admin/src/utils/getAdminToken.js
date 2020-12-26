const getAdminToken = () => {
    const adminToken = localStorage.getItem('adminToken');
    return adminToken;
};

export default getAdminToken;
