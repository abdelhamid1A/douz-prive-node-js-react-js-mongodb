import {combineReducers} from 'redux';
import itemReducers from '../features/displayItemPage/redux/reducer'
import userReducers from '../features/auth/signIn.container/redux/reducer'
import userSignUpReducers from '../features/auth/signUp.container/redux/reducer'

export default combineReducers({
    item:itemReducers,
    user:userReducers,
    signUp:userSignUpReducers,
});