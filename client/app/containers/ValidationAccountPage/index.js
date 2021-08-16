/**
 *
 * ValidationAccountPage
 *
 */

import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {useDispatch,useSelector} from 'react-redux'

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import select,{makeSelectValidationAccountPageUser} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {validationAccountRequestAction} from './actions';
// import messages from './messages';
import queryString from 'query-string'

export function ValidationAccountPage(props) {
  useInjectReducer({ key: 'validationAccountPage', reducer });
  useInjectSaga({ key: 'validationAccountPage', saga });
  const {user,all} = useSelector(mapStateToProps) 
  console.log(user);
  console.log(all);
  const dispatch = useDispatch()

  const value= queryString.parse(props.location.search)
  // console.log(value.token);
  const {token} = value
  useEffect(() => {
    // token && 
    dispatch(validationAccountRequestAction(token))
    
  }, [])
  // console.log(value.token);

  return (
    <div>
      validation
      {/* <FormattedMessage {...messages.header} /> */}
    </div>
  );
}

ValidationAccountPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user : makeSelectValidationAccountPageUser,
  all:select()
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const withConnect = connect(
  mapStateToProps,
);

export default compose(withConnect)(ValidationAccountPage);
