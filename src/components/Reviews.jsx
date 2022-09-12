import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {fetchReviews} from "../API"
import { ReviewsList } from "./ReviewsList"

export const Reviews=()=>{

    const [reviews, setReviews]=useState([])
    const {id} =useParams()
    // console.log(id)

    useEffect(() => {
        fetchReviews(id).then(items => {
            // console.log(items.results)
            setReviews(items.results) 
        })
    }, [id]);

    return(
        <>
            {/* <h1>Reviews</h1> */}
            <ReviewsList reviews={reviews}/>
        </>
    )
}