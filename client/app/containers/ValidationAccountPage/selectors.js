import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the validationAccountPage state domain
 */

const selectValidationAccountPageDomain = state =>
  state.validationAccountPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ValidationAccountPage
 */

const makeSelectValidationAccountPage = () =>
  createSelector(
    selectValidationAccountPageDomain,
    substate => substate,
  );

const makeSelectValidationAccountPageUser = 
  createSelector(
    selectValidationAccountPageDomain,
    substate => substate.user,
  );

export default makeSelectValidationAccountPage;
export { makeSelectValidationAccountPageUser };
