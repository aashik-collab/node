function saveAdminToken(token) {
    localStorage.setItem('adminToken', token);
    return;
}

export default saveAdminToken;
