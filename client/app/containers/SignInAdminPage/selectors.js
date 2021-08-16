import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signInAdminPage state domain
 */

const selectSignInAdminPageDomain = state =>
  state.signInAdminPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignInAdminPage
 */

const makeSelectSignInAdminPage = () =>
  createSelector(
    selectSignInAdminPageDomain,
    substate => substate,
  );
const makeSelectLogingAdmin =
  createSelector(
    selectSignInAdminPageDomain,
    substate => substate.admin,
  );
const makeSelectLogingAdminLoading =
  createSelector(
    selectSignInAdminPageDomain,
    substate => substate.loading,
  );
const makeSelectLogingAdminError =
  createSelector(
    selectSignInAdminPageDomain,
    substate => substate.error,
  );

export default makeSelectSignInAdminPage;
export { selectSignInAdminPageDomain,makeSelectLogingAdmin,makeSelectLogingAdminLoading,makeSelectLogingAdminError };
