import {Link, useNavigate } from "react-router-dom";

//THdB API Key
//b01ff43f664d21bf218fe98f4cfcd43d
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=b01ff43f664d21bf218fe98f4cfcd43d&language=en-US&query=star%20wars&page=1&include_adult=false


export const Navbar = ({ searchText, setSearchText }) => {

    const navigate = useNavigate()

    const updateSearchText = (e) => {
        // navigate.push('/search')
        navigate('/search', {push : true})
        setSearchText(e.target.value)
    }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link disabled">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
