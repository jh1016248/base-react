import axios from 'axios';

let Http = function (){};
let host = 'http://localhost:3000';

Http.prototype = {
    login(userName, password) {
        return axios.post(host + '/api/user/login', {userName: userName, password: password})
    },
}

let http = new Http();
export default http;