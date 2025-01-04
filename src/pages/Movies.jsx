import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import home_movies from "../home_movies";
import hollywood_movies from "../hollywood_movies";
import only_movies from  "../only_movies";
import today_movies from "../today_movies";
import india_movies from "../india_movies"
import good_movies from "../good_movies"
import MoviesCard from "../components/MoviesCard";
import Footer from "../components/Footer";

let UnmuteIcon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-up fill-white" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
        <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
    </svg>
);
let MuteIcon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-mute fill-white" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
    </svg>
);

function Movies(){
    let [volume, setVolume]= useState(true);

    function volumeHandler(){
        setVolume((prev)=>!prev)
    }
    
    return(
        <>
        
        <div className="relative w-full h-[100vh] overflow-hidden">
            <ReactPlayer width="100vw" className="scale-[1.50]" height="100vh" muted={volume} loop="true" playing="true" url='<iframe width="560" height="315" src="https://www.youtube.com/embed/oDR_D2NHUjA?si=m-fQTrXAE6YjsuPd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'/>

            <div className="w-full flex items-center  justify-between absolute top-0 bg-black  text-white">
            <div className="flex items-center gap-10">
            <img src="src\assets\Netflix-Logo.png" className="w-[100px] ml-10" alt="" />
            <div className="flex items-center gap-5 font-semibold text-sm">
                <Link to="/"><p className="text-[#b8b8b8] hover:text-neutral-400 ">Home</p></Link>
                <p className="text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer">TV Shows</p>
                <p>Movies</p>
                <p className="text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer">New & Popular</p>
                <p className="text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer">My List</p>
                <p className="text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer">Browse by Languages</p>
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

        <div className="absolute top-20 left-16 flex items-center gap-10 justify-center">
            <h1 className="text-white text-4xl font-semibold">Movies</h1>
            <p className="border pl-2 pr-2 py-1 text-sm flex items-center justify-center gap-8 text-white bg-black hover:bg-[#eeeeee28] hover:cursor-pointer">Genres <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg></span></p>
        </div>

        <div className="absolute top-52 left-16">
            <img className="w-80" src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYn8_ssaSM-9W51cEdiy9-jxTvLud-X6V98NrwQfsDr4CwihvoZjte9az-_4xTabp9m52j4mUMhnkXarqJ4Z4UksdX2Y1mNqRTr53Bkwq-mioajnTd1Fi5E885KJrQciAwOjvGQokrp_UOEBC-9ap0_mtRRUCvn_CFWdRB0NLGazG98Yw_sH9Q.webp?r=cdb" alt="" />
            <div className="w-[450px] mt-4">
            <p className="text-white font-bold text-xl">More Umjolo Stories Coming Soon</p>
            <p className="text-white mt-2 bg-[#00000000]">Shezi Sibongisen starts as Lethu, a woman who navigates the complexities of an open relationship, and the deceit that still arises as a result.</p>
            </div>
        </div>

        <div className="flex gap-4 absolute bottom-6 mt-6 left-16">
            <button className="flex items-center gap-1 font-semibold text-xl text-black bg-white px-6 py-3 rounded-md " ><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg></span>Play</button>
            <button className="flex items-center gap-2 font-semibold text-xl text-white bg-[#6b6a6caf] px-6 py-3 rounded-md"><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg></span>More info</button>
        </div>

        <div className="absolute right-0 bottom-16 flex gap-4 items-center">
            <button onClick={volumeHandler} className="border-white border w-10 h-10 rounded-full flex items-center justify-center bg-[#eeeeee0c]">{volume ? <MuteIcon />: <UnmuteIcon/>}</button>
            <div className="bg-[#363b368d] px-2 py-1 text-white w-20 border-l-2 border-white">A</div>
        </div>
        </div>

        <div className="ml-14 mt-3 mb-10">
        <h1 className="text-white font-semibold text-xl">Skip the Queues, Watch at Home </h1>
        <div className="flex gap-2 mt-2">
        {
            home_movies.map(movies=> <Card img={movies.img} slug={movies.slug}/>)
        }
        </div>
        </div>

        <div className="ml-14 mb-10">
        <h1 className="text-white font-semibold text-xl">Hollywood Movies</h1>
        <div className="flex gap-2 mt-2">
        {
            hollywood_movies.map(movies=> <Card img={movies.img} slug={movies.slug}/>)
        }
        </div>
        </div>

        <div className="ml-14 mb-10">
        <h1 className="text-white font-semibold text-xl">Only on Netflix</h1>
        <div className="flex gap-2 mt-2">
        {
            only_movies.map(movies=> <Card img={movies.img} slug={movies.slug}/>)
        }
        </div>
        </div>

        <div className="ml-14 mb-10">
            <h1 className="text-white font-semibold text-xl">Top 10 Movies in India Today </h1>
           <div className="ml-8 flex mt-4 gap-6">
           {
                 india_movies.map(movie=> <MoviesCard img={movie.img} slug={movie.slug}/>)
            }
           </div>
        </div>

        <div className="ml-14 mb-10">
        <h1 className="text-white font-semibold text-xl">Feel-Good Comdey Movies</h1>
        <div className="flex gap-2 mt-2">
        {
            good_movies.map(movies=> <Card img={movies.img} slug={movies.slug}/>)
        }
        </div>
        </div>

        <div className="ml-14 mb-20">
        <h1 className="text-white font-semibold text-xl">Today's Top Picks for You</h1>
        <div className="flex gap-2 mt-2">
        {
            today_movies.map(movies=> <Card img={movies.img} slug={movies.slug}/>)
        }
        </div>
        </div>

        <Footer/>

        </>
    )
}

export default Movies;