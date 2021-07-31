/*
 *
 * ValidationAccountPage actions
 *
 */

import { VALIDATE_ACCOUNT_REQUEST,VALIDATE_ACCOUNT_SUCCESS, VALIDATE_ACCOUNT_FAIL } from './constants';

export function validationAccountRequestAction(token) {
  // console.log(token);
  return {
    type: VALIDATE_ACCOUNT_REQUEST,
    token
  };
}
export function validationAccountSuccessAction(user) {
  return {
    type: VALIDATE_ACCOUNT_SUCCESS,
    user
  };
}
export function validationAccountFailAction(error) {
  return {
    type: VALIDATE_ACCOUNT_FAIL,
    error
  };
}
