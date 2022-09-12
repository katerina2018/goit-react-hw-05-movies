import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY ='b3c01be5bc2b7d2add68ea109477f643';

export const fetchTrendingFilms=async () =>{
    const {data:{results}} = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=1`);
    return results;
}

export const fetchFilmsByQuery=async (query) =>{
    const {data:{results}} = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
    return results;
}

export const fetchFilmsById=async (id) =>{
    const {data} = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return data;
}

export const fetchCast=async (id) =>{
    const {data} = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return data;
}

export const fetchReviews=async (id) =>{
    const {data} = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return data;
}