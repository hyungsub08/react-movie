import React from "react";
import PropTypes from "prop-types";

// state가 필요없기 때문에 function component로 만들어도 됨

function Movie({id, year, title, summary}) {
    return <h1>
        {title}
    </h1>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    // poster: PropTypes.string.isRequired
}

export default Movie;