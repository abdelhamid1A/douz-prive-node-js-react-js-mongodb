import { take, call, put, select,takeEvery } from 'redux-saga/effects';
import axios from 'axios'
import {getItemsSuccessAction,getItemsFailAction} from './actions';
import {GET_ITEMS_REQUEST} from './constants';
import {MICROSERVICE_BASE_URL} from '../../../config/config.backend.server'


function getItemFromAPI({page, limit, paged,searchText,genre}) {
  // console.log(searchText,genre);
  // limit=3&page=1&pagination=true&type=&serachText=kawa
  return axios.get(
    `${MICROSERVICE_BASE_URL.VEHICULE}?limit=${
      limit || 5
    }&page=${page || 0}&pagination=${paged || true}&type=${genre||''}&searchText=${searchText||""}`,
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
