import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import {validationAccountSuccessAction,validationAccountFailAction} from './actions'
import {VALIDATE_ACCOUNT_REQUEST} from './constants'
import {API_URL,USER} from '../../utils/constants'
import axios from 'axios'
import {saveDataToLocalStorage} from '../../utils/localStorage'

const validateUserFromApi = async(token)=>{
  console.log(token);
  const {data} = await axios.get(API_URL+USER+'validation/'+token)
  return data
}
function* fetchUser({token}) {
  console.log(token);
  try {
    const user  = yield validateUserFromApi(token)
    console.log(user);
    yield put(validationAccountSuccessAction(user))
  } catch (error) {
    yield put(validationAccountFailAction(error))
  }
}
// Individual exports for testing
export default function* validationAccountPageSaga() {
  yield takeLatest(VALIDATE_ACCOUNT_REQUEST,fetchUser)
}
