import React from 'react';
import { directors } from '../data';
import Director from './Director'

const Directors = () => {
  return (
    <div>
     <h1>Directors</h1>
      { directors.map(dir => <Director director={dir} /> )}
    </div>
  );
}

export default Directors
