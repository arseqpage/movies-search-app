import React from 'react';
import Movies from '../components/Movies';
import { URL, API_KEY } from '../utils/getFilms';
import Preloader from '../components/Preloader';
import { Search } from '../components/Search';
import { Row, Col } from 'antd';

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  searchFilms = (params, type = 'all') => {
    this.setState({ loading: true });

    if (!params) {
      params = 'matrix';
    }

    fetch(URL + API_KEY + '&s=' + params + `${type !== 'all' ? `&type=${type}` : ''}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ ...this.state, movies: data.Search, loading: false }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    fetch(URL + API_KEY + '&s=matrix')
      .then((resp) => resp.json())
      .then((data) => this.setState({ ...this.state, movies: data.Search, loading: false }))
      .catch((err) => console.log(err));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <Row>
        <Col span={18} offset={3}>
          <div className="search">
            <Search searchFilms={this.searchFilms} loading={loading} />
          </div>
        </Col>

        <Col span={20} offset={2}>
          {loading ? <Preloader /> : <Movies movies={movies} />}
        </Col>
      </Row>
    );
  }
}

export default Main;
