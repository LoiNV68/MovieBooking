function DashBoard() {
    return (
        <>
            {/* sidebar */}
            <div className="sidebar">
                {/* sidebar logo */}
                <a href="index.html" className="sidebar__logo">
                    <img src="img/logo.svg" alt="" />
                </a>
                {/* end sidebar logo */}
                {/* sidebar user */}
                <div className="sidebar__user">
                    <div className="sidebar__user-img">
                        <img src="img/user.svg" alt="" />
                    </div>
                    <div className="sidebar__user-title">
                        <span>Admin</span>
                        <p>John Doe</p>
                    </div>
                    <button className="sidebar__user-btn" type="button">
                        <i className="ti ti-logout" />
                    </button>
                </div>
                {/* end sidebar user */}
                {/* sidebar nav */}
                <div className="sidebar__nav-wrap">
                    <ul className="sidebar__nav">
                        <li className="sidebar__nav-item">
                            <a
                                href="index.html"
                                className="sidebar__nav-link sidebar__nav-link--active"
                            >
                                <i className="ti ti-layout-grid" />{" "}
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar__nav-item">
                            <a
                                href="catalog.html"
                                className="sidebar__nav-link"
                            >
                                <i className="ti ti-movie" />{" "}
                                <span>Catalog</span>
                            </a>
                        </li>
                        <li className="sidebar__nav-item">
                            <a href="users.html" className="sidebar__nav-link">
                                <i className="ti ti-users" /> <span>Users</span>
                            </a>
                        </li>
                        <li className="sidebar__nav-item">
                            <a
                                href="comments.html"
                                className="sidebar__nav-link"
                            >
                                <i className="ti ti-message" />{" "}
                                <span>Comments</span>
                            </a>
                        </li>
                        <li className="sidebar__nav-item">
                            <a
                                href="reviews.html"
                                className="sidebar__nav-link"
                            >
                                <i className="ti ti-star-half-filled" />{" "}
                                <span>Reviews</span>
                            </a>
                        </li>
                        <li className="sidebar__nav-item">
                            <a
                                href="settings.html"
                                className="sidebar__nav-link"
                            >
                                <i className="ti ti-settings" />{" "}
                                <span>Settings</span>
                            </a>
                        </li>
                        {/* dropdown */}
                        <li className="sidebar__nav-item">
                            <a
                                className="sidebar__nav-link"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="ti ti-files" /> <span>Pages</span>{" "}
                                <i className="ti ti-chevron-down" />
                            </a>
                            <ul className="dropdown-menu sidebar__dropdown-menu">
                                <li>
                                    <a href="add-item.html">Add item</a>
                                </li>
                                <li>
                                    <a href="edit-user.html">Edit user</a>
                                </li>
                                <li>
                                    <a href="signin.html">Sign In</a>
                                </li>
                                <li>
                                    <a href="signup.html">Sign Up</a>
                                </li>
                                <li>
                                    <a href="forgot.html">Forgot password</a>
                                </li>
                                <li>
                                    <a href="404.html">404 Page</a>
                                </li>
                            </ul>
                        </li>
                        {/* end dropdown */}
                        <li className="sidebar__nav-item">
                            <a
                                href="https://hotflix.volkovdesign.com/main/index.html"
                                className="sidebar__nav-link"
                            >
                                <i className="ti ti-arrow-left" />{" "}
                                <span>Back to HotFlix</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* end sidebar nav */}
                {/* sidebar copyright */}
                <div className="sidebar__copyright">
                    © HOTFLIX, 2019—2024. <br />
                    Create by{" "}
                    <a
                        href="https://themeforest.net/user/dmitryvolkov/portfolio"
                        target="_blank"
                    >
                        Dmitry Volkov
                    </a>
                </div>
                {/* end sidebar copyright */}
            </div>
            {/* end sidebar */}
            {/* main content */}
            <main className="main">
                <div className="container-fluid">
                    <div className="row">
                        {/* main title */}
                        <div className="col-12">
                            <div className="main__title">
                                <h2>Dashboard</h2>
                                <a
                                    href="add-item.html"
                                    className="main__title-link"
                                >
                                    add item
                                </a>
                            </div>
                        </div>
                        {/* end main title */}
                        {/* stats */}
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="stats">
                                <span>Subscriptions this month</span>
                                {/* or .red */}
                                <p>
                                    1 678 <b className="green">+15</b>
                                </p>
                                <i className="ti ti-diamond" />
                            </div>
                        </div>
                        {/* end stats */}
                        {/* stats */}
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="stats">
                                <span>Items added this month</span>
                                <p>
                                    376 <b className="red">-44</b>
                                </p>
                                <i className="ti ti-movie" />
                            </div>
                        </div>
                        {/* end stats */}
                        {/* stats */}
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="stats">
                                <span>Views this month</span>
                                <p>
                                    509 573 <b className="green">+3.1%</b>
                                </p>
                                <i className="ti ti-eye" />
                            </div>
                        </div>
                        {/* end stats */}
                        {/* stats */}
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="stats">
                                <span>Reviews this month</span>
                                <p>
                                    642 <b className="green">+8</b>
                                </p>
                                <i className="ti ti-star-half-filled" />
                            </div>
                        </div>
                        {/* end stats */}
                    </div>
                    <div className="row">
                        {/* dashbox */}
                        <div className="col-12 col-xl-6">
                            <div className="dashbox">
                                <div className="dashbox__title">
                                    <h3>
                                        <i className="ti ti-trophy" /> Top items
                                    </h3>
                                    <div className="dashbox__wrap">
                                        <a
                                            className="dashbox__refresh"
                                            href="#"
                                        >
                                            <i className="ti ti-refresh" />
                                        </a>
                                        <a
                                            className="dashbox__more"
                                            href="catalog.html"
                                        >
                                            View All
                                        </a>
                                    </div>
                                </div>
                                <div className="dashbox__table-wrap dashbox__table-wrap--1">
                                    <table className="dashbox__table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>TITLE</th>
                                                <th>CATEGORY</th>
                                                <th>RATING</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        241
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            The Lost City
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Movie
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        9.2
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        825
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Undercurrents
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Movie
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        9.1
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        9271
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Tales from the
                                                            Underworld
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        TV Series
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        9.0
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        635
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            The Unseen World
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        TV Series
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        8.9
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        825
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Redemption Road
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        TV Series
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        8.9
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* end dashbox */}
                        {/* dashbox */}
                        <div className="col-12 col-xl-6">
                            <div className="dashbox">
                                <div className="dashbox__title">
                                    <h3>
                                        <i className="ti ti-movie" /> Latest
                                        items
                                    </h3>
                                    <div className="dashbox__wrap">
                                        <a
                                            className="dashbox__refresh"
                                            href="#"
                                        >
                                            <i className="ti ti-refresh" />
                                        </a>
                                        <a
                                            className="dashbox__more"
                                            href="catalog.html"
                                        >
                                            View All
                                        </a>
                                    </div>
                                </div>
                                <div className="dashbox__table-wrap dashbox__table-wrap--2">
                                    <table className="dashbox__table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>ITEM</th>
                                                <th>CATEGORY</th>
                                                <th>RATING</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        824
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            I Dream in Another
                                                            Language
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        TV Series
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        7.2
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        602
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">Benched</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Movie
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        6.3
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        538
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">Whitney</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        TV Show
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        8.4
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        129
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Blindspotting
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Anime
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        9.0
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        360
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">Another</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Movie
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        7.7
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* end dashbox */}
                        {/* dashbox */}
                        <div className="col-12 col-xl-6">
                            <div className="dashbox">
                                <div className="dashbox__title">
                                    <h3>
                                        <i className="ti ti-users" /> Latest
                                        users
                                    </h3>
                                    <div className="dashbox__wrap">
                                        <a
                                            className="dashbox__refresh"
                                            href="#"
                                        >
                                            <i className="ti ti-refresh" />
                                        </a>
                                        <a
                                            className="dashbox__more"
                                            href="users.html"
                                        >
                                            View All
                                        </a>
                                    </div>
                                </div>
                                <div className="dashbox__table-wrap dashbox__table-wrap--3">
                                    <table className="dashbox__table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>FULL NAME</th>
                                                <th>EMAIL</th>
                                                <th>USERNAME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        23
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Brian Cranston
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        bcxwz@email.com
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        BrianXWZ
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        22
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Jesse Plemons
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        jess@email.com
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Jesse.P
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        21
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Matt Jones
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        matt@email.com
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Matty
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        20
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Tess Harper
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        harper@email.com
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Harper123
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        19
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Jonathan Banks
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        bank@email.com
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Jonathan
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* end dashbox */}
                        {/* dashbox */}
                        <div className="col-12 col-xl-6">
                            <div className="dashbox">
                                <div className="dashbox__title">
                                    <h3>
                                        <i className="ti ti-star-half-filled" />{" "}
                                        Latest reviews
                                    </h3>
                                    <div className="dashbox__wrap">
                                        <a
                                            className="dashbox__refresh"
                                            href="#"
                                        >
                                            <i className="ti ti-refresh" />
                                        </a>
                                        <a
                                            className="dashbox__more"
                                            href="reviews.html"
                                        >
                                            View All
                                        </a>
                                    </div>
                                </div>
                                <div className="dashbox__table-wrap dashbox__table-wrap--4">
                                    <table className="dashbox__table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>ITEM</th>
                                                <th>AUTHOR</th>
                                                <th>RATING</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        824
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            I Dream in Another
                                                            Language
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Eliza Josceline
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        7.2
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        602
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">Benched</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Ketut
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        6.3
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        538
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">Whitney</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Brian Cranston
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        8.4
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        129
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">
                                                            Blindspotting
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Quang
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        9.0
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--grey">
                                                        360
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        <a href="#">Another</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text">
                                                        Jackson Brown
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashbox__table-text dashbox__table-text--rate">
                                                        <i className="ti ti-star" />{" "}
                                                        7.7
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* end dashbox */}
                    </div>
                </div>
            </main>
            {/* end main content */}
        </>
    );
}

export default DashBoard;
