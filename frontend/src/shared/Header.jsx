import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromLocalStorage , removeDataFromLocalStorage} from '../helper/local.storage.helper'
import { userSelector } from '../features/auth/signIn.container/redux/selectors'
import {logoutAction} from '../features/auth/signIn.container/redux/actions'
const logo = require('../assets/images/WA.png')

export default function Header() {
    let history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector(userSelector)
    // console.log(admin);
    const [tokenUser, setTokenUser] = useState('')
    const logout = ()=>{
        setTokenUser('');
        removeDataFromLocalStorage('token');
        dispatch(logoutAction())
    }
    // const token = getDataFromLocalStorage('token') 
    // console.log(token);
    // const path = window.location.pathname
    // console.log('user',user.token);
    // const handleLog = (token,key,destination,setToken)=>{
    //     // console.log("here");
    //     // console.log(token,key,destination,setToken);
    //     // const token = loca
    //     if(token){
    //         localStorage.removeItem(key)
    //         setToken(localStorage.getItem(key))
    //         history.push('/admin-login')
    //     }else{
    //         history.push(destination)
    //     }
    // }
    useEffect(() => {
        setTokenUser(getDataFromLocalStorage('token') || '')
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light " >

            <Link className="navbar-brand " to="index"><img src={logo} alt="" className="logo" /></Link>
            <button className="navbar-toggler navbar-dark " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="forum">Forum</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="vol">diagnostic</Link>
                    </li>


                    {user?.token || tokenUser ?
                        <>
                            <li className="nav-item">
                                {/* <span className="nav-link" to={'/logout'} ><i className="fa fa-user-circle" ></i>logout</span> */}
                                <span className="nav-link" onClick={()=>logout()} ><i className="fa fa-user-circle" ></i>logout</span>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary"><Link className="nav-link" to="add-item">Place an ad</Link></button>
                            </li>
                        </>
                        :
                        <li className="nav-item">
                            <Link className="nav-link" to={'/sign-in'} ><i className="fa fa-user-circle" ></i>login</Link>
                        </li>
                    }

                </ul>


            </div>
        </nav>
    )
}

