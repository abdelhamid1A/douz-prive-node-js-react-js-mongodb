import React from 'react'
import {Link} from 'react-router-dom'
const logo = require('../assest/WA.png')

export default function Header() {
    const token = '' 
    return (
        <nav className="navbar navbar-expand-lg navbar-light " >

            <Link className="navbar-brand " to="index.php"><img src={logo} alt="" className="logo" /></Link>
            <button className="navbar-toggler navbar-dark " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
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
                        <Link className="nav-link" to={token?'/logout':'/login'} ><i className="fa fa-user-circle" ></i>{token?'logout':'login'}</Link>
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-primary"><Link className="nav-link" to="annonce.php">Place an ad</Link></button>
                    </li>

                    {/* <li className="nav-item">
                        <button className="btn btn-primary"><Link className="nav-link" to="login.php">Déposer une annonce</Link></button>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
