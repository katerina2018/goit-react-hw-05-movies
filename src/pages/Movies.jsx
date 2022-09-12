import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Searchbar} from "../components/Searchbar"
import {MoviesList} from "../components/MoviesList"
import {fetchFilmsByQuery} from "../API"

const Movies=()=>{

    const [movies, setMovies]=useState([])

    const [searchParams, setSearchParams]=useSearchParams()

    useEffect(() => {
        const params=searchParams.get('query') ?? ''

        if(params?.trim()){fetchFilmsByQuery(params).then(items => {if(items.length !== 0) {setMovies(items)} else{toast.error('no movies found')}} )
       
  
    }
        
        
    }, [ searchParams]);

    
    const onSubmit=(e)=>{
        e.preventDefault();
        const value=e.currentTarget.elements.inputValue.value
  
        setSearchParams(value !=='' ? {query:value}: {})
        
    }
    
    return (
        <>
         <ToastContainer position="top-center" autoClose={3000} />
        
  
            <Searchbar handleFormSubmit={onSubmit}/>
            <MoviesList movies={movies}/> 
            

        </>
        
    )
    
    

}

export default Movies;
