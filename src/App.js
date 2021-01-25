import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state={
    isLoading:true,
    movies:[]
  };
  getMovies=async()=>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  }
  componentDidMount(){
    this.getMovies();  
  }
  render(){ //순서상 2번
    const {isLoading, movies}=this.state;
    return (
    <div>
      {this.state.isLoading ? "Loading..."
      : movies.map(movie =>{
        return <Movie 
        key={movie.id}
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image} />;
      })}
    </div>);
  }
}
export default App;
