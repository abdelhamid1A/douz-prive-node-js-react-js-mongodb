/*
 *
 * ValidationAccountPage reducer
 *
 */
import produce from 'immer';
import { VALIDATE_ACCOUNT_REQUEST,VALIDATE_ACCOUNT_SUCCESS, VALIDATE_ACCOUNT_FAIL } from './constants';

export const initialState = {
  loading: false,
  error:'',
  user:''
};

/* eslint-disable default-case, no-param-reassign */
const validationAccountPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case VALIDATE_ACCOUNT_REQUEST:
        return {
          loading:true
        }
      case VALIDATE_ACCOUNT_SUCCESS:
        return {
          loading:false,
          user:action.user
        }
      case VALIDATE_ACCOUNT_FAIL:
        return {
          loading:false,
          error:action.error
        }
    }
  });

export default validationAccountPageReducer;
