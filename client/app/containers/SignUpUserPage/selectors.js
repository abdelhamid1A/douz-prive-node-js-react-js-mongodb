import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUpUserPage state domain
 */

const selectSignUpUserPageDomain = state =>
  state.signUpUserPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUpUserPage
 */

const makeSelectSignUpUserPage = () =>
  createSelector(
    selectSignUpUserPageDomain,
    substate => substate,
  );

export default makeSelectSignUpUserPage;
export { selectSignUpUserPageDomain };
