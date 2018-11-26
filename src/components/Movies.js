import React from 'react';
import { movies } from '../data';
import Movie from './Movie'

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        { movies.map(movie => <Movie movie={movie} />)}
    </div>
  );
};

export default Movies;
