import axios from "axios";
const url = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountry = (name) => {
    const request = axios.get(`${url}/${name}`)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(`${url}/all`)
    return request.then(response => response.data)
}

export default {getCountry, getAll};