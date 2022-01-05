/**
 *
 * Asynchronously loads the component for DashboardAdminContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
