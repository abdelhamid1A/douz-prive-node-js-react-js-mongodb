/*
 *
 * SignInAdminPage actions
 *
 */

import {LOGIN_ADMIN_REQUEST,LOGIN_ADMIN_SUCCESS,LOGIN_ADMIN_FAIL } from './constants';

export function loginAdminRequestAction(payload) {
  return {
    type: LOGIN_ADMIN_REQUEST,
    payload
  };
}
export function loginAdminSuccessAction(user) {
  return {
    type: LOGIN_ADMIN_SUCCESS,
    user
  };
}
export function loginAdminFAilAction(error) {
  return {
    type: LOGIN_ADMIN_FAIL,
    error
  };
}
