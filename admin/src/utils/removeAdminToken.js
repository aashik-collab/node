const removeAdminToken = () => {
    localStorage.removeItem('adminToken');
    return;
};

export default removeAdminToken;
