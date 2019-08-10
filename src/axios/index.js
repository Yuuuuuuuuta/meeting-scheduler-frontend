import Axios from 'axios'

const api = Axios.create({
    baseURL : "" ,
    headers: {
        'content-Type' : 'application/json',
        'X-Requested-with' : 'XMLHttpRequest'
    },
    proxy : false,
    responseType : 'json',
    withCredentials : true
})

export default api