import { Link } from "@inertiajs/react";
import React from "react";

const Header = () => {
    return (
        <>
            <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span />
                        <span />
                    </div>
                </div>
            </div>
            {/* ==========Preloader========== */}
            {/* ==========Overlay========== */}
            <div className="overlay" />
            <a href="#0" className="scrollToTop">
                <i className="fas fa-angle-up" />
            </a>
            
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="index.html">
                                <img
                                    src="assets/images/logo/logo.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <ul className="menu">
                            <li>
                                <a href="#0" className="active">
                                    Home
                                </a>
                                <ul className="submenu">
                                    <li>
                                        <a href="index.html">Home One</a>
                                    </li>
                                    <li>
                                        <a href="#0" className="active">
                                            Home Two
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">movies</a>
                                <ul className="submenu">
                                    <li>
                                    <Link href="/movie-list">Movie List</Link>
                                    </li>
                                   
                                    <li>
                                        
                                        <Link href="/movie-detail">Movie Details</Link>
                                    </li>
                                    <li>
                                        <a href="movie-details-2.html">
                                            Movie Details 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="movie-ticket-plan.html">
                                            Movie Ticket Plan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="movie-seat-plan.html">
                                            Movie Seat Plan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="movie-checkout.html">
                                            Movie Checkout
                                        </a>
                                    </li>
                                    <li>
                                        <a href="popcorn.html">Movie Food</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">events</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="events.html">Events</a>
                                    </li>
                                    <li>
                                        <a href="event-details.html">
                                            Event Details
                                        </a>
                                    </li>
                                    <li>
                                        <a href="event-speaker.html">
                                            Event Speaker
                                        </a>
                                    </li>
                                    <li>
                                        <a href="event-ticket.html">
                                            Event Ticket
                                        </a>
                                    </li>
                                    <li>
                                        <a href="event-checkout.html">
                                            Event Checkout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">sports</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="sports.html">Sports</a>
                                    </li>
                                    <li>
                                        <a href="sport-details.html">
                                            Sport Details
                                        </a>
                                    </li>
                                    <li>
                                        <a href="sports-ticket.html">
                                            Sport Ticket
                                        </a>
                                    </li>
                                    <li>
                                        <a href="sports-checkout.html">
                                            Sport Checkout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">pages</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="apps-download.html">
                                            Apps Download
                                        </a>
                                    </li>
                                    <li>
                                        <a href="sign-in.html">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="sign-up.html">Sign Up</a>
                                    </li>
                                    <li>
                                        <a href="404.html">404</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">blog</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            Blog Single
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">contact</a>
                            </li>
                            <li className="header-button pr-0">
                                <a href="sign-up.html">join us</a>
                            </li>
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
