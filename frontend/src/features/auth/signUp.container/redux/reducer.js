/*
 *
 * SignUpUserPage reducer
 *
 */
import produce from 'immer';
import { SIGNUP_USER_REQUEST,SIGNUP_USER_SUCCESS,SIGNUP_USER_FAIL } from './constants';

export const initialState = {
  user:{},
  loading:false,
  error:'',
};

/* eslint-disable default-case, no-param-reassign */
const signUpUserPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    // console.log('error',action?.error);
    switch (action.type) {
      case SIGNUP_USER_REQUEST:
        return {
          loading:true
        }
      case SIGNUP_USER_SUCCESS:
        return {
          loading:false,
          user:action.user
        }
      case SIGNUP_USER_FAIL:
        return {
          loading:false,
          error:action.error
        }
    }
  });

export default signUpUserPageReducer;
