import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className='header'>
            <nav className='navbar navbar-expand-lg'>
            <a className='navbar-brand' href='/'>
            <img src='images/logo.png' alt='' loading='lazy' />
            </a>
            <div className='navbar-toggler navbar-toggler-right collapsed clear-menu-btn' data-toggle='collapse' aria-expanded='false'>
            <button className='menu_tglbtn_checkbox'></button>
            <span className='top'></span>
            <span className='middle'></span>
            <span className='bottom'></span>
            <span className='circle'></span>
            </div>
            <div className='navbar-collapse collapse' id='navb'>
            <div className='SPlogo'>
                <a href='/'>
                    <img src='images/logo.png' alt='' loading='lazy' />
                </a>
            </div>
            <ul className='navbar-nav nav' id='main_menu'>
                <li className='nav-item active'>
                    <a className='nav-link' href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/about'>About Us</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/products'>Products</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/partners'>Partners</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/contact'>Contact Us</a>
                </li>
            </ul>
            <div className='SPMenuBtm'>
                <div className='headerBlk2ColRBx2'>
                    <a href='#'>
                        <img src='images/flipkart-logo.png' alt='' loading='lazy' />
                    </a>
                    <a href='#'>
                        <img src='images/amazon-logo.png' alt='' loading='lazy' />
                    </a>
                </div>
            </div>
            </div>
            <div className='headerBlk2ColR'>
            <div className='headerBlk2ColRBx headerBlk2ColRBx1'>
                <div className='headerBlk2ColRBx1Row headerBlk2ColRBx1Row1'>
                    <a href='tel:8012892751'>
                        <div className='headerBlk2ColRBx1Icon'>
                            <img src='images/helpIcon.png' alt='' loading='lazy' />
                        </div>
                        <div className='headerBlk2ColRBx1Intro'>
                            <p>Need Help?</p>
                            <h4>+91 93192 94022</h4>
                        </div>
                    </a>
                </div>
            </div>
            <div className='headerBlk2ColRBx headerBlk2ColRBx2'>
                <a href='#'>
                    <img src='images/flipkart-logo.png' alt='' loading='lazy' />
                </a>
                <a href='#'>
                    <img src='images/amazon-logo.png' alt='' loading='lazy' />
                </a>
            </div>
            </div>
            </nav>
            <div className='SPmenuBg'></div>
            </header>
            <Outlet />
            <footer className='footer'>
            <div className='container'>
            <div className='footerSec1'>
            <div className='row'>
            <div className='col-md-4 footerSec1Col footerSec1ColL'>
                <div className='footerSec1ColLBx'>
                    <div className='footerSec1ColLRow1'>
                        <a href='index.html'>
                            <img src='images/logo.png' alt='' loading='lazy' />
                        </a>
                    </div>
                    <div className='footerSec1ColLRow2 PT30'>
                        <ul>
                            <li>
                                <img src='images/location-outline-W.svg' alt='' loading='lazy' />
                                A60, Noida Sector 2, Noida Uttar Pradesh
                            </li>
                            <li>
                                <img src='images/phone-W.svg' alt='' loading='lazy' />
                                +91 93192 94022
                            </li>
                            <li>
                                <img src='images/mail-outline-W.svg' alt='' loading='lazy' />
                                gleeimpex@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className='footerSec1ColLRow3 PT40'>
                        <ul>
                            <li>
                                <a href='#'>
                                    <img src='images/facebook-W.png' alt='' loading='lazy' />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <img src='images/twitter-W.png' alt='' loading='lazy' />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <img src='images/instagram-W.png' alt='' loading='lazy' />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <img src='images/linkedin-W.png' alt='' loading='lazy' />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <img src='images/youtube-W.png' alt='' loading='lazy' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-md-8 footerSec1Col footerSec1ColR'>
                <div className='footerSec1ColRBx'>
                    <div className='footerSec1ColRRow1'>
                        <ul>
                            <li>
                                <a href='about-us.html'>About Us</a>
                            </li>
                            <li>
                                <a href='products.html'>Products</a>
                            </li>
                            <li>
                                <a href='partners.html'>Partners</a>
                            </li>
                            <li>
                                <a href='contact-us.html'>Contact Us</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href='#'>Gleeimpex Double Action Relief</a>
                            </li>
                            <li>
                                <a href='#'>Gleeimpex Pain Balm Healing Effect</a>
                            </li>
                            <li>
                                <a href='#'>Gleeimpex Headache Healing Rub</a>
                            </li>
                            <li>
                                <a href='#'>Gleeimpex Touch & Rub</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className='footerSec2 PT50'>
            <div className='row'>
            <div className='col-md-6 footerSec2Col footerSec2ColL'>
                <div className='footerSec2ColLBx'>
                    <p>Copyright © 2024 Gleeimpex - All Rights Reserved</p>
                </div>
            </div>
            <div className='col-md-6 footerSec2Col footerSec2ColR'>
                <div className='footerSec2ColRBx'>
                    <ul>
                        <li>
                            BUY NOW
                        </li>
                        <li>
                            <a href='#'>
                                <img src='images/flipkart-logo.png' alt='' loading='lazy' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src='images/amazon-logo.png' alt='' loading='lazy' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
            </div>
            </footer>


        </>
    );
}

export default Layout