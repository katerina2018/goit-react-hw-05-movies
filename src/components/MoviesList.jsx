import { Link, useLocation } from "react-router-dom"
import { Container, CardWrapper, PersonalName, PosterImg } from "./ItemList.styled";

const defaultPoster="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"

export const MoviesList=({movies})=>{
    const location =useLocation()

    return(
        <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <PosterImg src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: defaultPoster} alt={movie.original_title} />
            <PersonalName>{movie.original_title}</PersonalName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
        
    )
}

