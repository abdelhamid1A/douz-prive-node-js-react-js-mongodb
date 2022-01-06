import {all,fork} from 'redux-saga/effects';
// import singleUpload from './uploadRedux/saga'
import itemSagaWatcher from '../features/displayItemPage/redux/saga';

export default function* rootSaga () {
    yield all([
        fork(itemSagaWatcher),
    ]);
}