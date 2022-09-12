import { Container, CardWrapper, PersonalName, PosterImg } from "./ItemList.styled";
import PropTypes from 'prop-types';

export const CastList=({cast})=>{
    const defaultPoster="https://www.surf-saunton.co.uk/wp-content/uploads/2022/03/coming-soon-200x300-c-default.jpg"
    
    return(
        <>
        {cast && cast.length !== 0 ? <Container>{cast.map(actor=>{return <CardWrapper key={actor.id}> <PosterImg src={actor.profile_path ? `http://image.tmdb.org/t/p/w300${actor.profile_path}` : defaultPoster} alt={actor.name} width="100"/>
        <PersonalName>{actor.name}</PersonalName> </CardWrapper>})}</Container> : <p>Oops, seems like the cast list is empty</p>}
        
        
        </>
    )
}

CastList.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

