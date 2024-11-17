import React, { useEffect } from "react";

const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <div
                    className="banner-bg bg_img bg-fixed"
                    data-background="assets/images/banner/banner01.jpg"
                />
                <div className="container">
                    <div className="banner-content">
                        <h1 className="title  cd-headline ">
                            <span className="d-block">book your </span> 
                            tickets
                            for 
                            <span className="color-theme" style={{ padding: 18, margin: 0 }}>
                                Movie
                            </span>
                        </h1>
                        <p>
                            Safe, secure, reliable ticketing.Your ticket to live
                            entertainment!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
