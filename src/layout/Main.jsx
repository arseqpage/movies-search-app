import React from 'react';
import Movies from "../components/Movies";
import {URL, API_KEY} from "../utils/getFilms";

class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch(URL + API_KEY + '&s=matrix')
            .then(resp => resp.json())
            .then(data => this.setState({...this.state, movies: data.Search}))
            .catch(err => console.log(err))
    }

    render() {
        const {movies} = this.state

        console.log(movies)

        return (
            <main className='container content'>
                {movies.length
                    ? <Movies movies={movies}/>
                    : <h3>Loading movies...</h3>
                }
            </main>
        );
    }
};

export default Main;