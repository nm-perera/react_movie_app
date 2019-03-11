import React from 'react';
import { Link } from 'react-router-dom';

export const BASE_URL = 'http://image.tmdb.org/t/p/w154/';

const Movie = ({ movie }) => (
    <Link to={`/movie/${movie.id}`}>
        <div className="card">
            <img src={`${BASE_URL}${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <div className="card__rating">
                <i className="fas fa-star"></i> {movie.vote_average}
            </div>
        </div>
    </Link>
);

export default Movie;