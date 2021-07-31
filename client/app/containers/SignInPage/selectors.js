import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signInPage state domain
 */

const selectSignInPageDomain = state => state.signInPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignInPage
 */

const makeSelectSignInPage = () =>
  createSelector(
    selectSignInPageDomain,
    substate => substate,
  );
const makeSelectSignInPageError = 
  createSelector(
    selectSignInPageDomain,
    substate => substate.error,
  );
const makeSelectSignInPageUser = 
  createSelector(
    selectSignInPageDomain,
    substate => substate.user,
  );
const makeSelectSignInPageLoading = 
  createSelector(
    selectSignInPageDomain,
    substate => substate.loading,
  );

export default makeSelectSignInPage;
export { selectSignInPageDomain,makeSelectSignInPageUser,makeSelectSignInPageError,makeSelectSignInPageLoading };
