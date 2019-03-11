import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import ShowsList from './components/ShowsList/ShowsList';
import TvShowDetail from './components/TvShowDetail/TvShowDetail';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <React.Fragment>
                        <Route exact path="/" component={MovieList} />
                        <Route exact path="/movie/:id" component={MovieDetail} />
                        <Route exact path="/shows" component={ShowsList} />
                        <Route exact path="/show/:id" component={TvShowDetail} />
                    </React.Fragment>
                </Switch>
            </Router>
        );
    }
}

export default App;