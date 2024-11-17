function About() {
    return (
        <>
            <section className="about-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="event-about-content">
                                <div className="section-header-3 left-style m-0">
                                    <span className="cate">we are Boleto </span>
                                    <h2 className="title">Get to know us</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        ut labore et dolore magna aliqua. Quis
                                        ipsum suspendisse ultrices gravida.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        ut labore et dolore magna aliqua. Quis
                                        ipsum suspendisse ultrices gravida.Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </p>
                                    <a href="#0" className="custom-button">
                                        book tickets
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="about-thumb">
                                <img
                                    src="assets/images/about/about01.png"
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div
                className="philosophy-section padding-top padding-bottom bg-one bg_img bg_quater_img"
                data-background="assets/images/about/about-bg.jpg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-3 bg-two">
                            <div className="philosophy-content">
                                <div className="section-header-3 left-style">
                                    <span className="cate">Take look at</span>
                                    <h2 className="title">Our philosophy</h2>
                                    <p className="ml-0">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmtempor
                                        incididunt labore et dolore magna aliqu
                                        enim ad minim veniam quis nostrud
                                        exercitation ullamco laboris nisi ut
                                        aliquip
                                    </p>
                                </div>
                                <ul className="phisophy-list">
                                    <li>
                                        <div className="thumb">
                                            <img
                                                src="assets/images/philosophy/icon1.png"
                                                alt="philosophy"
                                            />
                                        </div>
                                        <h5 className="title">
                                            Honesty &amp; Fairness{" "}
                                        </h5>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img
                                                src="assets/images/philosophy/icon2.png"
                                                alt="philosophy"
                                            />
                                        </div>
                                        <h5 className="title">
                                            Clarity &amp; Transparency
                                        </h5>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img
                                                src="assets/images/philosophy/icon3.png"
                                                alt="philosophy"
                                            />
                                        </div>
                                        <h5 className="title">
                                            Focus on Customers
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
