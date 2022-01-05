/**
 *
 * DashboardAdminContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboardAdminContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function DashboardAdminContainer() {
  useInjectReducer({ key: 'dashboardAdminContainer', reducer });
  useInjectSaga({ key: 'dashboardAdminContainer', saga });

  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      DashboardAdminContainer
    </div>
  );
}

DashboardAdminContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardAdminContainer: makeSelectDashboardAdminContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DashboardAdminContainer);
