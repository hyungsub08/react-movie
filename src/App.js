import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
            // ES6 Syntax
        } = await axios.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies: movies, isLoading: false});
        // console.log(movies);
    }
    componentDidMount() {
        // setTimeout(() => { this.setState({isLoading: false})} , 6000)
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        // return <div > { isLoading ? "Loading" : "We are ready" } </div>
        return <div> 
                { isLoading ? "Loading" : movies.map(movie => {
                    console.log(movie);
                    return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary}></Movie>
                }) } 
                </div>
    }
}
export default App;