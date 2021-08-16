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
const makeSelectSignUpUserPageUser =
  createSelector(
    selectSignUpUserPageDomain,
    substate => substate.user,
  );
const makeSelectSignUpUserPageError =
  createSelector(
    selectSignUpUserPageDomain,
    substate => substate.error,
  );
const makeSelectSignUpUserPageLoading = 
  createSelector(
    selectSignUpUserPageDomain,
    substate => substate.loading,
  );

export default makeSelectSignUpUserPage;
export { selectSignUpUserPageDomain,makeSelectSignUpUserPageUser,makeSelectSignUpUserPageError,makeSelectSignUpUserPageLoading };
