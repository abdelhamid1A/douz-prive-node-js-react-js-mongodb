/*
 *
 * SignInPage reducer
 *
 */
import produce from 'immer';
import { SIGNIN_USER_REQUEST,SIGNIN_USER_SUCCESS,SIGNIN_USER_FAIL } from './constants';

export const initialState = {
  user:{},
  loading:false,
  error:'',
};

/* eslint-disable default-case, no-param-reassign */
const signInPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case SIGNIN_USER_REQUEST:
        return {
          loading:true
        }
      case SIGNIN_USER_SUCCESS:
        return {
          loading:false,
          user:action.user
        }
      case SIGNIN_USER_FAIL:
        return {
          loading:false,
          error:action.error
        }
    }
  });

export default signInPageReducer;
