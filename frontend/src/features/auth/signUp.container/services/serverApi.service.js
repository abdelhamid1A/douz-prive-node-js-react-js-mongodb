import axios from 'axios'
import { MICROSERVICE_BASE_URL } from '../../../../config/config.backend.server';


export const signUpUserFromApi = async(payload)=>{
  const data = await axios.post(`${MICROSERVICE_BASE_URL.USER}signup`,payload);
  // console.log('axios datas',data);
  return data
}