import React from "react";
import PropTypes from "prop-types";

// state가 필요없기 때문에 function component로 만들어도 됨

function Movvie() {
    return <h1>

    </h1>
}

Movvie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}