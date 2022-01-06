import React, { useState, useEffect } from 'react';
// material 
import { Box, Pagination, PaginationItem, Stack } from '@mui/material'

// icon 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { compose } from 'redux';
import { itemSelector } from '../redux/selectors';

import { getItemsRquestAction } from '../redux/actions';
const pathImages = '../../imagesUploded/';


export default function ItemsPage() {
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0)
    const limit = 5;
    const { items, loading, error } = useSelector(itemSelector);
    // const {items} = displayItemPage;
    // const {docs} = items;
    const handleChangePage = (value) => {
        console.log(value - 1);
        dispatch(getItemsRquestAction(value, limit, '', ''))
    };
    const displayImg = (imgName) => require('../../../imagesUploaded/' + imgName)
    useEffect(() => {
        dispatch(getItemsRquestAction(1, limit, '', ''))
    }, [])
    //   useEffect(() => {
    //     setTotal(Math.ceil(totalState / limit))
    //   }, [totalState])
    return (
        <div>
            {/* <Helmet>
        <title>DisplayItemPage</title>
        <meta name="description" content="Description of DisplayItemPage" />
      </Helmet> */}
            {
                items && (items.docs || []).map(item => (
                    <div className="col-md-8 offset-md-2" style={{ boxShadow: "12px 12px 12px 1px rgba(0, 0, 255, .2)", }}>
                        <div className="postCard mt-5 bg-white rounded pl-4 pr-4 pb-4 pb-4 pt-2">
                            <div className="row">
                                <div className="col-lg-7 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-12 p-3">
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
                    // </boxShadow>
                    // </Grid>
                ))
            }
            {/* </Grid> */}
            <Box display="flex" justifyContent="center" className='mt-4'>
                <Stack spacing={2}>
                    <Pagination
                        count={total}
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