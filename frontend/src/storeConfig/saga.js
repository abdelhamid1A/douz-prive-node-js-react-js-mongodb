import {all,fork} from 'redux-saga/effects';
// import singleUpload from './uploadRedux/saga'
import itemSagaWatcher from '../features/displayItemPage/redux/saga';
import userSagaWatcher from '../features/auth/signIn.container/redux/saga';
import userSignUpSagaWatcher from '../features/auth/signUp.container/redux/saga';

export default function* rootSaga () {
    yield all([
        fork(itemSagaWatcher),
        fork(userSagaWatcher),
        fork(userSignUpSagaWatcher),
    ]);
}