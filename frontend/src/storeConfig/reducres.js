import {combineReducers} from 'redux';
import itemReducers from '../features/displayItemPage/redux/reducer'

export default combineReducers({
    item:itemReducers
});