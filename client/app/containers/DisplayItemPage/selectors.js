import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the displayItemPage state domain
 */

const selectDisplayItemPageDomain = state =>
  state.displayItemPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DisplayItemPage
 */

const makeSelectDisplayItemPage = () =>
  createSelector(
    selectDisplayItemPageDomain,
    substate => substate,
  );
const itemSelector = createSelector(
  selectDisplayItemPageDomain,
  substate => substate.items,
);
const totalSelector = createSelector(
  selectDisplayItemPageDomain,
  substate => substate.total,
);
export default makeSelectDisplayItemPage;
export { selectDisplayItemPageDomain , itemSelector,totalSelector};
