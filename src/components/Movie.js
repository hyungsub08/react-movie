import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

// state가 필요없기 때문에 function component로 만들어도 됨

function Movie({id, year, title, summary, poster, genres}) {
    return <Link to="/detail"><div className="movie">
        <img src={poster} alt={title}></img>
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <p className="movie__summary">{summary.slice(0,140)}.</p>
        <ul className="genres">
{genres.map((genre, index) => <li className="genres_genre" key={index}>{genre}</li>)}
        </ul>
    </div>
    </Link>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;