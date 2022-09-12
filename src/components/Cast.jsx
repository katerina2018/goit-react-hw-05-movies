import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {fetchCast} from "../API"
import { CastList } from "./CastList"

export const Cast=()=>{

    const [cast, setCast]=useState([])
    const {id} =useParams()

    useEffect(() => {
        fetchCast(id).then(items => {
            setCast(items.cast) })
    }, [id]);

    return(
        <>
            <CastList cast={cast}/>
        </>
    )
}