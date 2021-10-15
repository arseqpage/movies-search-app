import React from 'react';
import { Row, Col } from 'antd';

import Movie from './Movie';

const Movies = ({ movies = [] }) => {
  return (
    <Row
      gutter={[16, 16]}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {movies?.length ? (
        movies.map((movie) => (
          <Col span={{ xs: 12, sm: 8, md: 4 }}>
            <div>
              <Movie key={movie.imdbID} {...movie} />
            </div>
          </Col>
        ))
      ) : (
        <h4>Ничего не найдено</h4>
      )}
    </Row>
  );
};

export default Movies;
