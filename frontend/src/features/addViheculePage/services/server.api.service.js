import { MICROSERVICE_BASE_URL } from '../../../config/config.backend.server';
import axios from 'axios';

export const addItem = async (payload,token) => {
    console.log('daa',payload);
    const { data } = await axios.post(`${MICROSERVICE_BASE_URL.VEHICULE}`, payload,{headers: {'authorization': token}})
    return data
}