import jwt_decode from 'jwt-decode';

const checkIfAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    const decoded = jwt_decode(token);
    // this means token is expired, so user is not authenticated
    if (Date.now() >= decoded.exp * 1000) {
        return false;
    }
    return true;
};

export default checkIfAuthenticated;
