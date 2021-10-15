import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Movie = ({ Title: title, Year: year, imdbID: id, Type: type, Poster: poster }) => {
  return (
    <Card
      id={id}
      hoverable
      style={{ width: 240 }}
      cover={
        poster === 'N/A' ? (
          <img src={`https://via.placeholder.com/300x150?text=${title}`} alt="" />
        ) : (
          <img className="activator" src={poster} alt={title} />
        )
      }>
      <Meta title={title} description={`${year} ${type}`} />
    </Card>
  );
};

export default Movie;
