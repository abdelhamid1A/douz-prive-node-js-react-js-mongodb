import { take, call, put, select,takeEvery } from 'redux-saga/effects';
import axios from 'axios'
import {getItemsSuccessAction,getItemsFailAction} from './actions';
import {GET_ITEMS_REQUEST} from './constants';
import {MICROSERVICE_BASE_URL} from '../../../config/config.backend.server'

// const loginAdminFromAPI = async(payload)=>{
//   const {data} = await axios.post(API_URL+VEHICULE+'signIn',payload)
//   return data
// }
function getItemFromAPI({page, limit, paged,txt,genre}) {
  // console.log(txt,genre);
  return axios.get(
    `${MICROSERVICE_BASE_URL.VEHICULE}?page=${page || 0}&limit=${
      limit || 5
    }&paged=${paged || false}&searchText=${txt||""}&type=${genre||''}`,
  );
}

function* getItems (payload){
  console.log(payload);
  try {
    const {data}  = yield getItemFromAPI(payload)
    // console.log(data);
    yield put(getItemsSuccessAction(data))
  } catch (error) {
    yield put(getItemsFailAction(error))
    // console.log(error.response.data);
  }
}
// Individual exports for testing
export default function* displayItemPageSaga() {
  yield takeEvery(GET_ITEMS_REQUEST,getItems)
}
