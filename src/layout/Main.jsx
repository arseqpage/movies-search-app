import React from 'react';
import Movies from "../components/Movies";
import {URL, API_KEY} from "../utils/getFilms";
import Preloader from "../components/Preloader";
import {Search} from "../components/Search";


class Main extends React.Component {
    state = {
        movies: [],
        type: ''
    }

    searchFilms = (params, type = 'all') => {
        console.log(type)
        fetch(URL + API_KEY + '&s=' + params + `${type !== 'all' ? `&type=${type}` : ''}`)
            .then(resp => resp.json())
            .then(data => this.setState({...this.state, movies: data.Search}))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        fetch(URL + API_KEY + '&s=matrix')
            .then(resp => resp.json())
            .then(data => this.setState({...this.state, movies: data.Search}))
            .catch(err => console.log(err))
    }

    render() {
        const {movies} = this.state

        return (
            <main className='container content'>
                <Search searchFilms={this.searchFilms}/>

                {movies?.length
                    ? <Movies movies={movies} />
                    : <Preloader/>
                }
            </main>
        );
    }
};

export default Main;