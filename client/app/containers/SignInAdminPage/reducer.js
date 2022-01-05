/*
 *
 * SignInAdminPage reducer
 *
 */
import produce from 'immer';
import {LOGIN_ADMIN_REQUEST,LOGIN_ADMIN_SUCCESS,LOGIN_ADMIN_FAIL } from './constants';

export const initialState = {
  admin:{},
  loading: false,
  error:""
};

/* eslint-disable default-case, no-param-reassign */
const signInAdminPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    // console.log(action);
    switch (action.type) {
      case LOGIN_ADMIN_REQUEST:
        return {
          loading :true,
        }
      case LOGIN_ADMIN_SUCCESS:
        return {
          loading:false,
          admin:action.user.token
        }
      case LOGIN_ADMIN_FAIL:
        return {
          loading:false,
          error:action.error
        }  
    }
    
  });

export default signInAdminPageReducer;
