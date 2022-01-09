import { takeEvery, put } from 'redux-saga/effects';
import {signUpUserSuccessAction,signUpUserFailAction} from './actions'
import {SIGNUP_USER_REQUEST} from './constants'
import {signUpUserFromApi} from '../services/serverApi.service'
import {saveDataToLocalStorage} from '../../../../helper/local.storage.helper'



// const signUpUserFromApi = async(payload)=>{
//   const {data} = await axios.post(API_URL+USER+'signup',payload)
//   return data
// }

function* fetchUser({payload}) {
  try {
    const {data}  = yield signUpUserFromApi(payload)
    console.log('data',data);
    saveDataToLocalStorage('token',data?.user?.token)
    yield put(signUpUserSuccessAction(data))
  } catch (error) {
    console.log(error.response.data.message);
    yield put(signUpUserFailAction(error.response.data.message))
  }
}


// Individual exports for testing
export default function* signUpUserPageSaga() {
  yield takeEvery(SIGNUP_USER_REQUEST,fetchUser)
}
