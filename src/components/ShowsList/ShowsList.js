import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';

import TvShow from '../TvShow/TvShow';
export const API_KEY = 'a593c1b7d580a698ccf470f4ae28a9f8';

class ShowsList extends React.Component {
    state = {
        shows: [],
        searchText: ''
    }
    componentDidMount = async () => {
        const shows = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
        this.setState({
            shows: shows.data.results
        });
    }
    handleInput = (value) => {
        this.setState({
            searchText: value
        });
    }
    render() {
        const { shows } = this.state;
        const filteredShows = shows.filter(show => {
            return show.name.toLowerCase().includes(this.state.searchText.toLowerCase())
        });
        return (
            <React.Fragment>
                <Header searchText={this.state.searchText} handleInput={this.handleInput} />
                <div className="container">
                    <div className="list">
                        {filteredShows.map(show => {
                            return <TvShow show={show} key={show.id} />;
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ShowsList;