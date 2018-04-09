import axios from 'axios';
let host = 'http://localhost:3000';

const login = (userName, password) => {
    return axios.post(host + '/api/user/login', {userName: userName, password: password})
}

export {
    login,
}
