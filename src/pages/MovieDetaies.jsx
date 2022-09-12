import { useState, useEffect } from "react"
import { useLocation, useParams, Outlet, Link } from "react-router-dom"
import {fetchFilmsById} from '../API'
import { MovieCartWrapper, ImgWrapper, AdditionalLinkWrapper, AdditionalLink } from "./MovieDetaies.styled";

const MovieDetaies=()=>{
    const [movie, setMovie]=useState(null)
    const {id}=useParams()
    const location=useLocation()
    const backLinkHref = location.state?.from ?? "/movies";
    const defaultPoster="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"

    useEffect(() => {
        fetchFilmsById(id).then(items => {
            setMovie(items) })
            
        
}, [id]);

let genresArr=[]
if(movie){genresArr = movie.genres.map(item=>item.name)
}


    return (
        <>
        <Link to={backLinkHref}>Go Back</Link>
        
        {movie && (
            <div> 
                <MovieCartWrapper>
                    <ImgWrapper> 
                    <img src={movie.poster_path ?`https://image.tmdb.org/t/p/w500${movie.poster_path}`:defaultPoster} alt={movie.original_title}  width="200"/> 
                    </ImgWrapper>               
                <div>
                    <h3>{movie.original_title}({movie.release_date})</h3>
                    <p><span> <b>Vote average:</b>  </span>{movie.vote_average} </p>
                    <p> <b>Overview</b> </p>
                    <p>{movie.overview}</p>
                    <p> <b>Genres</b> </p>
                    <p>{genresArr.join(', ')}</p>

                </div>  </MovieCartWrapper>
                  
                <hr />
                <h4>Additional information</h4>     
               <AdditionalLinkWrapper>
                    <li><AdditionalLink to="cast" state={{from:location.state.from}}>Cast</AdditionalLink></li>
                    <li><AdditionalLink to="reviews" state={{from:location.state.from}}>Reviews</AdditionalLink></li>
               </AdditionalLinkWrapper>           
                <Outlet/>
           
            </div>
        )}
    </>
    )
}

export default MovieDetaies;

