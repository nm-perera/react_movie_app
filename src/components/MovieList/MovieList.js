import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';

import Movie from '../Movie/Movie';
export const API_KEY = 'a593c1b7d580a698ccf470f4ae28a9f8';

class MovieList extends React.Component {
    state = {
        movies: [],
        searchText: ''
    }
    componentDidMount = async () => {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
        this.setState({
            movies: movies.data.results
        });
    }
    handleInput = (value) => {
        this.setState({
            searchText: value
        });
    }
    render() {
        const { movies } = this.state;
        const filteredMovies = movies.filter(movie => {
            return movie.title.toLowerCase().includes(this.state.searchText.toLowerCase())
        });
        return (
            <React.Fragment>
                <Header searchText={this.state.searchText} handleInput={this.handleInput} />
                <div className="container">
                    <div className="list">
                        {filteredMovies.map(movie => {
                            return <Movie movie={movie} key={movie.id} />
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MovieList;