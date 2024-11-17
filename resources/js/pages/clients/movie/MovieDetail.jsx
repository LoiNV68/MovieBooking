import MovieSection from "./MovieSetion";

function MovieDetail() {
    return (
        
            <>
                {/* ==========Banner-Section========== */}
                <section
                    className="details-banner bg_img"
                    data-background="assets/images/banner/banner03.jpg"
                >
                    <div className="container">
                        <div className="details-banner-wrapper">
                            <div className="details-banner-thumb">
                                <img
                                    src="assets/images/movie/venus.jpg"
                                    alt="movie"
                                />
                                <a
                                    href="https://www.youtube.com/embed/KGeBMAgc46E"
                                    className="video-popup"
                                >
                                    <img
                                        src="assets/images/movie/video-button.png"
                                        alt="movie"
                                    />
                                </a>
                            </div>
                            <div className="details-banner-content offset-lg-3">
                                <h3 className="title">Venus</h3>
                                <div className="tags">
                                    <a href="#0">English</a>
                                    <a href="#0">Hindi</a>
                                    <a href="#0">Telegu</a>
                                    <a href="#0">Tamil</a>
                                </div>
                                <a href="#0" className="button">
                                    horror
                                </a>
                                <div className="social-and-duration">
                                    <div className="duration-area">
                                        <div className="item">
                                            <i className="fas fa-calendar-alt" />
                                            <span>06 Dec, 2020</span>
                                        </div>
                                        <div className="item">
                                            <i className="far fa-clock" />
                                            <span>2 hrs 50 mins</span>
                                        </div>
                                    </div>
                                    <ul className="social-share">
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==========Banner-Section========== */}
                {/* ==========Book-Section========== */}
                <section className="book-section bg-one">
                    <div className="container">
                        <div className="book-wrapper offset-lg-3">
                            <div className="left-side">
                                <div className="item">
                                    <div className="item-header">
                                        <div className="thumb">
                                            <img
                                                src="assets/images/movie/tomato2.png"
                                                alt="movie"
                                            />
                                        </div>
                                        <div className="counter-area">
                                            <span
                                                className="counter-item odometer"
                                                data-odometer-final={88}
                                            >
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <p>tomatometer</p>
                                </div>
                                <div className="item">
                                    <div className="item-header">
                                        <div className="thumb">
                                            <img
                                                src="assets/images/movie/cake2.png"
                                                alt="movie"
                                            />
                                        </div>
                                        <div className="counter-area">
                                            <span
                                                className="counter-item odometer"
                                                data-odometer-final={88}
                                            >
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <p>audience Score</p>
                                </div>
                                <div className="item">
                                    <div className="item-header">
                                        <h5 className="title">4.5</h5>
                                        <div className="rated">
                                            <i className="fas fa-heart" />
                                            <i className="fas fa-heart" />
                                            <i className="fas fa-heart" />
                                            <i className="fas fa-heart" />
                                            <i className="fas fa-heart" />
                                        </div>
                                    </div>
                                    <p>Users Rating</p>
                                </div>
                                <div className="item">
                                    <div className="item-header">
                                        <div className="rated rate-it">
                                            <i className="fas fa-heart" />
                                            <i className="fas fa-heart" />
                                            <i className="fas fa-heart" />
                                            <i className="fas fa-heart" />
                                            <i className="fas fa-heart" />
                                        </div>
                                        <h5 className="title">0.0</h5>
                                    </div>
                                    <p>
                                        <a href="#0">Rate It</a>
                                    </p>
                                </div>
                            </div>
                            <a href="#0" className="custom-button">
                                book tickets
                            </a>
                        </div>
                    </div>
                </section>
                {/* ==========Book-Section========== */}
                <MovieSection/>
            </>
    );
}

export default MovieDetail;
