import jwt_decode from 'jwt-decode';

const checkAdminAuth = () => {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
        return false;
    }
    const decoded = jwt_decode(adminToken);
    if (Date.now() >= decoded.exp * 1000) {
        return false;
    } else {
        return true;
    }
};

export default checkAdminAuth;
