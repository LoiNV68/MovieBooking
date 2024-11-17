function UserList() {
    return ( <>
        {/* main content */}
        <main className="main">
          <div className="container-fluid">
            <div className="row">
              {/* main title */}
              <div className="col-12">
                <div className="main__title">
                  <h2>Users</h2>
                  <span className="main__title-stat">3,702 Total</span>
                  <div className="main__title-wrap">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      className="main__title-link main__title-link--wrap"
                      data-bs-target="#modal-user"
                    >
                      Add user
                    </button>
                    <select className="filter__select" name="sort" id="filter__sort">
                      <option value={0}>Date created</option>
                      <option value={1}>Pricing plan</option>
                      <option value={2}>Status</option>
                    </select>
                    {/* search */}
                    <form action="#" className="main__title-form">
                      <input type="text" placeholder="Find user.." />
                      <button type="button">
                        <i className="ti ti-search" />
                      </button>
                    </form>
                    {/* end search */}
                  </div>
                </div>
              </div>
              {/* end main title */}
              {/* users */}
              <div className="col-12">
                <div className="catalog catalog--1">
                  <table className="catalog__table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>BASIC INFO</th>
                        <th>USERNAME</th>
                        <th>PRICING PLAN</th>
                        <th>COMMENTS</th>
                        <th>REVIEWS</th>
                        <th>STATUS</th>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Tess Harper</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Premium</div>
                        </td>
                        <td>
                          <div className="catalog__text">13</div>
                        </td>
                        <td>
                          <div className="catalog__text">1</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Approved
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
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Gene Graham</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Free</div>
                        </td>
                        <td>
                          <div className="catalog__text">1</div>
                        </td>
                        <td>
                          <div className="catalog__text">15</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Approved
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
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Rosa Lee</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Premium</div>
                        </td>
                        <td>
                          <div className="catalog__text">6</div>
                        </td>
                        <td>
                          <div className="catalog__text">6</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Approved
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
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Matt Jones</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Free</div>
                        </td>
                        <td>
                          <div className="catalog__text">11</div>
                        </td>
                        <td>
                          <div className="catalog__text">15</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--red">
                            Banned
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
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Brian Cranston</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Basic</div>
                        </td>
                        <td>
                          <div className="catalog__text">0</div>
                        </td>
                        <td>
                          <div className="catalog__text">0</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Approved
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
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Louis Leterrier</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Free</div>
                        </td>
                        <td>
                          <div className="catalog__text">2</div>
                        </td>
                        <td>
                          <div className="catalog__text">1</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Approved
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
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Son Gun</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Cinematic</div>
                        </td>
                        <td>
                          <div className="catalog__text">65</div>
                        </td>
                        <td>
                          <div className="catalog__text">0</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Approved
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
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Jordana Brewster</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Premium</div>
                        </td>
                        <td>
                          <div className="catalog__text">0</div>
                        </td>
                        <td>
                          <div className="catalog__text">0</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--red">
                            Banned
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
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Tyreese Gibson</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Premium</div>
                        </td>
                        <td>
                          <div className="catalog__text">13</div>
                        </td>
                        <td>
                          <div className="catalog__text">1</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Approved
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">01.02.2023</div>
                        </td>
                        <td>
                          <div className="catalog__btns">
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
                          <div className="catalog__user">
                            <div className="catalog__avatar">
                              <img src="img/user.svg" alt="" />
                            </div>
                            <div className="catalog__meta">
                              <h3>Charlize Theron</h3>
                              <span>email@email.com</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">Username</div>
                        </td>
                        <td>
                          <div className="catalog__text">Free</div>
                        </td>
                        <td>
                          <div className="catalog__text">1</div>
                        </td>
                        <td>
                          <div className="catalog__text">15</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--red">
                            Banned
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text">01.02.2023</div>
                        </td>
                        <td>
                          <div className="catalog__btns">
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              className="catalog__btn catalog__btn--banned"
                              data-bs-target="#modal-status"
                            >
                              <i className="ti ti-lock" />
                            </button>
                            <a
                              href="edit-user.html"
                              className="catalog__btn catalog__btn--edit"
                            >
                              <i className="ti ti-edit" />
                            </a>
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
              {/* end users */}
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
        </main>
        {/* end main content */}
        {/* user modal */}
        <div
          className="modal fade"
          id="modal-user"
          tabIndex={-1}
          aria-labelledby="modal-user"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal__content">
                <form action="#" className="modal__form">
                  <h4 className="modal__title">Add User</h4>
                  <div className="row">
                    <div className="col-12">
                      <div className="sign__group">
                        <label className="sign__label" htmlFor="email0">
                          Email
                        </label>
                        <input
                          id="email0"
                          type="text"
                          name="email0"
                          className="sign__input"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="sign__group">
                        <label className="sign__label" htmlFor="pass0">
                          Password
                        </label>
                        <input
                          id="pass0"
                          type="password"
                          name="pass0"
                          className="sign__input"
                        />
                      </div>
                    </div>
                    <div className="col-12">
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
                    <div className="col-12">
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
                    <div className="col-12 col-lg-6 offset-lg-3">
                      <button type="button" className="sign__btn sign__btn--modal">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end user modal */}
        {/* status modal */}
        <div
          className="modal fade"
          id="modal-status"
          tabIndex={-1}
          aria-labelledby="modal-status"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal__content">
                <form action="#" className="modal__form">
                  <h4 className="modal__title">Status change</h4>
                  <p className="modal__text">
                    Are you sure about immediately change status?
                  </p>
                  <div className="modal__btns">
                    <button className="modal__btn modal__btn--apply" type="button">
                      <span>Apply</span>
                    </button>
                    <button
                      className="modal__btn modal__btn--dismiss"
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span>Dismiss</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end status modal */}
        {/* delete modal */}
        <div
          className="modal fade"
          id="modal-delete"
          tabIndex={-1}
          aria-labelledby="modal-delete"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal__content">
                <form action="#" className="modal__form">
                  <h4 className="modal__title">User delete</h4>
                  <p className="modal__text">
                    Are you sure to permanently delete this user?
                  </p>
                  <div className="modal__btns">
                    <button className="modal__btn modal__btn--apply" type="button">
                      <span>Delete</span>
                    </button>
                    <button
                      className="modal__btn modal__btn--dismiss"
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span>Dismiss</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end delete modal */}
      </>
       );
}

export default UserList;