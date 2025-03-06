import { useParams } from "react-router-dom"; // it is used to fetch the data
import movies from "../movies";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Link } from "react-router-dom";
import MoviesCard from "../components/MoviesCard";

let Add = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
)
let Done = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
</svg>
)

function Details(){
    let [watchList, setWatchList] = useState(true)
    
    let {slug} = useParams() // useParams always returns the object so we need to de-structure
    let movie = movies.find((movie)=>{
        return movie.slug == slug
    })

    let suggestions = movies.filter((data)=>{
        return data.genre == movie.genre
    })

    function watchListHandler(){
        setWatchList((prev)=>!prev)
    }

    return (
        <>
        <div className="relative w-full h-full overflow-hidden">
            <ReactPlayer width="100vw" height="100vh" className="scale-[1.50]" loop="true" playing="true" url={movie.youtube_trailer} />

            <Link to="/home" className="absolute top-8 left-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left fill-white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </Link> 
            
            <div className="absolute top-44 left-16 w-[450px] border-l-2 border-[#D81F26] px-2 bg-[#00000002]">
                <h1 className="text-white text-4xl font-bold tracking-wide">{movie.title}</h1>
                <p className="text-neutral-50 mt-2 text-sm w-[400px]">{movie.description}</p>
            </div>

            <div className="absolute top-[275px] left-16 flex gap-4 mt-10">
            <button className="flex items-center gap-1 font-semibold text-xl text-black bg-white px-6 py-3 rounded-md " ><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg></span>Play</button>
            <button onClick={watchListHandler} className="text-sm text-black bg-white px-3 py-2 rounded-md flex items-center gap-1">{watchList? <Add /> : <Done /> }Add to watchlist</button>
            </div>
            </div>

            <div className="ml-14 mt-3 mb-4">
                <h1 className="text-white font-semibold text-xl">More like this</h1>
                <div className="ml-8 flex mt-4 gap-6">
                {
                    suggestions.map(movie=> <MoviesCard img={movie.img} slug={movie.slug}/>)
                }
                </div>
            </div>
        </>
    )
}

export default Details;