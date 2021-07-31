/*
 *
 * SignInPage actions
 *
 */

import { SIGNIN_USER_REQUEST,SIGNIN_USER_SUCCESS,SIGNIN_USER_FAIL } from './constants';

export function signInUserRequestAction(payload) {
  return {
    type: SIGNIN_USER_REQUEST,
    payload
  };
}
export function signInUserSuccessAction(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    user
  };
}
export function signInUserFAilAction(error) {
  return {
    type: SIGNIN_USER_FAIL,
    error
  };
}
