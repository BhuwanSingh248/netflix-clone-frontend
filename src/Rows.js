
import React, {useState, useEffect } from 'react'
import { render } from 'react-dom';
import axios from './axios';
import './Rows.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/'

const Rows = ({title, fetchUrl, isLargeRow}) =>{
    const[movie, setMovies] = useState([]);
    const[trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request =  await axios.get(fetchUrl);
            // console.log(request); 
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay: 1,
        },
    };

    const handelClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title || "")
            .then(url =>{
                console.log(`---------000----${url} -----------`)

                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                console.log(`---------------------${urlParams} and ${movie.name}-----------`)
            })
        }
        console.log(`---------------------${movie.name} -----------`)

    }
    return (
        <div>
            <h2 className='row__title'>{title}</h2> 
            <div className= 'row__posters'>
                {movie.map(movie =>(
                    <img 
                    key={movie.id}
                    onClick={()=>handelClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
};
export default Rows;
