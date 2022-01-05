/*
 *
 * DisplayItemPage actions
 *
 */

import { GET_ITEMS_REQUEST,GET_ITEMS_SUCCESS,GET_ITEMS_FAIL } from './constants';

export function getItemsRquestAction(page,limit,searchText,type) {
  return {
    type: GET_ITEMS_REQUEST,
    page,
    limit,
    searchText,
    genre:type
  };
}
export function getItemsSuccessAction(items) {
  return {
    type: GET_ITEMS_SUCCESS,
    items
  };
}
export function getItemsFailAction(error) {
  return {
    type: GET_ITEMS_FAIL,
    error
  };
}
