import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import './Banner.css'

function Banner() {
    const [movies, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ],
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movies);
    const truncate = (str, n)=>{
        return str?.length>n ? str.substr(0, n-1) + "..." :str;
    };
    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
            "https://image.tmdb.org./t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}>
            <div className='banner__container'>
                {/* title */}
                <h1 className="banner__title">
                    {movies?.title || movies?.original_name || movies?.name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description" >
                    {truncate(movies?.overview, 150)}
                </h1>
                <div className="banner__fadeBottom"></div>
            </div>
            {/* bg image */}
            {/* title */}
            {/* buttoon */}
            {/* description */}
        </header>
    );
}

export default Banner;
