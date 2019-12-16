import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
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
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
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
        return (<section className="container"> 
                { isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {
                            movies.map(movie => {
                                console.log(movie);
                                return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} genres={movie.genres} poster={movie.large_cover_image}></Movie>
                            })
                        }
                    </div>
                )
                } 
                </section>)
    }
}
export default Home;