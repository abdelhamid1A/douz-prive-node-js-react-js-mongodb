import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import {signInUserSuccessAction,signInUserFAilAction} from './actions'
import {SIGNIN_USER_REQUEST} from './constants'
import {API_URL,USER} from '../../utils/constants'
import {saveDataToLocalStorage} from '../../utils/localStorage'

const signInUserFromApi = async(payload)=>{
  const {data} = await axios.post(API_URL+USER+'signin',payload)
  return data
}

function* fetchUser({payload}) {
  try {
    const user  = yield signInUserFromApi(payload)
    yield put(signInUserSuccessAction(user))
    saveDataToLocalStorage('token',user.token)
  } catch (error) {
    yield put(signInUserFAilAction(error.response.data.message))
    // console.log(error.response.data);
  }
}

export default function* signInPageSaga() {
  yield takeEvery(SIGNIN_USER_REQUEST,fetchUser)
}
