/*
 *
 * DisplayItemPage reducer
 *
 */
import produce from 'immer';
import { GET_ITEMS_REQUEST,GET_ITEMS_SUCCESS,GET_ITEMS_FAIL } from './constants';

export const initialState = {
  loading: false,
  items:[],
  error: '',
  total:0
};

/* eslint-disable default-case, no-param-reassign */
const displayItemPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case GET_ITEMS_REQUEST:
        return {
          loading: true,
        }
      case GET_ITEMS_SUCCESS:
        return {
          items: action.items,
          loading: false,
          total:action.items.totalPages
        }
      case GET_ITEMS_FAIL:
        return {
          loading: false,
          error: action.error,
        }
    }
  });

export default displayItemPageReducer;
