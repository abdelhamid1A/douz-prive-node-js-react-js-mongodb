import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dashboardAdminContainer state domain
 */

const selectDashboardAdminContainerDomain = state =>
  state.dashboardAdminContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashboardAdminContainer
 */

const makeSelectDashboardAdminContainer = () =>
  createSelector(
    selectDashboardAdminContainerDomain,
    substate => substate,
  );

export default makeSelectDashboardAdminContainer;
export { selectDashboardAdminContainerDomain };
