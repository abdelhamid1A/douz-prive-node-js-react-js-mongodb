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

export default makeSelectValidationAccountPage;
export { selectValidationAccountPageDomain };
