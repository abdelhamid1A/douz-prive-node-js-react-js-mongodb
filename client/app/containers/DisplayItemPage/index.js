/**
 *
 * DisplayItemPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from '@mui/material/Button';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDisplayItemPage, { itemSelector, totalSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getItemsRquestAction } from './actions';
const pathImages = '../../imagesUploded/';
import imgMIN from '../../imagesUploded/7s1000rr.jpg'

// material 
import { Grid, Box, Pagination, PaginationItem, Stack } from '@mui/material'

// icon 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function DisplayItemPage() {
  useInjectReducer({ key: 'displayItemPage', reducer });
  useInjectSaga({ key: 'displayItemPage', saga });
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0)
  const limit = 5;
  const { items, loading, error, displayItemPage, totalState } = useSelector(mapStateToProps);
  // const {items} = displayItemPage;
  // const {docs} = items;
  // console.log(displayItemPage);
  console.log('../../imagesUploded/7s1000rr.jpg');
  console.log(pathImages+'7s1000rr.jpg');
  const handleChangePage = (value)=>{
    console.log(value-1);
    dispatch(getItemsRquestAction(value, limit, '', ''))
  };
  const displayImg = (imgName)=>require('../../imagesUploded/'+imgName)
  useEffect(() => {
    dispatch(getItemsRquestAction(1, limit, '', ''))
  }, [])
  useEffect(() => {
    setTotal(Math.ceil(totalState / limit))
  }, [totalState])
  return (
    <div>
      <Helmet>
        <title>DisplayItemPage</title>
        <meta name="description" content="Description of DisplayItemPage" />
      </Helmet>
      {
        items && (items.docs || []).map(item => (
          <div className="row">
        <div className="col-md-8 offset-md-2">
            <div className="postCard mt-5 bg-white rounded pl-4 pr-4 pb-4 pb-4 pt-2">
                <div className="row">
                    <div className="col-lg-7 col-sm-12">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={displayImg('7s1000rr.jpg')} alt="" className="img-fluid img-thumbnail mx-auto d-block rounded position-relative _moveTop shadow-lg" />
                            </div>
                            <div className="col-md-12">
                                <div className="_day">
                                    <span className="_date">{item.createdAt}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <div className="row">
                            <div className="col-md-12">
                                    <div className="pb-2 mb-2 border-bottom">
                                    <div className="_blogTitle font-weight-bold h5">{item.title}</div>
                                    <div className="badge badge-pill mt-2 bg-primary text-white d-inline-flex align-items-center ">
                                    <i className="fa fa-phone mr-1"></i>{item.phone} 
                                    </div>
                                    <div className="badge badge-pill mt-2 bg-primary text-white d-inline-flex align-items-center ">
                                    <i className="fa fa-map-marker mr-1"></i>{item.city}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="_content mt-2">
                                  {item.description}
                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <button className="btn btn-primary">{item.price}DH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        ))
      }
      
      <Box display="flex" justifyContent="center">
        <Stack spacing={2}>
          <Pagination
            count={totalState}
            onChange={(e, val) => handleChangePage(val)}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </Box>
    </div>
  );
}

// DisplayItemPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  displayItemPage: makeSelectDisplayItemPage(),
  items: itemSelector,
  totalState: totalSelector,
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

// export default DisplayItemPage;
export default compose(withConnect)(DisplayItemPage);
