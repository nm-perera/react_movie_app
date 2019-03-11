import React from 'react';
import { Link } from 'react-router-dom';

export const BASE_URL = 'http://image.tmdb.org/t/p/w154/';

const TvShow = ({ show }) => (
    <Link to={`/show/${show.id}`}>
        <div className="card">
            <img src={`${BASE_URL}${show.poster_path}`} alt={show.name} />
            <p>{show.name}</p>
            <div className="card__rating">
                <i className="fas fa-star"></i> {show.vote_average}
            </div>
        </div>
    </Link>
);

export default TvShow;