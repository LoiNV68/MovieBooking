function Profile() {
    return (
        <>
            {/* page title */}
            <section className="section section--first">
                <div className="content">
                    {/* profile */}
                    <div className="profile">
                        <div className="container">
                            <div className="profile__content">
                                <div className="profile__user">
                                    <div className="profile__avatar">
                                        <img src="img/user.svg" alt="" />
                                    </div>
                                    <div className="profile__meta">
                                        <h3>John Doe</h3>
                                        <span>BOLETO ID: 78123</span>
                                    </div>
                                </div>

                                {/* logout */}
                                <button
                                    className="profile__logout"
                                    type="button"
                                >
                                    <i className="ti ti-logout" />
                                    <span>Logout</span>
                                </button>
                                {/* end logout */}
                            </div>
                        </div>
                    </div>
                    {/* end profile */}
                    <div className="container">
                        <div className="row">
                            {/* details form */}
                            <div className="col-12 col-lg-6">
                                <form
                                    action="#"
                                    className="sign__form sign__form--full"
                                >
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="sign__title">
                                                Profile details
                                            </h4>
                                        </div>
                                     
                                        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                            <div className="sign__group">
                                                <label
                                                    className="sign__label"
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="text"
                                                    name="email"
                                                    className="sign__input"
                                                    placeholder="email@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                            <div className="sign__group">
                                                <label
                                                    className="sign__label"
                                                    htmlFor="fname"
                                                >
                                                    Username
                                                </label>
                                                <input
                                                    id="fname"
                                                    type="text"
                                                    name="fname"
                                                    className="sign__input"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                       
                                        <div className="col-12">
                                            <button
                                                className="sign__btn sign__btn--small"
                                                type="button"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* end details form */}
                            {/* password form */}
                            <div className="col-12 col-lg-6">
                                <form
                                    action="#"
                                    className="sign__form sign__form--full"
                                >
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="sign__title">
                                                Change password
                                            </h4>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label
                                                    className="sign__label"
                                                    htmlFor="oldpass"
                                                >
                                                    Old password
                                                </label>
                                                <input
                                                    id="oldpass"
                                                    type="password"
                                                    name="oldpass"
                                                    className="sign__input"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label
                                                    className="sign__label"
                                                    htmlFor="newpass"
                                                >
                                                    New password
                                                </label>
                                                <input
                                                    id="newpass"
                                                    type="password"
                                                    name="newpass"
                                                    className="sign__input"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label
                                                    className="sign__label"
                                                    htmlFor="confirmpass"
                                                >
                                                    Confirm new password
                                                </label>
                                                <input
                                                    id="confirmpass"
                                                    type="password"
                                                    name="confirmpass"
                                                    className="sign__input"
                                                />
                                            </div>
                                        </div>
                                       
                                        <div className="col-12">
                                            <button
                                                className="sign__btn sign__btn--small"
                                                type="button"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* end password form */}
                        </div>
                    </div>
                </div>
            </section>
            {/* end page title */}
            {/* content */}
            {/* end content */}
        </>
    );
}

export default Profile;
