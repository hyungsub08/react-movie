import React from "react";
import axios from "axios";
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
        } = await axios.get("http://yts-proxy.now.sh/list_movies.json");
        this.setState({movies: movies, isLoading: false});
        // console.log(movies);
    }
    componentDidMount() {
        // setTimeout(() => { this.setState({isLoading: false})} , 6000)
        this.getMovies();
    }
    render() {
        const {
            isLoading
        } = this.state;
        return <div > { isLoading ? "Loading" : "We are ready" } </div>
    }
}
export default App;