import React, { useState } from "react";

const SearchTicket = () => {
    return (
        <section className="search-ticket-section padding-top pt-lg-0">
            <div className="container">
                <div
                    className="search-tab bg_img"
                    data-background="assets/images/ticket/ticket-bg01.jpg"
                >
                    <div className="row align-items-center mb--20">
                        <div className="col-lg-6 mb-20">
                            <div className="search-ticket-header">
                                <h6 className="category">welcome to Boleto </h6>
                                <h3 className="title">
                                    what are you looking for{" "}
                                    <span className="color-theme">Movie</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="tab-area">
                        <div className="tab-item active">
                            <form className="ticket-search-form">
                                <div className="form-group large">
                                    <input
                                        type="text"
                                        placeholder="Search fo Movies"
                                    />
                                    <button type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img
                                            src="assets/images/ticket/city.png"
                                            alt="ticket"
                                        />
                                    </div>
                                    <span className="type">city</span>
                                    <select className="select-bar">
                                        <option value="london">London</option>
                                        <option value="dhaka">dhaka</option>
                                        <option value="rosario">rosario</option>
                                        <option value="madrid">madrid</option>
                                        <option value="koltaka">kolkata</option>
                                        <option value="rome">rome</option>
                                        <option value="khoksa">khoksa</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img
                                            src="assets/images/ticket/date.png"
                                            alt="ticket"
                                        />
                                    </div>
                                    <span className="type">date</span>
                                    <select className="select-bar">
                                        <option value="26-12-19">
                                            23/10/2019
                                        </option>
                                        <option value="26-12-19">
                                            24/10/2019
                                        </option>
                                        <option value="26-12-19">
                                            25/10/2019
                                        </option>
                                        <option value="26-12-19">
                                            26/10/2019
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img
                                            src="assets/images/ticket/cinema.png"
                                            alt="ticket"
                                        />
                                    </div>
                                    <span className="type">cinema</span>
                                    <select className="select-bar">
                                        <option value="Awaken">Awaken</option>
                                        <option value="dhaka">dhaka</option>
                                        <option value="rosario">rosario</option>
                                        <option value="madrid">madrid</option>
                                        <option value="koltaka">kolkata</option>
                                        <option value="rome">rome</option>
                                        <option value="khoksa">khoksa</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchTicket;
