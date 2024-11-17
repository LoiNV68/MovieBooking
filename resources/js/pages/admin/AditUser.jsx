function AditUser() {
    return (  <>
        {/* main content */}
        <main className="main">
          <div className="container-fluid">
            <div className="row">
              {/* main title */}
              <div className="col-12">
                <div className="main__title">
                  <h2>Edit user</h2>
                </div>
              </div>
              {/* end main title */}
              {/* profile */}
              <div className="col-12">
                <div className="profile__content">
                  {/* profile user */}
                  <div className="profile__user">
                    <div className="profile__avatar">
                      <img src="img/user.svg" alt="" />
                    </div>
                    {/* or red */}
                    <div className="profile__meta profile__meta--green">
                      <h3>
                        John Doe <span>(Approved)</span>
                      </h3>
                      <span>HotFlix ID: 23562</span>
                    </div>
                  </div>
                  {/* end profile user */}
                  {/* profile tabs nav */}
                  <ul
                    className="nav nav-tabs profile__tabs"
                    id="profile__tabs"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        id="1-tab"
                        className="active"
                        data-bs-toggle="tab"
                        data-bs-target="#tab-1"
                        type="button"
                        role="tab"
                        aria-controls="tab-1"
                        aria-selected="true"
                      >
                        Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        id="2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tab-2"
                        type="button"
                        role="tab"
                        aria-controls="tab-2"
                        aria-selected="false"
                      >
                        Comments
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        id="3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tab-3"
                        type="button"
                        role="tab"
                        aria-controls="tab-3"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  {/* end profile tabs nav */}
                  {/* profile btns */}
                  <div className="profile__actions">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      className="profile__action profile__action--banned"
                      data-bs-target="#modal-status3"
                    >
                      <i className="ti ti-lock" />
                    </button>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      className="profile__action profile__action--delete"
                      data-bs-target="#modal-delete3"
                    >
                      <i className="ti ti-trash" />
                    </button>
                  </div>
                  {/* end profile btns */}
                </div>
              </div>
              {/* end profile */}
              {/* content tabs */}
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                  aria-labelledby="1-tab"
                  tabIndex={0}
                >
                  <div className="col-12">
                    <div className="row">
                      {/* details form */}
                      <div className="col-12 col-lg-6">
                        <form action="#" className="sign__form sign__form--profile">
                          <div className="row">
                            <div className="col-12">
                              <h4 className="sign__title">Profile details</h4>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="username">
                                  Username
                                </label>
                                <input
                                  id="username"
                                  type="text"
                                  name="username"
                                  className="sign__input"
                                  placeholder="User 123"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="email2">
                                  Email
                                </label>
                                <input
                                  id="email2"
                                  type="text"
                                  name="email"
                                  className="sign__input"
                                  placeholder="email@email.com"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="fname">
                                  Name
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
                            <div className="col-12 col-md-6">
                              <div className="sign__group">
                                <label
                                  className="sign__label"
                                  htmlFor="sign__gallery-upload"
                                >
                                  Avatar
                                </label>
                                <div className="sign__gallery">
                                  <label id="gallery1" htmlFor="sign__gallery-upload">
                                    Upload (40x40)
                                  </label>
                                  <input
                                    data-name="#gallery1"
                                    id="sign__gallery-upload"
                                    name="gallery"
                                    className="sign__gallery-upload"
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    multiple=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="subscription">
                                  Subscription
                                </label>
                                <select className="sign__select" id="subscription">
                                  <option value="Basic">Basic</option>
                                  <option value="Premium">Premium</option>
                                  <option value="Cinematic">Cinematic</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="rights">
                                  Rights
                                </label>
                                <select className="sign__select" id="rights">
                                  <option value="User">User</option>
                                  <option value="Moderator">Moderator</option>
                                  <option value="Admin">Admin</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <button
                                className="sign__btn sign__btn--small"
                                type="button"
                              >
                                <span>Save</span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* end details form */}
                      {/* password form */}
                      <div className="col-12 col-lg-6">
                        <form action="#" className="sign__form sign__form--profile">
                          <div className="row">
                            <div className="col-12">
                              <h4 className="sign__title">Change password</h4>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xxl-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="oldpass">
                                  Old Password
                                </label>
                                <input
                                  id="oldpass"
                                  type="password"
                                  name="oldpass"
                                  className="sign__input"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xxl-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="newpass">
                                  New Password
                                </label>
                                <input
                                  id="newpass"
                                  type="password"
                                  name="newpass"
                                  className="sign__input"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xxl-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="confirmpass">
                                  Confirm New Password
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
                                <span>Change</span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* end password form */}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-2"
                  role="tabpanel"
                  aria-labelledby="2-tab"
                  tabIndex={0}
                >
                  {/* table */}
                  <div className="col-12">
                    <div className="catalog catalog--1">
                      <table className="catalog__table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>ITEM</th>
                            <th>AUTHOR</th>
                            <th>TEXT</th>
                            <th>LIKE / DISLIKE</th>
                            <th>CRAETED DATE</th>
                            <th>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="catalog__text">11</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">I Dream in Another Language</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Charlize Theron</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                When a renowned archaeologist goes...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">12 / 7</div>
                            </td>
                            <td>
                              <div className="catalog__text">05.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">12</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">The Forgotten Road</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Tyreese Gibson</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                A down-on-his-luck boxer struggles...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">67 / 22</div>
                            </td>
                            <td>
                              <div className="catalog__text">05.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">13</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Whitney</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Jordana Brewster</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                When an old friend offers him...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">44 / 5</div>
                            </td>
                            <td>
                              <div className="catalog__text">04.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">14</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Red Sky at Night</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Son Gun</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                But as the stakes get higher...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">20 / 6</div>
                            </td>
                            <td>
                              <div className="catalog__text">04.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">15</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Into the Unknown</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Louis Leterrier</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                A brilliant scientist discovers...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">8 / 132</div>
                            </td>
                            <td>
                              <div className="catalog__text">04.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">16</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">The Unseen Journey</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Brian Cranston</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                But when her groundbreaking...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">6 / 1</div>
                            </td>
                            <td>
                              <div className="catalog__text">03.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">17</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Savage Beauty</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Matt Jones</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                Along the way, she must...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">10 / 0</div>
                            </td>
                            <td>
                              <div className="catalog__text">03.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">18</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Endless Horizon</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Rosa Lee</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                Renewable energy source...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">13 / 14</div>
                            </td>
                            <td>
                              <div className="catalog__text">02.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">19</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">The Lost Key</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Tess Harper</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                Confront her own past to save...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">12 / 7</div>
                            </td>
                            <td>
                              <div className="catalog__text">02.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">20</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Echoes of Yesterday</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Gene Graham</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                Her father and uncover the secrets...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">67 / 22</div>
                            </td>
                            <td>
                              <div className="catalog__text">01.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* end table */}
                  {/* paginator */}
                  <div className="col-12">
                    <div className="main__paginator">
                      {/* amount */}
                      <span className="main__paginator-pages">10 of 169</span>
                      {/* end amount */}
                      <ul className="main__paginator-list">
                        <li>
                          <a href="#">
                            <i className="ti ti-chevron-left" />
                            <span>Prev</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Next</span>
                            <i className="ti ti-chevron-right" />
                          </a>
                        </li>
                      </ul>
                      <ul className="paginator">
                        <li className="paginator__item paginator__item--prev">
                          <a href="#">
                            <i className="ti ti-chevron-left" />
                          </a>
                        </li>
                        <li className="paginator__item">
                          <a href="#">1</a>
                        </li>
                        <li className="paginator__item paginator__item--active">
                          <a href="#">2</a>
                        </li>
                        <li className="paginator__item">
                          <a href="#">3</a>
                        </li>
                        <li className="paginator__item">
                          <a href="#">4</a>
                        </li>
                        <li className="paginator__item">
                          <span>...</span>
                        </li>
                        <li className="paginator__item">
                          <a href="#">29</a>
                        </li>
                        <li className="paginator__item">
                          <a href="#">30</a>
                        </li>
                        <li className="paginator__item paginator__item--next">
                          <a href="#">
                            <i className="ti ti-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end paginator */}
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-3"
                  role="tabpanel"
                  aria-labelledby="3-tab"
                  tabIndex={0}
                >
                  {/* table */}
                  <div className="col-12">
                    <div className="catalog catalog--2">
                      <table className="catalog__table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>ITEM</th>
                            <th>AUTHOR</th>
                            <th>TEXT</th>
                            <th>RATING</th>
                            <th>CRAETED DATE</th>
                            <th>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="catalog__text">11</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">I Dream in Another Language</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Gene Graham</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                Her father and uncover the secrets...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                7.9
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">06.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">12</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">The Forgotten Road</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Tess Harper</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                Confront her own past to save...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                8.6
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">06.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">13</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Whitney</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Rosa Lee</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                Renewable energy source...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                6.0
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">05.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">14</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Red Sky at Night</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Matt Jones</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                Along the way, she must...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                9.1
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">05.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">15</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Into the Unknown</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Brian Cranston</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                But when her groundbreaking...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                5.5
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">05.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">16</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">The Unseen Journey</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Louis Leterrier</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                A brilliant scientist discovers...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                7.0
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">04.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">17</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Savage Beauty</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Son Gun</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                But as the stakes get higher...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                9.0
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">04.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">18</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Endless Horizon</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Jordana Brewster</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                When an old friend offers him...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                6.2
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">03.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">19</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">The Lost Key</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Tyreese Gibson</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                A down-on-his-luck boxer struggles...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                7.9
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">02.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="catalog__text">20</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                <a href="#">Echoes of Yesterday</a>
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">Charlize Theron</div>
                            </td>
                            <td>
                              <div className="catalog__text">
                                When a renowned archaeologist goes...
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text catalog__text--rate">
                                8.6
                              </div>
                            </td>
                            <td>
                              <div className="catalog__text">02.02.2023</div>
                            </td>
                            <td>
                              <div className="catalog__btns">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--view"
                                  data-bs-target="#modal-view2"
                                >
                                  <i className="ti ti-eye" />
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  className="catalog__btn catalog__btn--delete"
                                  data-bs-target="#modal-delete2"
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* end table */}
                  {/* paginator */}
                  <div className="col-12">
                    <div className="main__paginator">
                      {/* amount */}
                      <span className="main__paginator-pages">10 of 169</span>
                      {/* end amount */}
                      <ul className="main__paginator-list">
                        <li>
                          <a href="#">
                            <i className="ti ti-chevron-left" />
                            <span>Prev</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Next</span>
                            <i className="ti ti-chevron-right" />
                          </a>
                        </li>
                      </ul>
                      <ul className="paginator">
                        <li className="paginator__item paginator__item--prev">
                          <a href="#">
                            <i className="ti ti-chevron-left" />
                          </a>
                        </li>
                        <li className="paginator__item">
                          <a href="#">1</a>
                        </li>
                        <li className="paginator__item paginator__item--active">
                          <a href="#">2</a>
                        </li>
                        <li className="paginator__item">
                          <a href="#">3</a>
                        </li>
                        <li className="paginator__item">
                          <a href="#">4</a>
                        </li>
                        <li className="paginator__item">
                          <span>...</span>
                        </li>
                        <li className="paginator__item">
                          <a href="#">29</a>
                        </li>
                        <li className="paginator__item">
                          <a href="#">30</a>
                        </li>
                        <li className="paginator__item paginator__item--next">
                          <a href="#">
                            <i className="ti ti-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end paginator */}
                </div>
              </div>
              {/* end content tabs */}
            </div>
          </div>
        </main>
        {/* end main content */}
      </>
      );
}

export default AditUser;