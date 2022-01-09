/*
 *
 * SignUpUserPage actions
 *
 */

import { SIGNUP_USER_REQUEST,SIGNUP_USER_SUCCESS,SIGNUP_USER_FAIL } from './constants';

export function signUpUserRequestAction(payload) {
  // console.log(payload);
  // console.log(payload.picture);
  return {
    type: SIGNUP_USER_REQUEST,
    payload
  };
}
export function signUpUserSuccessAction(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    user
  };
}
export function signUpUserFailAction(error) {
  return {
    type: SIGNUP_USER_FAIL,
    error
  };
}
