import  { useState, useEffect } from 'react';
import {fetchTrendingFilms} from '../API'
import {MoviesList} from '../components/MoviesList'

const Home = () => {

    const [movies, setMovies] = useState([]);


useEffect(() => {
  fetchTrendingFilms().then(items => {
    setMovies(items)} )
  },[]);

    return (
      
      <main>
        <h1>Trending today</h1>
        <MoviesList movies ={movies}/>
        
        
      </main>
     
    );
  };

  export default Home;