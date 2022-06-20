import axios from 'axios';


const URL = 'http://localhost:8001';


export const getNews = async(page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}

export const publicRequest = async(user) => {
    try {
        // const { name, email, phone, password, cpassword } = user;
        return await axios.post(`${URL}/signin`, user);
        // console.log(res)
    } catch (error) {
        console.log('Error while calling usersignup API ', error)
    }
}

export const usersignup = async(user) => {
    try {
        // const { name, email, phone, password, cpassword } = user;
        await axios.post(`${URL}/signup`, user);
        // console.log(res)
    } catch (error) {
        console.log('Error while calling usersignup API ', error)
    }
}

export const usersignin = async(user) => {
    // const { email, password } = user;
    try {
        return await axios.post(`${URL}/signin`, user);
    } catch (error) {
        console.log('Error while calling usersignin API ', error)
    }
}