import PropTypes from 'prop-types';

export const ReviewsList=({reviews})=>{
    return(
        <>
        {reviews && reviews.length !== 0 ? <ul>{reviews.map(review=>{return <li key={review.id}>
            <span> <b>Author: {review.author}</b> </span>
            <p >{review.content}</p>
            </li>})}</ul> : <p>We don't have any reviews for this movie</p>}
        
        
        </>
    )
}

ReviewsList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  }