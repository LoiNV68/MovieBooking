function MovieList() {
    return ( <>
        {/* main content */}
        <main className="main">
          <div className="container-fluid">
            <div className="row">
              {/* main title */}
              <div className="col-12">
                <div className="main__title">
                  <h2>Catalog</h2>
                  <span className="main__title-stat">14,452 Total</span>
                  <div className="main__title-wrap">
                    <a
                      href="add-item.html"
                      className="main__title-link main__title-link--wrap"
                    >
                      Add item
                    </a>
                    <select className="filter__select" name="sort" id="filter__sort">
                      <option value={0}>Date created</option>
                      <option value={1}>Rating</option>
                      <option value={2}>Views</option>
                    </select>
                    {/* search */}
                    <form action="#" className="main__title-form">
                      <input type="text" placeholder="Find movie / tv series.." />
                      <button type="button">
                        <i className="ti ti-search" />
                      </button>
                    </form>
                    {/* end search */}
                  </div>
                </div>
              </div>
              {/* end main title */}
              {/* items */}
              <div className="col-12">
                <div className="catalog catalog--1">
                  <table className="catalog__table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>RATING</th>
                        <th>CATEGORY</th>
                        <th>VIEWS</th>
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
                          <div className="catalog__text">
                            <a href="#">I Dream in Another Language</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">7.9</div>
                        </td>
                        <td>
                          <div className="catalog__text">Movie</div>
                        </td>
                        <td>
                          <div className="catalog__text">1392</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Visible
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">The Forgotten Road</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">7.1</div>
                        </td>
                        <td>
                          <div className="catalog__text">Movie</div>
                        </td>
                        <td>
                          <div className="catalog__text">1093</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--red">
                            Hidden
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">Whitney</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">6.3</div>
                        </td>
                        <td>
                          <div className="catalog__text">TV Series</div>
                        </td>
                        <td>
                          <div className="catalog__text">723</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Visible
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">Red Sky at Night</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">8.4</div>
                        </td>
                        <td>
                          <div className="catalog__text">TV Series</div>
                        </td>
                        <td>
                          <div className="catalog__text">2457</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Visible
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">Into the Unknown</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">7.9</div>
                        </td>
                        <td>
                          <div className="catalog__text">Movie</div>
                        </td>
                        <td>
                          <div className="catalog__text">5092</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Visible
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">The Unseen Journey</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">7.1</div>
                        </td>
                        <td>
                          <div className="catalog__text">TV Series</div>
                        </td>
                        <td>
                          <div className="catalog__text">2713</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--red">
                            Hidden
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">Savage Beauty</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">6.3</div>
                        </td>
                        <td>
                          <div className="catalog__text">Cartoon</div>
                        </td>
                        <td>
                          <div className="catalog__text">901</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Visible
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">Endless Horizon</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">8.4</div>
                        </td>
                        <td>
                          <div className="catalog__text">Movie</div>
                        </td>
                        <td>
                          <div className="catalog__text">8430</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Visible
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">The Lost Key</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">7.9</div>
                        </td>
                        <td>
                          <div className="catalog__text">Movie</div>
                        </td>
                        <td>
                          <div className="catalog__text">818</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--green">
                            Visible
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
                          <div className="catalog__text">
                            <a href="#">Echoes of Yesterday</a>
                          </div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--rate">7.1</div>
                        </td>
                        <td>
                          <div className="catalog__text">Anime</div>
                        </td>
                        <td>
                          <div className="catalog__text">1046</div>
                        </td>
                        <td>
                          <div className="catalog__text catalog__text--red">
                            Hidden
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
                            <a href="#" className="catalog__btn catalog__btn--view">
                              <i className="ti ti-eye" />
                            </a>
                            <a
                              href="add-item.html"
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
              {/* end items */}
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
      </>
       );
}

export default MovieList;