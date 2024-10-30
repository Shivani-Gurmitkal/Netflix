import { useParams } from "react-router-dom"; // it is used to fetch the data
import movies from "../movies";

function Details(){
    let {slug} = useParams() // useParams always returns the object so we need to de-structure
    let movie = movies.find((movie)=>{
        return movie.slug == slug
    })
    return (
        <>
        <h1 className="text-white">{movie.description}</h1>
        </>
    )
}

export default Details;