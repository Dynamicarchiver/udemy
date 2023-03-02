import { Link } from "react-router-dom";
import { Hero } from "./Hero";


const MovieCard = ({ movie }) => {
const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
const detailUrl = `/movies/${movie.id} `

  return (
    <div className="col-lg-3 col-md-6 my-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={detailUrl} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
}


export const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for  ${keyword}`
 const resultsHtml = searchResults.map((obj, i) => {
  return <MovieCard movie={obj} key={i} />
 })
  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
      <div className="container">
        <div className="row">
          {resultsHtml}
        </div>
        </div>
      }
    </>
  );
};
