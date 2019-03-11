import React from 'react';
import axios from 'axios';
import { API_KEY } from '../MovieList/MovieList';

const BASE_URL_S = 'http://image.tmdb.org/t/p/w154/';
const BASE_URL_L = 'http://image.tmdb.org/t/p/w1280/';

class MovieDetail extends React.Component {
    state = {
        show: {},
        video: {},
        credits: [],
        modalShow: false
    }
    componentDidMount = async () => {
        const id = this.props.match.params.id;
        const show = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
        const videos = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`);
        const credits = await axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`)
        this.setState({
            show: show.data,
            video: videos.data.results[0],
            credits: credits.data.cast.splice(0, 5)
        })
    }
    handleModal = () => {
        this.setState({
            modalShow: !this.state.modalShow
        });
    }
    render() {
        const { backdrop_path, name, genres, overview } = this.state.show;
        return (
            <div className="detail">
                <img src={`${BASE_URL_L}${backdrop_path}`} alt={name} className="detail__backdrop" />
                <div className="detail_info">
                    <h1>{name}</h1>
                    {genres && genres.map(genre => {
                        return <span key={genre.id}>{genre.name}, </span>
                    })}
                    <p> <button className="button button-primary" onClick={this.handleModal}>Watch Trailer</button></p>
                    <h5>Description</h5>
                    <p>{overview}</p>
                    <h5>Cast</h5>
                    <div className="cast-info">
                        {this.state.credits && this.state.credits.map(credit => {
                            return (
                                <div key={credit.credit_id} className="cast__info_detail">
                                    <img src={`${BASE_URL_S}${credit.profile_path}`} alt={credit.cast_id} />
                                    <p>{credit.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {this.state.modalShow && (
                    <div className="modal" onClick={this.handleModal}>
                        <i className="fas fa-times" onClick={this.handleModal}></i>
                        <iframe id="ytplayer" type="text/html" width="640" title={name} height="360"
                            src={`https://www.youtube.com/embed/${this.state.video.key}`}
                            frameborder="0"></iframe>
                    </div>
                )}
            </div>
        );
    }
}

export default MovieDetail;