import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import home_movies from "../home_movies"

function Videos(){
    let {slug} = useParams();
    let movie = home_movies.find((movie)=>{
        return movie.slug == slug
    })

    return (
        <>
        <div className="relative w-full h-full overflow-hidden">
            <ReactPlayer width="100vw" height="100vh" className="scale-[1.50]"  loop="true" playing="true" url={movie.youtube_trailer} />

            <Link to="/movies" className="absolute top-8 left-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left fill-white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </Link>
        </div>
        </>
    )
}

export default Videos;