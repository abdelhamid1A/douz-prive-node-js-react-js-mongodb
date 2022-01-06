import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
const logo = require('../assets/images/WA.png')
// import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import { useDispatch, useSelector } from 'react-redux'
// import { compose } from 'redux';
// import makeSelectSignInAdminPage,{makeSelectLogingAdmin,makeSelectLogingAdminLoading,makeSelectLogingAdminError} from '../../app/containers/SignInAdminPage/selectors';
// import {makeSelectSignInPageUser} from '../containers/SignInPage/selectors'

export default function Header() {
    let history = useHistory();
    // const { error, admin, loading ,user} = useSelector(mapStateToProps)
    // console.log(admin);
    const [tokenAdmin,setTokenAdmin] = useState('')
    const [tokenUser,setTokenUser] = useState('')
    // const token = localStorage.getItem('admin-token') 
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
    // useEffect(() => {
    //     // setTokenAdmin(localStorage.getItem('admin-token')||'' )
    //     setTokenUser(localStorage.getItem('token')||'' )
    // }, [tokenAdmin,tokenUser])
    // console.log("tokenAdmin",tokenAdmin);
    return (
        <nav className="navbar navbar-expand-lg navbar-light " >

            <Link className="navbar-brand " to="index"><img src={logo} alt="" className="logo" /></Link>
            <button className="navbar-toggler navbar-dark " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                {/* {
                    tokenAdmin
                    ?
                    <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="search?cat=voitur#">Vin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="search?cat=moto">Ads</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="forum">Post</Link>
                    </li>

                    <li className="nav-item">
                        <span className="nav-link" onClick={()=>handleLog(tokenAdmin,'admin-token','/admin-login',setTokenAdmin)} ><i className="fa fa-user-circle" ></i>{tokenAdmin?'logout':'login'}</span>
                    </li>
                </ul>
                   : */}

                
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

{/* 
                   {user||tokenUser?
                    <li className="nav-item">
                        <Link className="nav-link" to={user||tokenUser?'/logout':'/sign-in'} ><i className="fa fa-user-circle" ></i>{user||tokenUser?'logout':'login'}</Link>
                    </li>
                    :
                    <li className="nav-item">
                        <Link className="nav-link" to={user||tokenUser?'/logout':'/sign-in'} ><i className="fa fa-user-circle" ></i>{user||tokenUser?'logout':'login'}</Link>
                    </li>
                    }

                   {user||tokenUser&& <li className="nav-item">
                        <button className="btn btn-primary"><Link className="nav-link" to="annonce">Place an ad</Link></button>
                    </li>} */}

                    {/* <li className="nav-item">
                        <button className="btn btn-primary"><Link className="nav-link" to="login">Déposer une annonce</Link></button>
                    </li> */}
                </ul>

                
            </div>
        </nav>
    )
}

// const mapStateToProps = createStructuredSelector({
//     admin:makeSelectLogingAdmin,
//     error:makeSelectLogingAdminError,
//     loading:makeSelectLogingAdminLoading,
//     user:makeSelectSignInPageUser
//   });

//   function mapDispatchToProps(dispatch) {
//     return {
//       dispatch,
//     };
//   }
  
//   const withConnect = connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   );
  
// export default compose(withConnect)(Header);
