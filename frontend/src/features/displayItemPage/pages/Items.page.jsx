import React, { useState, useEffect } from 'react';
import moment from 'moment'
// material 
import { Box, Pagination, PaginationItem, Stack, Grid ,Select,MenuItem} from '@mui/material'

// icon 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { compose } from 'redux';
import { itemSelector } from '../redux/selectors';

import { getItemsRquestAction } from '../redux/actions';
const pathImages = '../../imagesUploded/';


export default function ItemsPage() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [type, setType] = useState('');
    const [page, setPage] = useState(1);
    const limit = 3;
    const { items, loading, error } = useSelector(itemSelector);
    // const {items} = displayItemPage;
    // const {docs} = items;
    const handleChangePage = (value) => {
        // console.log(value - 1);
        setPage(value)
        dispatch(getItemsRquestAction(value, limit, searchText, type))
    };
    const handleSearch = ()=> {
        setPage(1)
        dispatch(getItemsRquestAction(1, limit,searchText, type))
    }
    const handleClearSearch = ()=> {
        setType('');
        setSearchText('');
        dispatch(getItemsRquestAction(1, limit, '', ''))
    }
    const displayImg = (imgName) => require('../../../imagesUploded/' + imgName)
    useEffect(() => {
        dispatch(getItemsRquestAction(1, limit, '', ''))
    }, [])
    // console.log(type);
    //   useEffect(() => {
    //     setTotal(Math.ceil(totalState / limit))
    //   }, [totalState])
    return (
        <div>
            {/* <Box display="flex" justifyContent='center'> */}

            <Grid container spacing={2} justifyContent='center'  >
                <Grid item xs={3} className="p-3 mt-5" style={{ background: 'white', boxShadow: "12px 12px 12px 1px rgba(0, 0, 255, .2)", }}>
                    <input type="text" 
                    onChange={(e)=>setSearchText(e.target.value)}
                    value={searchText}
                    placeholder="search by name" style={{ borderRadius: "12px", border: "1px solid black", padding: "2px" }} />
                </Grid>
                <Grid item xs={4} className="p-3 mt-5" style={{ background: 'white', boxShadow: "12px 12px 12px 1px rgba(0, 0, 255, .2)", }}>
                   
                    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={type}
    // label="Age"
    style={{ borderRadius: "12px",  height: "55%",width: "250px", textAlign: "center",outline:'none' }}
    onChange={(e)=>setType(e.target.value)}
  >
    {/* <MenuItem value={10}>Ten</MenuItem> */}
    <MenuItem value={'bike'}>motorcycle</MenuItem>
    <MenuItem value={'car'}>car</MenuItem>
  </Select>
                </Grid>
                <Grid item xs={2} className="p-3 mt-5" style={{ background: 'white', boxShadow: "12px 12px 12px 1px rgba(0, 0, 255, .2)", }}>
                    {!searchText&&type==""?
                    <button className="btn btn-primary" onClick={()=>handleSearch()}><SearchIcon /></button>
                    :
                    <div style={{display:'flex'}}>
                    <button className="btn btn-primary" onClick={()=>handleSearch()}><SearchIcon /></button>
                    <button className="btn btn-danger" onClick={()=>handleClearSearch()}><CloseIcon /></button>
                    </div>
                    }
                </Grid>
            </Grid>
            {/* </Box> */}
            {
                items && (items.docs || []).map(item => (
                    <div className="col-md-8 offset-md-2" style={{ boxShadow: "12px 12px 12px 1px rgba(0, 0, 255, .2)", }}>
                        <div className="postCard mt-5 bg-white rounded pl-4 pr-4 pb-4 pb-4 pt-2">
                            <div className="row">
                                <div className="col-lg-7 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-12 p-3">
                                            <img src={displayImg(item.picture)} alt="" className="img-fluid img-thumbnail mx-auto d-block rounded position-relative _moveTop shadow-lg" />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="_day">
                                                <span className="_date" style={{ marginLeft: '5px' }}>{moment(item.createdAt).format('DD-MM-YYYY hh:mm')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="pb-2 mb-2 border-bottom">
                                                <div className="_blogTitle font-weight-bold h5 " style={{ marginLeft: '5px' }}>{item.title}</div>
                                                <div className="badge badge-pill mt-2 bg-primary text-white d-inline-flex align-items-center mr-5" style={{ marginRight: '10px', marginLeft: '5px' }}>
                                                    <i className="fa fa-phone mr-1 " style={{marginRight: '4px'}}></i>{item.phone}
                                                </div>
                                                <div className="badge badge-pill mt-2 bg-primary text-white d-inline-flex align-items-center ">
                                                    <i className="fa fa-map-marker mr-1" style={{marginRight: '4px'}}></i>{item.city}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="_content mt-2" style={{ marginLeft: '5px' }}>
                                                {item.description}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-4" style={{ marginLeft: '5px' }}>
                                            <button className="btn btn-primary" >{item.price} DH</button>
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
                        count={items?.totalPages}
                        page={page}
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