import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    return movieData.map((data, idx) => <MovieCard key={idx} title={data.title} IMDBRating={data.IMDBRating} poster={data.poster} genres={data.genres} />);
  }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        {/* {console.log(this.generateMovieCards())} */}
      </div>
    )
  }
}
