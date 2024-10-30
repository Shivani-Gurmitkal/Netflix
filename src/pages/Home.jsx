import ReactPlayer from "react-player";
import movies from '../movies';
import MoviesCard from "../components/MoviesCard";

function Home(){
    return (
        <>
        <div className="relative w-full h-[100vh] overflow-hidden">
            <ReactPlayer width="100vw" className="scale-[1.50]" height="100vh" muted="true" loop="true" playing="true" url='<iframe width="560" height="315" src="https://www.youtube.com/embed/MD7v0-igVIM?si=TjkIhnhiDnNKtcU5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' /> 
            
            <div className="bg w-full flex items-center  justify-between absolute top-0  text-white">
            <div className="flex items-center gap-10">
            <img src="src\assets\Netflix-Logo.png" className="w-[100px] ml-10" alt="" />
            <div className="flex items-center gap-5 font-semibold text-sm">
                <p>Home</p>
                <p className="text-[#b8b8b8]">TV Shows</p>
                <p className="text-[#b8b8b8]">Movies</p>
                <p className="text-[#b8b8b8]">New & Popular</p>
                <p className="text-[#b8b8b8]">My List</p>
                <p className="text-[#b8b8b8]">Browse by Languages</p>
            </div>
            </div>
            <div className="flex items-center gap-5 mr-28">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <p>Children</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
            </svg>
            </div>
        </div>

        <div className="absolute top-72 left-16">
            <h1 className="text-white text-4xl font-bold tracking-wide border-l-2 border-[#D81F26] px-2">Singham Again</h1>
        </div>

        <div className="flex gap-4 absolute top-80 mt-6 left-16">
            <button className="flex items-center gap-1 font-semibold text-xl text-black bg-white px-6 py-3 rounded-md " ><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg></span>Play</button>
            <button className="flex items-center gap-2 font-semibold text-xl text-white bg-[#6b6a6caf] px-6 py-3 rounded-md"><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg></span>More info</button>
        </div>
        </div>
        <div className="ml-16 mt-3 mb-4">
            <h1 className="text-white font-semibold text-xl">Top 10 Movies in India Today </h1>
           <div className="ml-8 flex mt-4 gap-6 ">
           {
                 movies.map(movie=> <MoviesCard img={movie.img} slug={movie.slug}/>)
            }
           </div>
        </div>

        </>
    )
}

export default Home;