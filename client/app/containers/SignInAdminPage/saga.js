import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import {loginAdminSuccessAction,loginAdminFAilAction} from './actions'
import {LOGIN_ADMIN_REQUEST} from './constants'
import {API_URL,ADMIN} from '../../utils/constants'
import {saveDataToLocalStorage} from '../../utils/localStorage'


const loginAdminFromAPI = async(payload)=>{
  const {data} = await axios.post(API_URL+ADMIN+'signIn',payload)
  return data
}

function* fetchAdmin({payload}) {
  console.log(payload);
  try {
    const admin  = yield loginAdminFromAPI(payload)
    console.log(admin);
    yield put(loginAdminSuccessAction(admin))
    saveDataToLocalStorage('admin-token',admin.token)
  } catch (error) {
    yield put(loginAdminFAilAction(error.response.data.message))
    // console.log(error.response.data);
  }
}
// Individual exports for testing
export default function* signInAdminPageSaga() {
  yield takeEvery(LOGIN_ADMIN_REQUEST,fetchAdmin)
}
