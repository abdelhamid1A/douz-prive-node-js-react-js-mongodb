import { MICROSERVICE_BASE_URL } from '../../../../config/config.backend.server';
import axios from 'axios';

export const signInUserFromApi = async (payload) => {
    const { data } = await axios.post(`${MICROSERVICE_BASE_URL.USER}signin`, payload)
    return data
}