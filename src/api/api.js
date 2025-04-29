import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})



export const loginUser = async (data) => {
    return await api.post('/user/login', data, { withCredentials: true });
}


export const createProject = async (data) => {
    try {
        const response = await api.post('/project', data, { withCredentials: true });
        return response.data.project;
    }
    catch (err) {
        console.log(err.message);
    }
};


export const getProject = async (data) => {
    try {
        const response = await api.get('/project', { withCredentials: true });
        return response.data.projects;
    }
    catch (err) {
        console.log(err.message);
    }
};


export const getFiles = async (id) => {
    try {
        const response = await api.get(`/file/project/${id}`, { withCredentials: true });
        return response.data.projects;
    }
    catch (err) {
        console.log(err.message);
    }
};


export const getsingleFile = async (id) => {
    console.log('function called');

    try {
        const response = await api.get(`/file/${id}`, { withCredentials: true });
        return response.data.file;
    }
    catch (err) {
        console.log(err.message);
    }
};


export const saveEdit = async (id, transcript) => {
    try {
        await api.patch(`/file/${id}`, { transcript }, { withCredentials: true });
    }
    catch (err) {
        console.log(err.message);
    }
};


export const deletefile = async (id) => {    
    try {
      const  response =  await api.delete(`/file/${id}`, { withCredentials: true });
      toast.success(response.data.message)
    }
    catch (err) {
        console.log(err.message);
    }
};


