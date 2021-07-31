import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import {signUpUserSuccessAction,signUpUserFailAction} from './actions'
import {SIGNUP_USER_REQUEST} from './constants'
import {API_URL,USER} from '../../utils/constants'

const signUpUserFromApi = async(payload)=>{
  const {data} = await axios.post(API_URL+USER+'signup',payload)
  return data
}

function* fetchUser({payload}) {
  try {
    const user  = yield call(signUpUserFromApi(payload))
    console.log(user);
    yield put(signUpUserSuccessAction(user))
  } catch (error) {
    yield put(signUpUserFailAction(error))
  }
}


// Individual exports for testing
export default function* signUpUserPageSaga() {
  yield takeEvery(SIGNUP_USER_REQUEST,fetchUser)
}
