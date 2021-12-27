import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Rows from "./Rows";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
class App extends Component {
    render() {
        return (
            <div className='App'>
                {/* navbar */}
                {/* banner */}
                <Nav/>
                <Banner/>
                <Rows title='Netflix Originals'
                fetchUrl={requests.fetchNetflixOriginals} 
                isLargeRow = {true}/>
                <Rows title='Trending' fetchUrl={requests.fetchTrending} />
                <Rows title='Top Rated' fetchUrl={requests.fetchTopRated} />
                <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies} />
                <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
                <Rows title='Romance' fetchUrl={requests.fetchRomanceMovies} />
                <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
            </div>
        );
    }
}

export default App;
