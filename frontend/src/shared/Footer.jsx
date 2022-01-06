import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-ms-6 col-xs-12 segment-1 res">
                        <h3>Wasit / وسيط</h3>
                        <p>- A platform for the sale and purchase of a new or used motorbike / car.<br />
                            - Forum to change the experience, and give advice.<br />
                            - Mini diagnostic space for your car or motorcycle.
                            .</p>
                    </div>

                    <div className="col-md-3 col-ms-6 col-xs-12 segment-2 res">
                        <h2>Quick Link</h2>
                        <ul>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">Forum</Link></li>
                            <li><Link to="#">diagnostic</Link></li>
                            <li><Link to="#">Place an ad</Link></li>
                            <li><Link to="contact.php">contact us</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-ms-6 col-xs-12 segment-3 res">
                        <h2>social media</h2>
                        <Link to=""><i className="fa fa-facebook"></i></Link>
                        <Link to=""><i className="fa fa-twitter"></i></Link>
                        <Link to=""><i className="fa fa-linkedin"></i></Link>
                        <Link to=""><i className="fa fa-pinterest"></i></Link>
                    </div>

                    <div className="col-md-3 col-ms-6 col-xs-12 segment-4 res">
                        <h2>contact us</h2>
                        <p>write your email to participate in the wasit family.</p>
                        {/* <form action="" method="post"> */}
                        <input type="email" name="" id="" />
                        <input type="submit" value="subscribe" />
                        {/* </form> */}
                    </div>

                </div>
            </div>
        </div>

    )
}
