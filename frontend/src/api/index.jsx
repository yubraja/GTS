import axios from "axios"
const baseURL = 'http://127.0.0.1:8000/api/'
const authToken = sessionStorage.getItem('token') || localStorage.getItem("token")

let headers = {
    "Content-Type" : "application/json"
}

if(authToken){
    headers ["Authorization"] = `Bearer${authToken}`
}

export const apiClient = axios.create({
    baseURL: `${baseURL}`,
    headers : {...headers}
})

export const login=async(data)=>{
    const res=await apiClient.post('/user/login',data)
    return res;
}
