import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
const logo = require('../assest/WA.png')
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux';
import makeSelectSignInAdminPage,{makeSelectLogingAdmin,makeSelectLogingAdminLoading,makeSelectLogingAdminError} from '../../app/containers/SignInAdminPage/selectors';

function Header() {
    let history = useHistory();
    const { error, admin, loading } = useSelector(mapStateToProps)
    // console.log(admin);
    const [tokenAdmin,setTokenAdmin] = useState('')
    const [tokenUser,setTokenUser] = useState('')
    // const token = localStorage.getItem('admin-token') 
    const path = window.location.pathname
    // console.log('path',path);
    const handleLog = (token,key,destination,setToken)=>{
        // console.log("here");
        // console.log(token,key,destination,setToken);
        // const token = loca
        if(token){
            localStorage.removeItem(key)
            setToken(localStorage.getItem(key))
            history.push('/admin-login')
        }else{
            history.push(destination)
        }
    }
    useEffect(() => {
        setTokenAdmin(localStorage.getItem('admin-token')||'' )
        setTokenUser(localStorage.getItem('token')||'' )
    }, [tokenAdmin,tokenUser])
    // console.log("tokenAdmin",tokenAdmin);
    return (
        <nav className="navbar navbar-expand-lg navbar-light " >

            <Link className="navbar-brand " to="index.php"><img src={logo} alt="" className="logo" /></Link>
            <button className="navbar-toggler navbar-dark " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                {
                    tokenAdmin
                    ?
                    <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="search.php?cat=voitur#">Vin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="search.php?cat=moto">Ads</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="forum.php">Post</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="vol.php">diagnostic</Link>
                    </li> */}


                    {/* <li>
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="#" ><i className="fa fa-users"></i> admin</Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="admin.php">publicity</Link>
                            <Link className="dropdown-item" to="logout.php">logout</Link>
                        </div>
                    </li> */}


                    <li className="nav-item">
                        {/* <span onclick={handleLog}>
                        {token?'logout':'login'}
                        </span> */}
                        <span className="nav-link" onClick={()=>handleLog(tokenAdmin,'admin-token','/admin-login',setTokenAdmin)} ><i className="fa fa-user-circle" ></i>{tokenAdmin?'logout':'login'}</span>
                    </li>

                    {/* <li className="nav-item">
                        <button className="btn btn-primary"><Link className="nav-link" to="annonce.php">Place an ad</Link></button>
                    </li> */}

                    {/* <li className="nav-item">
                        <button className="btn btn-primary"><Link className="nav-link" to="login.php">Déposer une annonce</Link></button>
                    </li> */}
                </ul>
                   :

                
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="search.php?cat=voitur#">Car</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="search.php?cat=moto">Motorbike</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="forum.php">Forum</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="vol.php">diagnostic</Link>
                    </li>


                    {/* <li>
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="#" ><i className="fa fa-users"></i> admin</Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="admin.php">publicity</Link>
                            <Link className="dropdown-item" to="logout.php">logout</Link>
                        </div>
                    </li> */}


                    <li className="nav-item">
                        <Link className="nav-link" to={tokenUser?'/logout':'/login'} ><i className="fa fa-user-circle" ></i>{tokenUser?'logout':'login'}</Link>
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-primary"><Link className="nav-link" to="annonce.php">Place an ad</Link></button>
                    </li>

                    {/* <li className="nav-item">
                        <button className="btn btn-primary"><Link className="nav-link" to="login.php">Déposer une annonce</Link></button>
                    </li> */}
                </ul>

                
                }
            </div>
        </nav>
    )
}

const mapStateToProps = createStructuredSelector({
    admin:makeSelectLogingAdmin,
    error:makeSelectLogingAdminError,
    loading:makeSelectLogingAdminLoading,
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
  
export default compose(withConnect)(Header);
